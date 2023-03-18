import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import styles from './adminHomePage.module.css'

const AdminHomePage = () => {
    return (
        <div className={`${styles["home-container"]}`}>

            <ProfileHeader user_type={"admin"} />
            <ProfileNavbar page='home'/>
            
            Home
        </div>
    );
};

export default AdminHomePage;