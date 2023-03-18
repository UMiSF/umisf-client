import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import styles from './adminPaymentsPage.module.css'

const AdminPaymentsPage = () => {
    return (
        <div className={`${styles["home-container"]}`}>

            <ProfileHeader user_type={"admin"} />
            <ProfileNavbar page='payments'/>

            Home
        </div>
    );
};

export default AdminPaymentsPage;