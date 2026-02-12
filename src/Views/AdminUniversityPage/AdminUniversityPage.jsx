import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import styles from './adminUniversitiesPage.module.css';
import { useLocation } from 'react-router-dom';
import { getPaymentSlipHref } from '../../common/paymentSlip';


const AdminUniversityPage = () => {
  let location = useLocation();
  const {university} = location.state
  const [show, setShow] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [universityDetails, setUniversityDetails] = useState({ university })

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
        <img src={require('../../assests/images/forward_arrow.png')} alt="" /> {university.name}
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
          <div className={`${styles['profile-field-value']}`}>{university.name}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Match Type</div>
          <div className={`${styles['profile-field-value']}`}>{university.matchType}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement method</div>
          <div className={`${styles['profile-field-value']}`}>{university.paymentMethod}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement confirmed</div>
          <div className={`${styles['profile-field-value']}`}>{university.paymentConfirmed}</div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payement slip</div>
          <div className={`${styles['profile-field-value']}`}>
            {(() => {
              const href = getPaymentSlipHref(university.paymentSlip);
              if (!href) return university.paymentSlip;
              return (
                <a href={href} target="_blank" rel="noreferrer" download>
                  View slip
                </a>
              );
            })()}
          </div>
        </div>
        <hr />

        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Payment Approver</div>
          <div className={`${styles['profile-field-value']}`}>{university.paymentApprover}</div>
        </div>
        <hr />
        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Contact Number</div>
          <div className={`${styles['profile-field-value']}`}>{university.contactNumber}</div>
        </div>
        <hr />
        <div className={`${styles['profile-field-container']}`}>
          <div className={`${styles['profile-field-name']}`}>Email</div>
          <div className={`${styles['profile-field-value']}`}>{university.email}</div>
        </div>
        <hr />

        {Array.isArray(university.teamMembers) && university.teamMembers.length > 0 && (
          <>
            <div className={`${styles['profile-field-container']}`}>
              <div className={`${styles['profile-field-name']}`}>Team Members</div>
              <div className={`${styles['profile-field-value']}`}>
                {university.teamMembers.map((m, idx) => (
                  <div key={`${m.registrationNumber || m.fullName || idx}`}>
                    {(m.fullName || `${m.firstName || ''} ${m.lastName || ''}`.trim() || 'Member')}{' '}
                    {m.nicNumber ? `- ${m.nicNumber}` : ''}{' '}
                    {m.registrationNumber ? `(${m.registrationNumber})` : ''}{' '}
                    {m.contactNumber ? `- ${m.contactNumber}` : ''}
                  </div>
                ))}
              </div>
            </div>
            <hr />
          </>
        )}
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
