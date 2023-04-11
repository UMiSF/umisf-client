import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import styles from './AdminMessages.module.css';
import { useState, useEffect } from 'react';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { Select, Space, Button, message, Row, Col } from 'antd';

import Axios from 'axios';

const AdminMessagesPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
  });

 

  const handleApprove = async (index) => {
    // let data = filteredDetails[index];
    // console.log('Approved', data._id);
    // try {
    //   const result = await Axios.put(
    //     process.env.REACT_APP_API_URL + `/${filter.matchType.toLowerCase()}/update`,
    //     {
    //       field: '_id',
    //       value: data._id,
    //       data: { paymentConfirmed: 1, paymentApprover: user },
    //     },
    //     {
    //       headers: {},
    //     }
    //   );
    //   if (result?.data?.data) {
    //     console.log('Updated Result', result?.data?.data);
    //     rearrangeFilteredDetails(1, index, data);
    //   } else {
    //     console.log('Empty');
    //   }
    // } catch (error) {
    //   console.log(error);
    //   message.error(error.response?.data?.message);
    // }
  };

  return (
    <div className={`${styles['tournament-container']}`}>
      <ProfileHeader user_type={'admin'} />
      <AdminNavbar page="messages" />

      <div className={`${styles['main-title']}`}>
        <a href="/admin/messages">Messages</a>
      </div>
      <div className={`${styles['tool-bar']}`}></div>

      <div className={`${styles['folder-container']}`}>
        {messages?.length === 0 ? (
          <div style={{ fontFamily: 'Hind', fontSize: '18px', textAlign: 'center' }}> No feedbacks yet ...</div>
        ) : (
          <div>
            <div className={`${styles['table-headers']}`}>
              <div className={`${styles['table-header']}`} style={{ width: '14%' }}>
                ID
              </div>
              <div className={`${styles['table-header']}`}>Name</div>
              <div className={`${styles['table-header']}`}>Email</div>
              <div className={`${styles['table-header']}`}>Date</div>
              <div className={`${styles['table-header']}`}>Feedback</div>
              <div className={`${styles['table-header']}`} style={{ width: '3%' }}>
                {}
              </div>
            </div>
            <div>
              {messages?.map((message, index) => (
                <div className={`${styles['table-body']}`}>
                  <div className={`${styles['table-row']}`} style={{ width: '14%' }}>
                    {message.firstName + " " + message.lastName}
                  </div>
                  <div className={`${styles['table-row']}`}>{message.email}</div>
                  <div className={`${styles['table-row']}`}>{message.date}</div>
                  <div className={`${styles['table-row']}`}>{message.message}</div>
                  <div className={`${styles['table-header']}`} style={{ width: '3%' }}>
                    <Row gutter={36}>
                      <Col span={1}>
                        <CheckCircleTwoTone twoToneColor="#52c41a" className={`${styles['action']}`} onClick={(e) => handleApprove(index)} name={index} />
                      </Col>
                    </Row>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessagesPage;
