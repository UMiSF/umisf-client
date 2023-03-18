import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './adminPaymentsPage.module.css'

const AdminPaymentsPage = () => {
    return (
        <div className={`${styles["home-container"]}`}>
            <ProfileHeader user_type={"admin"} />
            <AdminNavbar page='payments'/>
            Home
        </div>
    );
};

export default AdminPaymentsPage;