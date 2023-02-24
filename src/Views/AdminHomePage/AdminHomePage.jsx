import React from 'react';
import AdminHeader from '../AdminHeaderPage/AdminHeader';
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './adminHomePage.module.css'

const AdminHomePage = () => {
    return (
        <div className={`${styles["home-container"]}`}>
            <AdminHeader/>
            <AdminNavbar page='home'/>
            Home
        </div>
    );
};

export default AdminHomePage;