import React from 'react';
// import "./RegistrationPage.css"
import { useState } from 'react';
import SinglesRegistration from './SinglesRegistration/SinglesRegistration';
import DoublesRegistration from './DoublesRegistration/DoublesRegistration';
import UniversityTeamRegistration from './UniversityTeamRegistration/UniversityTeamRegistration';
import EntryForm from './SLBARegistration/EntryForm/EntryForm';
import RegistrationPag from './SLBARegistration/RegistrationPage/RegistrationPage';

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
       <>
       <RegistrationPag/>
       </> 
    );
};

export default RegistrationPage;