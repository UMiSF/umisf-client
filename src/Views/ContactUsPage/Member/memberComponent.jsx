import React from 'react'
import styles from './membercomponent.module.css'

function Member(props) {
  let Pic = require( `../../../assests/images/${props.img}`)
  return (
    <div className={`${styles['member']}`}>
      <div className={`${styles['member-img']}`}>
          <img className={`${styles['mem-img']}`} src={Pic}></img>
      </div>
      <div className={`${styles['member-info']}`}>
        <p>{props.name}</p>
        <div>{props.tag}</div>
        <div>{props.phone}</div>
        <div className={`${styles['social']}`}>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Member
