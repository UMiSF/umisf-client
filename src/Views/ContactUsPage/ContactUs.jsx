import React, { useEffect, useState } from 'react';
import styles from './contactus.module.css';
import Footer from '../HomePage/Footer/footer';
import Header from '../HeaderPage/HeaderPage';
import Member from './Member/memberComponent';
import { message } from 'antd';
import Axios from 'axios';
import { Form } from 'react-bootstrap';
function ContactUs() {
  const [feedback, setFeedback] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    sentDate: new Date(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validated, setValidated] = useState(false); //form validation
  const loadSideBar = () => {
    let display = document.querySelector('#navSideBar').style.display;
    display === 'block' ? (document.querySelector('#navSideBar').style.display = 'none') : (document.querySelector('#navSideBar').style.display = 'block');
  };

  useEffect(() => {
    if (isSubmitting) {
      // show loading message
      message.loading('Submitting form...');
    }
  }, [isSubmitting]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted: ', feedback);

    const form = e.currentTarget;
    //form validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    if (!Object.values(feedback).includes('')) {
      setIsSubmitting(true);

      try {
        const res = await Axios.post(
          process.env.REACT_APP_API_URL + '/feedbacks/add',
          { feedbackData: feedback },
          {
            headers: {},
          }
        );

        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000);
        setTimeout(() => {
          message.success(res.data.message);
        }, 2000);
        //console.log(res.data);
        setTimeout(() => {
          window.location.reload(true);
        }, 2500);
      } catch (error) {
        console.log('Error: ', error);
        message.error(error.response.data.message);
      }
    }
  }

  return (
    <div>
      <div className={`${styles['headerDiv']}`}>
        <Header />

        <div className={`${styles['UMiSF-container']}`}>
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className={`${styles['container']}`}>
        <div className={`${styles['captain-contaier']}`}>
          <div className={`${styles['member']}`}>
            <Member img={'Captain_male.jpg'} name={'Nadun Gunawardana'} tag={'Captain'} phone={'0764197875'} />
          </div>
          <div className={`${styles['member']}`}>
            <Member img={'ViceCaptain_male.jpg'} name={'Vinul Fernando'} tag={'Vice Captain'} phone={'0764197875'} />
          </div>
        </div>
        <div className={`${styles['captain-contaier']}`}>
          <div className={`${styles['member']}`}>
            <Member img={'Captain_female.JPG'} name={'Nethmi Jayakody'} tag={'Captain'} phone={'0764197875'} />
          </div>
          <div className={`${styles['member']}`}>
            <Member img={'ViceCaptain_female.jpg'} name={'Dulja Bamunusinghe'} tag={'Vice Captain'} phone={'0764197875'} />
          </div>
        </div>
      </div>

      <div className={`${styles['contct-us-form']}`}>
        <Form className="needs-validation"  noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label className={`${styles['label']}`} htmlfor="Firstname">
                First name
              </label>
              <input
                type="text"
                className={`${styles['input']} form-control`}
                id="Firstname"
                placeholder="First name"
                required
                onChange={(e) => {
                  setFeedback((prevValue) => {
                    return { ...prevValue, firstName: e.target.value };
                  });
                }}
                value={feedback.firstName}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label className={`${styles['label']}`} htmlfor="Lastname">
                Last name
              </label>
              <input
                type="text"
                className={`${styles['input']} form-control`}
                id="Lastname"
                placeholder="Last name"
                required
                onChange={(e) => {
                  setFeedback((prevValue) => {
                    return { ...prevValue, lastName: e.target.value };
                  });
                }}
                value={feedback.lastName}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label className={`${styles['label']}`} htmlfor="Email">
                Email
              </label>
              <input
                type="email"
                className={`${styles['input']} form-control`}
                id="Email"
                placeholder="Email"
                required
                onChange={(e) => {
                  setFeedback((prevValue) => {
                    return { ...prevValue, email: e.target.value };
                  });
                }}
                value={feedback.email}
              />
            </div>
          </div>
          <div className="form-row">
            <label className={`${styles['label']}`} for="message">
              Message
            </label>
            <textarea
              className={`${styles['input']} form-control`}
              id="message"
              placeholder="Type your message here.."
              rows="3"
              required
              onChange={(e) => {
                setFeedback((prevValue) => {
                  return { ...prevValue, message: e.target.value };
                });
              }}
              value={feedback.message}
            ></textarea>
          </div>

          <button className={`${styles['send-button']} btn btn-primary`} type="submit">
            Send
          </button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
