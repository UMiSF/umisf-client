import React , {useEffect} from 'react'
import Footer from '../HomePage/Footer/footer';
import styles from './aboutPage.module.css'


const AboutPage = () => {

    const loadSideBar = ()=>{
        let display = document.querySelector('#navSideBar').style.display;
        display === 'block' ?document.querySelector('#navSideBar').style.display = 'none':document.querySelector('#navSideBar').style.display = 'block';
    }

  return (
    <div>
        <div className={`${styles['headerDiv1']}`}>
            <div className={`${styles['navBarList']}`}>
            <img src={require("../../assests/images/umisf_logo.png")} alt={'logo'}></img>
            <ul>
                <li className={`${styles['navBarItem']}`}>
                <a href="/">Home</a>
                </li>
                <li className={`${styles['navBarItem']}`}>
                <a href="/about">About</a>
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
            <img id='side-img' className={`${styles['side-img']}`} src={require("../../assests/images/umisf_logo.png")} alt={'logo'}></img>
            <div id='navSideBar' className={`${styles['navSideBar']}`}>
                <ul>
                    <li className={`${styles['navBarItem']}`}>
                    <a href="#">Home</a>
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
            <div className={`${styles['about-container']}`}>
                <h1>About Us</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A <br/>facere
                        eligendi esse explicabo laborum repudiandae corporis eligendi esse explicabo laborum repudiandae corporis<br/>praesentium et
                        ducimus quod ut veniam deleniti periam 
                    </p>

                <button type='button'>View More</button>
            </div>
        </div>
        {/* mission vission section */}
        <section class={`${styles['objectives']}`}>
            <h1>We are bla bla bla</h1>
            <p>Sri Lanka's largest collection of education courses, scholarships and events from best universities and institutions. Courses for After A/L or O/L students.
                <br />Sri Lanka's largest collection of education courses, scholarships and events from best universities and institutions. Courses for After A/L or O/L students.Sri Lanka's largest collection of education courses, scholarships and events from best universities and institutions. Courses for After A/L or O/L students.
            </p>
            <div class={`${styles['row']}`}>
                <div class={`${styles['objectives-col']}`}>
                    <h3>VISSION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class={`${styles['objectives-col']}`}>
                    <h3>MISSION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class={`${styles['objectives-col']}`}>
                    <h3>TARGETS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </section>
        {/*  */}
        <section class={`${styles['past-section1']}`}>
        <section class={`${styles['past-section']}`}>
            <h1>Our History</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

                LOREM IPSUM GENERATOR</p>
            <div class={`${styles['row']}`}>
                <div class={`${styles['past-section-col']}`}>
                    <img class={`${styles['past-section-img']}`}src={require("../../assests/images/2017.jpeg")} alt=""></img> 
                    <h3>2017</h3> 
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

                        LOREM IPSUM GENERATOR</p>
                </div>
                <div class={`${styles['past-section-col']}`}>
                    <img class={`${styles['past-section-img']}`}src={require("../../assests/images/2018.jpeg")} alt=""></img>
                    <h3>2018</h3>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

                        LOREM IPSUM GENERATOR</p>
                </div>
                <div class={`${styles['past-section-col']}`}>
                    <img class={`${styles['past-section-img']}`}src={require("../../assests/images/2019.jpeg")} alt=""></img>
                    <h3>2019</h3>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

                        LOREM IPSUM GENERATOR</p>
                </div>
                <div class={`${styles['past-section-col']}`}>
                    <img class={`${styles['past-section-img']}`}src={require("../../assests/images/2020.jpeg")} alt=""></img>
                    <h3>2020</h3>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

                        LOREM IPSUM GENERATOR</p>
                </div>
            </div>
        </section>
        </section>

        {/* fffffffffffffffff */}
        <section class={`${styles['testimonials']}`}>
            <h1>Masseges from Organizing commitee</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

                LOREM IPSUM GENERATOR</p>
            <div class={`${styles['row']}`}>
                <div class={`${styles["testimanial-col"]}`}>
                    <img src={require("../../assests/images/Captain_male.jpg")} alt=""></img>
                    <div>
                        <p>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

    LOREM IPSUM GENERATOR
                        </p>
                        <h3>Harshani Bandara</h3>
                        <h6>Captain(2022-2023)</h6>
                    </div>
                </div>
                <div class={`${styles["testimanial-col"]}`}>
                    <img src={require("../../assests/images/Captain_female.JPG")} alt=""></img>
                    <div>
                        <p>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

    LOREM IPSUM GENERATOR
                        </p>
                        <h3>Nethmi Jayakodi</h3>
                        <h6>Captain(2022-2023)</h6>
                    </div>
                </div>
            </div>
            <div class={`${styles['row']}`}>
                <div class={`${styles["testimanial-col"]}`}>
                    <img src={require("../../assests/images/ViceCaptain_male.jpg")} alt=""></img>
                    <div>
                        <p>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

    LOREM IPSUM GENERATOR
                        </p>
                        <h3>Harshani Bandara</h3>
                        <h6>Captain(2022-2023)</h6>
                    </div>
                </div>
                <div class={`${styles["testimanial-col"]}`}>
                    <img src={require("../../assests/images/ViceCaptain_female.jpg")} alt=""></img>
                    <div>
                        <p>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

    LOREM IPSUM GENERATOR
                        </p>
                        <h3>Nethmi Jayakodi</h3>
                        <h6>Captain(2022-2023)</h6>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
  )
}

export default AboutPage;