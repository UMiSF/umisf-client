import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import styles from './adminCompaniesPage.module.css';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { message } from 'antd';
import defualtUser from '../../assests/images/default-user.png';


const AdminCompanyPage = () => {
  let {year, company} = useParams()
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [companyDetails, setCompanyDetails] = useState({
    name: "UOM",
    matchType: "A Division",
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
      <AdminNavbar page="companies" />

      <div className={`${styles['main-title']}`}>
        <a href="/admin/companies">Companies</a>
        <img src={require('../../assests/images/forward_arrow.png')} alt="" /> {company}
      </div>
      <div className={`${styles['tool-bar']}`}>

        <button onClick={handleShow}>
          <img src={require('../../assests/images/delete.png')} alt="" /> Delete Company
        </button>
      </div>
      <div className={`${styles['profile-container']}`}>
        <div className={`${styles['profile-type']}`}></div>
        <hr />
        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Name</div>
          <div className={`${styles['profile-field-value']}`}>{companyDetails.name}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Match Type</div>
          <div className={`${styles['profile-field-value']}`}>{companyDetails.matchType}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement method</div>
          <div className={`${styles['profile-field-value']}`}>{companyDetails.paymentMethod}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement confirmed</div>
          <div className={`${styles['profile-field-value']}`}>{companyDetails.paymentConfirmed}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement slip</div>
          <div className={`${styles['profile-field-value']}`}><a href={`../../assests/documents/payments/${companyDetails.paymentSlip}`} download>{companyDetails.paymentSlip}</a></div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payment Approver</div>
          <div className={`${styles['profile-field-value']}`}>{companyDetails.paymentApprover}</div>
        </div>
        <hr />
        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Contact Number</div>
          <div className={`${styles['profile-field-value']}`}>{companyDetails.contactNumber}</div>
        </div>
        <hr />
        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Email</div>
          <div className={`${styles['profile-field-value']}`}>{companyDetails.email}</div>
        </div>
        <hr />
      </div>
      {/* modal for deleting */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header style={{ backgroundColor: '#f5f6fa' }}>
          <Modal.Title style={{ fontFamily: 'Hind', fontSize: '18px' }}>Delete Company</Modal.Title>
        </Modal.Header>
        <form style={{ backgroundColor: '#f5f6fa' }}>
          <Modal.Body>
            <div className="row">
              <div className="col-11">
                <h5 style={{ fontFamily: 'Hind', fontSize: '18px' }}>Are you sure you want to delete this company? </h5>
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

export default AdminCompanyPage;
