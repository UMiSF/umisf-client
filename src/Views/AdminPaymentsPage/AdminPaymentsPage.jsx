import React from 'react';
import AdminHeader from '../AdminHeaderPage/AdminHeader';
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './adminPaymentsPage.module.css'

const AdminPaymentsPage = () => {
    return (
        <div className={`${styles["home-container"]}`}>
            <AdminHeader/>
            <AdminNavbar page='payments'/>
            Home
        </div>
    );
};

export default AdminPaymentsPage;