import React from "react";
import HeaderPage from "../../HeaderPage/HeaderPage";
import styles from "./UniversityRegistration.module.css";

export default function RegistrationClosed() {
  return (
    <>
      <HeaderPage />
      <main className={styles.pageWrapper}>
        <h1 className={styles.title}>Registrations Closed</h1>
        <div className={styles.infoCard}>
          <p style={{ margin: 0 }}>
            Registrations for <strong>University Team</strong> are currently closed.
            Please contact the organizing committee for further inquiries.
          </p>
        </div>
      </main>
    </>
  );
}

