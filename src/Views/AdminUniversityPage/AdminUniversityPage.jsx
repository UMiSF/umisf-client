import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import styles from './adminUniversitiesPage.module.css';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { message } from 'antd';
import defualtUser from '../../assests/images/default-user.png';


const AdminUniversityPage = () => {
  let {year, university} = useParams()
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [universityDetails, setUniversityDetails] = useState({
    name: "UOM",
    matchType: "Male",
    paymentMethod: "Bank Transfer",
    paymentConfirmed: "-1",
    paymentSlip: "slip.pdf",
    paymentApprover: "Poorna Cooray",
    contactNumber: "0762343434",
    email: "prnsd@gmail.com"
  })

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className={`${styles['account-container']}`}>
      <ProfileHeader user_type={'admin'} />
      <AdminNavbar page="universities" />

      <div className={`${styles['main-title']}`}>
        <a href="/admin/universities">University</a>
        <img src={require('../../assests/images/forward_arrow.png')} alt="" /> {university}
      </div>
      <div className={`${styles['tool-bar']}`}>

        <button onClick={handleShow}>
          <img src={require('../../assests/images/delete.png')} alt="" /> Delete University
        </button>
      </div>
      <div className={`${styles['profile-container']}`}>
        <div className={`${styles['profile-type']}`}></div>
        <hr />
        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Name</div>
          <div className={`${styles['profile-field-value']}`}>{universityDetails.name}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Match Type</div>
          <div className={`${styles['profile-field-value']}`}>{universityDetails.matchType}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement method</div>
          <div className={`${styles['profile-field-value']}`}>{universityDetails.paymentMethod}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement confirmed</div>
          <div className={`${styles['profile-field-value']}`}>{universityDetails.paymentConfirmed}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement slip</div>
          <div className={`${styles['profile-field-value']}`}><a href={`../../assests/documents/payments/${universityDetails.paymentSlip}`} download>{universityDetails.paymentSlip}</a></div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payment Approver</div>
          <div className={`${styles['profile-field-value']}`}>{universityDetails.paymentApprover}</div>
        </div>
        <hr />
        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Contact Number</div>
          <div className={`${styles['profile-field-value']}`}>{universityDetails.contactNumber}</div>
        </div>
        <hr />
        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Email</div>
          <div className={`${styles['profile-field-value']}`}>{universityDetails.email}</div>
        </div>
        <hr />
      </div>
      {/* modal for deleting */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header style={{ backgroundColor: '#f5f6fa' }}>
          <Modal.Title style={{ fontFamily: 'Hind', fontSize: '18px' }}>Delete User Account</Modal.Title>
        </Modal.Header>
        <form style={{ backgroundColor: '#f5f6fa' }}>
          <Modal.Body>
            <div className="row">
              <div className="col-11">
                <h5 style={{ fontFamily: 'Hind', fontSize: '18px' }}>Are you sure you want to delete this user account? </h5>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button onClick={handleClose} className="btn btn-secondary" style={{ fontFamily: 'Hind', fontSize: '18px' }}>
              Close
            </button>
            <button type="submit" className="btn btn-light" onClick={deleteUser} style={{ fontFamily: 'Hind', fontSize: '18px', background: 'red', color: 'white' }}>
              Delete
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AdminUniversityPage;
