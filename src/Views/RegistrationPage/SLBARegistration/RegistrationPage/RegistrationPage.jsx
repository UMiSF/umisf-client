import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()

    const register = (event) => {
        event.preventDefault();
        console.log("Register function called")
    }

    return (
        <>
            <div>
                <h1> Registration Page</h1>
                <h4>After Registering here the player is registered to the software. Then the player should have an option to enter an entry</h4>
                <div >
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        placeholder='First Name' />
                </div>
                <div >
                    <input
                        value={secondName}
                        onChange={(e) => setSecondName(e.target.value)}
                        type="text"
                        placeholder='Second Name' />
                </div>
                <div>
                    <input
                        value={nicNo}
                        onChange={(e) => setNicNo(e.target.value)}
                        type="text"
                        placeholder='NIC Number' />
                </div>
                <div >
                    <input
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        type="text"
                        placeholder='Mobile Number' />
                </div>
                <div >
                    <input
                        value={landLineNo}
                        onChange={(e) => setLandLineNo(e.target.value)}
                        type="text"
                        placeholder='Land-Line Number' />
                </div>
                <div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email' />
                </div>
                <div >
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder='Postal Address' />
                </div>
                <div>
                    <input
                        value={schoolClub}
                        onChange={(e) => setSchoolClub(e.target.value)}
                        type="text"
                        placeholder='School/Club' />
                </div>
                <div >
                    <span className='details'>Enter Your Date of Birth  </span>
                    <input
                        value={bday}
                        onChange={(e) => setBday(e.target.value)}
                        type={'date'}
                    />
                </div>
                <div >
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option selected disabled value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="FeMale" >Female</option>
                    </select>
                </div>
                < div >
                    <input type='submit' value='register' onClick={register}></input>
                </div>
            </div>
        </>

    )
}
export default RegistrationPage