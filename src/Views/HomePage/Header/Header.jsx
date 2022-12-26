import React , {useEffect} from 'react'
import styles from './header.module.css'

const HomePage = () => {

    const loadSideBar = ()=>{
        let display = document.querySelector('#navSideBar').style.display;
        display === 'block' ?document.querySelector('#navSideBar').style.display = 'none':document.querySelector('#navSideBar').style.display = 'block';
    }

  return (
    <div>
      <div className={`${styles['headerDiv']}`}>
        <div className={`${styles['navBarList']}`}>
          <img src={require("../../../assests/images/umisf_logo.png")} alt={'logo'}></img>
          <ul>
          <li className={`${styles['navBarItem']}`}>
                  <a href="/">Home</a>
                  </li>
            <li className={`${styles['navBarItem']}`}>
              <a href="#">About</a>
            </li>
            <li className={`${styles['navBarItem']}`}>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li className={`${styles['navBarItem']}`}>
              <a href="#">Gallery</a>
            </li>
            <li className={`${styles['navBarItem']}`}>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
        {/* minimized side nav bar */}
        <i  id='toggle-btn' className={`${styles['toggle-button']} bx bx-menu`} onClick={loadSideBar}></i>
        <img id='side-img' className={`${styles['side-img']}`} src={require("../../../assests/images/umisf_logo.png")} alt={'logo'}></img>
        <div id='navSideBar' className={`${styles['navSideBar']}`}>
            <ul>
              <li className={`${styles['navBarItem']}`}>
                  <a href="/">Home</a>
                  </li>
                <li className={`${styles['navBarItem']}`}>
                <a href="#">About</a>
                </li>
                <li className={`${styles['navBarItem']}`}>
                <a href="#">Contact Us</a>
                </li>
                <li className={`${styles['navBarItem']}`}>
                <a href="#">Gallery</a>
                </li>
                <li className={`${styles['navBarItem']}`}>
                <a href="#">Register</a>
                </li>
            </ul>
        </div>
        {/* ---- */}
        <div className={`${styles['UMiSF-container']}`}>
          <h1>UMiSF</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A <br/>facere
            eligendi esse explicabo laborum repudiandae corporis <br/>praesentium et
            ducimus quod ut veniam deleniti periam 
          </p>

          <button type='button'>View More</button>
        </div>
       
      </div>
    </div>
  )
}

export default HomePage
