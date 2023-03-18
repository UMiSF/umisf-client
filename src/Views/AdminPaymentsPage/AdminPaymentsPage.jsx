import React from 'react';
import AdminHeader from '../AdminHeaderPage/AdminHeader';
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import styles from './adminPaymentsPage.module.css'

const AdminPaymentsPage = () => {
    return (
        <div className={`${styles["home-container"]}`}>
            <AdminHeader/>
            <ProfileNavbar page='payments'/>
            Home
        </div>
    );
};

export default AdminPaymentsPage;