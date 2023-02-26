import { React, useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2';


const EntryForm = () => {
    const [myId, setMyID] = useState(0);
    const [doublePartnerID, setDoublePartnerID] = useState(0);
    const [mixDoublePartnerID, setMixDoublePartnerID] = useState(0);
    const [myEvents, setMyEvents] = useState([])
    const events = ["Singles-U13", "Singles-open", "Doubles-U13", "Doubles-open", "Doubles-mix"]

    const set = (e, index) => {
        const selectedOption = e.target.value;
        console.log('selected oprion', selectedOption)
        const optionIndex = myEvents.indexOf(selectedOption);
        const newArray = [...myEvents]
        newArray[index] = selectedOption
        setMyEvents(newArray)
        console.log('array', myEvents)
        const type = selectedOption.substring(selectedOption.indexOf('-') + 1)
        console.log("type", type)
        if (selectedOption.indexOf('Doubles') != -1) {
            console.log("checked it is a double")
            handleAlert(type)
        }
    }

    const handleAlert = (type) => {
        Swal.fire({
            title: 'Enter a string',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Save',
            cancelButtonText: 'Cancel',
            inputValidator: (value) => {
                if (!value) {
                    return 'Please enter a string'
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                if (type === 'mix') {
                    setMixDoublePartnerID(result.value)
                }
                else (
                    setDoublePartnerID(result.value)
                )
            }
        })
    }

    const register = (event) => {
        event.preventDefault();
        console.log("The array of events", myEvents)
        console.log("mix id", mixDoublePartnerID)
        console.log('doubleID', doublePartnerID)
    }

    return (
        <>
            <div >
                {
                    events.map((row, index) => (
                        <div>
                            <select onChange={(e) => set(e, index)}>
                                <option value="select">Select</option>
                                {events.map((category) => (
                                    <option value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    ))
                }
            </div>
            < div >
                <input type='submit' value='Submit Entry' onClick={register}></input>
            </div>
        </>
    )
}

export default EntryForm