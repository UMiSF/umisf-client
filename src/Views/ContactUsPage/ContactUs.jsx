import React, { useEffect } from 'react'
import styles from './contactus.module.css'
import Footer from '../HomePage/Footer/footer'
import Header from '../HeaderPage/HeaderPage'
import Member from './Member/memberComponent'

function ContactUs() {
    const loadSideBar = ()=>{
        let display = document.querySelector('#navSideBar').style.display;
        display === 'block' ?document.querySelector('#navSideBar').style.display = 'none':document.querySelector('#navSideBar').style.display = 'block';
    }

  return (
    <div>
      <div className={`${styles['headerDiv']}`}>
        
        <Header/>
        
        <div className={`${styles['UMiSF-container']}`}>
          <h1>Contact Us</h1>
        </div>
       
      </div>

      <div className={`${styles['container']}`}>
          <div className={`${styles['captain-contaier']}`}>
          <div className={`${styles['member']}`}>
              <Member img={'Captain_male.jpg'} name={'Nadun Gunawardana'} tag={'Captain'} phone={'0764197875'}/>
              </div>
              <div className={`${styles['member']}`}>
              <Member img={'ViceCaptain_male.jpg'} name={'Vinul Fernando'} tag={'Vice Captain'} phone={'0764197875'}/>
              </div>
              <div className={`${styles['member']}`}>
                <Member img={'Captain_female.JPG'} name={'Nethmi Jayakody'} tag={'Captain'} phone={'0764197875'}/>
              </div>
              <div className={`${styles['member']}`}>
              <Member img={'ViceCaptain_female.jpg'} name={'Dulja Bamunusinghe'} tag={'Vice Captain'} phone={'0764197875'}/>
              </div>
          </div>
        </div>

      <div className={`${styles['contct-us-form']}`}>
        <form className="needs-validation" novalidate>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label className={`${styles['label']}`} htmlfor="Firstname">First name</label>
              <input
                type="text"
                className={`${styles['input']} form-control`}
                id="Firstname"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label className={`${styles['label']}`} htmlfor="Lastname">Last name</label>
              <input
                type="text"
                className={`${styles['input']} form-control`}
                id="Lastname"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label className={`${styles['label']}`} htmlfor="Email">Email</label>
              <input
                type="email"
                className={`${styles['input']} form-control`}
                id="Email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="form-row">

              <label className={`${styles['label']}`} for="message">Message</label>
              <textarea
                className={`${styles['input']} form-control`}
                id="message"
                placeholder="Type your message here.."
                rows="3"
              ></textarea>
          </div>

          <button className={`${styles['send-button']} btn btn-primary`} type="submit">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs
