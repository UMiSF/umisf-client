import React, { useMemo, useState } from "react";
import { message } from "antd";
import HeaderPage from "../../HeaderPage/HeaderPage";
import Footer from "../../HomePage/Footer/footer";
import styles from "./UniversityRegistration.module.css";
import { api, API_BASE_URL } from "../../../common/api";
import ImageUploader from "../Common/imageUploader/ImageUploader";
import RegistrationClosed from "./RegistrationClosed";
import {
  preflightBackendHealth,
  showBackendDownModal,
} from "../../../common/backendAvailability";

const TOURNAMENT_GUIDELINES_URL =
  "https://drive.google.com/file/d/1Zb_YdAWpWUcjpoxAusV156iqoi4stg2m/view?usp=drivesdk";

const UNIVERSITY_OPTIONS = [
  "University of Moratuwa",
  "University of Colombo",
  "University of Kelaniya",
  "University of Sri Jayewardenepura",
  "University of Ruhuna",
  "University of Jaffna",
  "University of Vavuniya",
  "University of the Visual & Performing Arts",
  "Eastern University of Sri Lanka",
  "Rajarata University of Sri Lanka",
  "Sabaragamuwa University of Sri Lanka",
  "Uva Wellassa University",
  "Wayamba University of Sri Lanka",
  "South Eastern University of Sri Lanka",
  "Gampaha Wickramarachchi University of Indigenous Medicine",
];

const CATEGORY_OPTIONS = [
  { label: "Men’s Team Championship", matchType: "Male" },
  { label: "Women’s Team Championship", matchType: "Female" },
];

const TEAM_OPTIONS = ["Team A", "Team B"];

function splitName(fullName) {
  const parts = String(fullName || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: parts[0] };
  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts[parts.length - 1],
  };
}

const emptyMember = { name: "", contactNumber: "", nicNumber: "", registrationNumber: "" };

export default function UniversityRegistration() {
  const isUniversityRegistrationOpen =
    String(process.env.REACT_APP_UNI_REG_OPEN || "true").toLowerCase() !==
    "false";

  const eventYear = useMemo(() => String(new Date().getFullYear()), []);

  const [universityName, setUniversityName] = useState("");
  const [category, setCategory] = useState("");
  const [teamName, setTeamName] = useState("");

  const [teamEmail, setTeamEmail] = useState("");
  const [teamContactNumber, setTeamContactNumber] = useState("");

  const paymentMethod = "Bank Transfer";
  const [paymentSlip, setPaymentSlip] = useState(null);
  const [paymentSlipFiles, setPaymentSlipFiles] = useState([]);

  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const [members, setMembers] = useState([]);
  const [current, setCurrent] = useState(emptyMember);
  const [editIndex, setEditIndex] = useState(null);

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    contactNumber: "",
    nicNumber: "",
    registrationNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isMemberLimitReached = members.length >= 8;

  const addOrUpdateMember = () => {
    const errors = { name: "", contactNumber: "", nicNumber: "", registrationNumber: "" };

    if (!current.name) errors.name = "Full name is required.";
    if (!current.contactNumber) errors.contactNumber = "Contact number is required.";
    if (!current.nicNumber) errors.nicNumber = "NIC number is required.";
    if (!current.registrationNumber) errors.registrationNumber = "Registration number is required.";

    setFieldErrors(errors);
    if (errors.name || errors.contactNumber || errors.nicNumber || errors.registrationNumber) return;

    if (editIndex !== null) {
      const updated = [...members];
      updated[editIndex] = current;
      setMembers(updated);
      setEditIndex(null);
    } else {
      if (isMemberLimitReached) return;
      setMembers([...members, current]);
    }

    setCurrent(emptyMember);
    setFieldErrors({ name: "", contactNumber: "", nicNumber: "", registrationNumber: "" });
  };

  const editMember = (index) => {
    setCurrent(members[index]);
    setEditIndex(index);
  };

  const deleteMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setCurrent(emptyMember);
    }
  };

  const handleRegisterTeam = async () => {
    setError("");

    if (!universityName || !category || !teamName) {
      setError("Please select University, Category, and Team Name.");
      return;
    }

    if (!teamEmail || !teamContactNumber) {
      setError("Please provide Team Email and Contact Number.");
      return;
    }

    if (members.length < 5) {
      setError("You must add at least 5 members to register the team.");
      return;
    }

    if (!paymentSlip) {
      setError("Please upload the payment slip as a PDF.");
      return;
    }

    if (!agreed) {
      setError("You must agree to the tournament guidelines to register.");
      return;
    }

    const health = await preflightBackendHealth();
    if (health === false) {
      showBackendDownModal();
      return;
    }

    const categoryMatchType = CATEGORY_OPTIONS.find((c) => c.label === category)?.matchType;

    const universityDetails = {
      name: universityName,
      matchType: categoryMatchType || "",
      email: teamEmail,
      contactNumber: teamContactNumber,
      paymentMethod,
      paymentSlip,
      year: eventYear,
      teamName,
    };

    const players = members.map((m) => {
      const { firstName, lastName } = splitName(m.name);
      return {
        firstName,
        lastName,
        institute: universityName,
        gender: categoryMatchType || "",
        contactNumber: m.contactNumber,
        nicNumber: m.nicNumber,
        email: teamEmail,
        registrationNumber: m.registrationNumber,
        year: eventYear,
      };
    });

    try {
      setIsSubmitting(true);
      const res = await api.post("/university/add", { universityDetails, players });
      message.success(res?.data?.message || "Registered");

      setTimeout(() => window.location.reload(), 1200);
    } catch (err) {
      console.error("University registration request failed", {
        message: err?.message,
        baseURL: err?.config?.baseURL,
        url: err?.config?.url,
        method: err?.config?.method,
        status: err?.response?.status,
        data: err?.response?.data,
      });
      if (!err?.response) {
        message.error(`Network/CORS error calling ${API_BASE_URL}/university/add`);
        showBackendDownModal();
        return;
      }
      message.error(err?.response?.data?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isUniversityRegistrationOpen) return <RegistrationClosed />;

  return (
    <>
      <HeaderPage />

      <main className={styles.pageWrapper}>
        <h1 className={styles.title}>Event Registration – University Team</h1>

        <div className={styles.infoCard}>
          <p>
            <strong>UMISF Badminton Championship - University Team Registration</strong>
          </p>

          <ul>
            <li>📍 MBA</li>
            <li>📅 26th – 2nd February {eventYear}</li>
            <li>⏰ Entries close: 20th February {eventYear}</li>
          </ul>

          <a
            className={styles.guidelineLink}
            href={TOURNAMENT_GUIDELINES_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View Tournament Guidelines
          </a>

          <div className={styles.agreement}>
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="agree">
              I hereby agree to comply with the rules governing the tournament and the decision of
              the Tournament Committee.
            </label>
          </div>
        </div>

        <div className={styles.formCard}>
          <div className={styles.grid}>
            <div>
              <label>University</label>
              <select value={universityName} onChange={(e) => setUniversityName(e.target.value)}>
                <option value="">Select University</option>
                {UNIVERSITY_OPTIONS.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c.label} value={c.label}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Team Name</label>
              <select value={teamName} onChange={(e) => setTeamName(e.target.value)}>
                <option value="">Select Team</option>
                {TEAM_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Team Email</label>
              <input
                value={teamEmail}
                onChange={(e) => setTeamEmail(e.target.value)}
                placeholder="team@email.com"
              />
            </div>

            <div>
              <label>Team Contact Number</label>
              <input
                value={teamContactNumber}
                onChange={(e) => setTeamContactNumber(e.target.value)}
                placeholder="07XXXXXXXX"
              />
            </div>

          </div>

          <h3 className={styles.sectionTitle}>Team Members</h3>
          <p className={styles.helperText}>Minimum of 5 and maximum of 8 members per team</p>

          <div className={styles.memberInput}>
            <div>
              <input
                placeholder="Full Name"
                value={current.name}
                onChange={(e) => setCurrent({ ...current, name: e.target.value })}
              />
              {fieldErrors.name && <span className={styles.fieldError}>{fieldErrors.name}</span>}
            </div>

            <div>
              <input
                placeholder="Contact Number"
                value={current.contactNumber}
                onChange={(e) => setCurrent({ ...current, contactNumber: e.target.value })}
              />
              {fieldErrors.contactNumber && (
                <span className={styles.fieldError}>{fieldErrors.contactNumber}</span>
              )}
            </div>

            <div>
              <input
                placeholder="NIC Number"
                value={current.nicNumber}
                onChange={(e) => setCurrent({ ...current, nicNumber: e.target.value })}
              />
              {fieldErrors.nicNumber && (
                <span className={styles.fieldError}>{fieldErrors.nicNumber}</span>
              )}
            </div>

            <div>
              <input
                placeholder="Registration Number"
                value={current.registrationNumber}
                onChange={(e) => setCurrent({ ...current, registrationNumber: e.target.value })}
              />
              {fieldErrors.registrationNumber && (
                <span className={styles.fieldError}>{fieldErrors.registrationNumber}</span>
              )}
            </div>

            <button
              type="button"
              className={styles.actionBtn}
              onClick={addOrUpdateMember}
              disabled={isMemberLimitReached && editIndex === null}
            >
              {editIndex !== null ? "Update Member" : "Add Member"}
            </button>
          </div>

          {members.map((m, i) => (
            <div key={`${m.registrationNumber}-${i}`} className={styles.memberRow}>
              <span>{m.name}</span>
              <span>{m.contactNumber}</span>
              <span>{m.nicNumber}</span>
              <span>{m.registrationNumber}</span>

              <div className={styles.actions}>
                <button type="button" className={styles.edit} onClick={() => editMember(i)}>
                  Edit
                </button>
                <button type="button" className={styles.delete} onClick={() => deleteMember(i)}>
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className={styles.paymentRow}>
            <div className={styles.paymentInfo}>
              <h4>Payment Details</h4>
              <p>Account Name: Badminton UOM</p>
              <p>Account Number: 85473940</p>
              <p>Branch: University of Moratuwa</p>
              <p>
                <strong>Fee: Rs. 10,000.00</strong>
              </p>
              <p>
                <strong>Upload the payment slip as PDF</strong>
              </p>
            </div>

            <div className={styles.uploadSection}>
              <ImageUploader
                isfile
                accept=".pdf"
                allowedTypes={["application/pdf"]}
                setImage={setPaymentSlip}
                fileList={paymentSlipFiles}
                setFileList={setPaymentSlipFiles}
                setImageName={() => {}}
              />
            </div>
          </div>

          {error && <p className={styles.errorText}>{error}</p>}

          <div className={styles.registerWrapper}>
            <button
              type="button"
              className={styles.registerBtn}
              onClick={handleRegisterTeam}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Register Team"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
