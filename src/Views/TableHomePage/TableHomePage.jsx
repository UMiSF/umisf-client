import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import TableNavbar from '../TableNavbar/TableNavbar';
import styles from './tableHomePage.module.css'

const TableHomePage = () => {
    return (
        <div className={`${styles["home-container"]}`}>

            <ProfileHeader user_type={"table-organizer"} />
            <TableNavbar page='home'/>
            
            Home
        </div>
    );
};

export default TableHomePage;