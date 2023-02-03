import React from 'react';
import "./RegistrationPage.css"
import { useState } from 'react';


const RegistrationPage = () => {
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [nicNo, setNicNo] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [landLineNo, setLandLineNo] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [schoolClub, setSchoolClub] = useState("")
    const [bday, setBday] = useState(new Date())
    const [gender, setGender] = useState("")
    const [singles, setSingles] = useState(false)
    const [singlesAgeCat, setSinglesAgeCat] = useState('')
    const [doubles, setDoubles] = useState(false)
    const [doublesAgeCat, setDoublesAgeCat] = useState('')
    const [doubleFirstName, setDoubleFirstName] = useState("")
    const [doubleSecondName, setDoublesSecondName] = useState("")
    const [doubleNicNo, setDoubleNicNo] = useState("")
    const [doubleBday, setDoubleBday] = useState(new Date())
    const [mixDoubles, setMixDoubles] = useState(false)
    const [mixDoublesAgeCat, setMixDoublesAgeCat] = useState('')
    const [mixDoubleFirstName, setMixDoubleFirstName] = useState("")
    const [mixDoubleSecondName, setMixDoublesSecondName] = useState("")
    const [mixDoubleNicNo, setMixDoubleNicNo] = useState("")
    const [mixDoubleBday, setMixDoubleBday] = useState(new Date())


    const register=(event)=>{
        event.preventDefault();
        console.log("Register function called")
    }

    return (
        <div className='container'>
            <h1>Registration Page</h1>
            <form action='#' >
                <div className='user-details'>
                    <div className='input-box'>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            placeholder='First Name' />
                    </div>
                    <div className='input-box'>
                        <input
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                            type="text"
                            placeholder='Second Name' />
                    </div>
                    <div className='input-box'>
                        <input
                            value={nicNo}
                            onChange={(e) => setNicNo(e.target.value)}
                            type="text"
                            placeholder='NIC Number' />
                    </div>
                    <div className='input-box'>
                        <input
                            value={mobileNo}
                            onChange={(e) => setMobileNo(e.target.value)}
                            type="text"
                            placeholder='Mobile Number' />
                    </div>
                    <div className='input-box'>
                        <input
                            value={landLineNo}
                            onChange={(e) => setLandLineNo(e.target.value)}
                            type="text"
                            placeholder='Land-Line Number' />
                    </div>
                    <div className='input-box'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='Email' />
                    </div>
                    <div className='input-box'>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            placeholder='Postal Address' />
                    </div>
                    <div className='input-box'>
                        <input
                            value={schoolClub}
                            onChange={(e) => setSchoolClub(e.target.value)}
                            type="text"
                            placeholder='School/Club' />
                    </div>
                </div>
                <div className='bod-gender'>
                    <div className='birthday-details'>
                        <span className='details'>Enter Your Date of Birth  </span>
                        <input
                            value={bday}
                            onChange={(e) => setBday(e.target.value)}
                            type={'date'}
                        />
                    </div>
                    <div className='gender'>
                        <select className='select' value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option selected disabled value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="FeMale" >Female</option>
                        </select>
                    </div>
                </div>
                <div className="Single-Age">
                    <div className="single">
                        <label htmlFor='sng'>Single</label>
                        <input
                            checked={singles}
                            onChange={(e) => setSingles(e.target.checked)}
                            type={'checkbox'}
                            name='Singles' id='sng'
                        />
                    </div>
                    {singles && <div className="S-age">
                        <select className='s-select' value={singlesAgeCat} onChange={(e) => setSinglesAgeCat(e.target.value)}>
                            <option selected disabled value="">Age-Category</option>
                            <option value="U13">U-13</option>
                            <option value="U15">U-15</option>
                            <option value="U17">U-17</option>
                            <option value="U19">U-19</option>
                            <option value="open">Open</option>
                        </select>
                    </div>}

                </div>
                <div className="double-age-name">
                    <div className="double-Age">
                        <div className="single">
                            <label htmlFor='db'>Double</label>
                            <input
                                checked={doubles}
                                onChange={(e) => setDoubles(e.target.checked)}
                                type={'checkbox'}
                                name='doubles' id='db'
                            />
                        </div>
                        {doubles && <div className="D-age">
                            <select className='d-select' value={doublesAgeCat} onChange={(e) => setDoublesAgeCat(e.target.value)}>
                                <option selected disabled value="">Age-Category</option>
                                <option value="U13">U-13</option>
                                <option value="U15">U-15</option>
                                <option value="U17">U-17</option>
                                <option value="U19">U-19</option>
                                <option value="open">Open</option>
                            </select>
                        </div>}
                    </div>
                    {doubles && <>
                    <div className="partner-name">
                        <div className='input-box' style={{ paddingRight: '5px' }}>
                        <input
                            value={doubleFirstName}
                            onChange={(e) => setDoubleFirstName(e.target.value)}
                            type="text"
                            placeholder='Double Partner First Name' />
                        </div>
                        <div className='input-box' style={{ paddingLeft: '5px' }}>
                        <input
                            value={doubleSecondName}
                            onChange={(e) => setDoublesSecondName(e.target.value)}
                            type="text"
                            placeholder='Second Name' />
                        </div>
                    </div>
                    <div className='partner-dob-nic'>
                        <div className='partner-birthday-details' style={{ paddingRight: 'px' }}>
                            <span className='bod-font'>Partner's DoB&nbsp;&nbsp; </span>
                            <input
                            value={doubleBday}
                            onChange={(e) => setDoubleBday(e.target.value)}
                            type={'date'}
                        />
                        </div>
                        <div className='input-box' style={{ paddingLeft: '23px' }}>
                        <input
                            value={doubleNicNo}
                            onChange={(e) => setDoubleNicNo(e.target.value)}
                            type="text"
                            placeholder='Double Partner NIC Number' />
                        </div>
                    </div>
                    </>}

                </div>
                <div className="double-age-name">
                    <div className="double-Age">
                        <div className="single">
                            <label htmlFor='mdb'>Mix Double</label>
                            <input
                                checked={mixDoubles}
                                onChange={(e) => setMixDoubles(e.target.checked)}
                                type={'checkbox'}
                                name='mix doubles' id='mdb'
                            />
                        </div>
{       mixDoubles &&                 <div className="D-age">
                            <select className='d-select'  value={mixDoublesAgeCat} onChange={(e) => setMixDoublesAgeCat(e.target.value)}>
                                <option selected disabled value="">Age-Category</option>
                                <option value="U13">U-13</option>
                                <option value="U15" >U-15</option>
                                <option value="U17">U-17</option>
                                <option value="U19">U-19</option>
                                <option value="open">Open</option>
                            </select>
                        </div>}
                    </div>
                    {mixDoubles&&<>
                    <div className="partner-name">
                        <div className='input-box' style={{ paddingRight: '5px' }}>
                        <input
                            value={mixDoubleFirstName}
                            onChange={(e) => setMixDoubleFirstName(e.target.value)}
                            type="text"
                            placeholder='Mix Double Partner First Name' />
                        </div>
                        <div className='input-box' style={{ paddingLeft: '5px' }}>
                        <input
                            value={mixDoubleSecondName}
                            onChange={(e) => setMixDoublesSecondName(e.target.value)}
                            type="text"
                            placeholder='Mix Double Partner Second Name' />
                        </div>
                    </div>
                    <div className='partner-dob-nic'>
                        <div className='partner-birthday-details' style={{ paddingRight: 'px' }}>
                            <span className='bod-font'>Partner's DoB&nbsp;&nbsp; </span>
                            <input
                            value={mixDoubleBday}
                            onChange={(e) => setMixDoubleBday(e.target.value)}
                            type={'date'}
                        />
                        </div>
                        <div className='input-box' style={{ paddingLeft: '23px' }}>
                        <input
                            value={mixDoubleNicNo}
                            onChange={(e) => setMixDoubleNicNo(e.target.value)}
                            type="text"
                            placeholder='Double Partner NIC Number' />
                        </div>
                    </div>
                    </>}
                    
                </div>

                <div className='button'>
                    <input type='submit' value='register' onClick={register}></input>
                </div>
            </form>
        </div>
    );
};

export default RegistrationPage;