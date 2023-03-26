import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import OrganizerNavbar from '../OrganizerNavbar/OrganizerNavbar';
import styles from './organizerHomePage.module.css'

const OrganizerHomePage = () => {
    return (
        <div className={`${styles["home-container"]}`}>

            <ProfileHeader user_type={"organizer"} />
            <OrganizerNavbar page='home'/>
            
            Home
        </div>
    );
};

export default OrganizerHomePage;