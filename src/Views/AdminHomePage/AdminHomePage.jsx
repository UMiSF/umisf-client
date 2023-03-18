import React from 'react';
import AdminHeader from '../AdminHeaderPage/AdminHeader';
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import styles from './adminHomePage.module.css'

const AdminHomePage = () => {
    return (
        <div className={`${styles["home-container"]}`}>
            <AdminHeader/>
            <ProfileNavbar page='home'/>
            Home
        </div>
    );
};

export default AdminHomePage;