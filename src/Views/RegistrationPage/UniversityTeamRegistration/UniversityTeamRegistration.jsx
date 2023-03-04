import React from "react";
import { useState } from "react";

const UniversityTeamRegistration = () => {
    const [universityName, setUniversityName] = useState('')
    const [data, setData] = useState([])
    const [gender, setGender] = useState('')
    const [name, setName] = useState('');
    const [nic, setNic] = useState('')
    const [dob, setDob] = useState('');
    const playerNumber = 8
    const handleAdd = () => {
        setData([...data, { name, nic, dob }]);
        setName('');
        setDob('');
        setNic('');
    };

    const handleDelete = (index) => {
        setData(data.filter((_, i) => i !== index));
    };

    const register = (event) => {
        event.preventDefault();
        console.log("Register function called")
    }
    return (
        <div>
            <div >
                <input
                    value={universityName}
                    onChange={(e) => setUniversityName(e.target.value)}
                    type="text"
                    placeholder='universityName' />
            </div>
            <div >
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option selected disabled value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="FeMale" >Female</option>
                </select>
            </div>
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        NIC number:
                        <input type="text" value={nic} onChange={(e) => setNic(e.target.value)} />
                    </label>
                    <label>
                        Date of Birth:
                        <input
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            type={'date'}
                        />
                    </label>
                    <button type="button" onClick={handleAdd}>Add</button>
                </form>
            </div>

            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>NIC</th>
                            <th>Date of Birth</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.nic}</td>
                                <td>{row.dob}</td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            < div >
                {playerNumber === data.length && <input type='submit' value='register' onClick={register}></input>}
            </div>
        </div>
    )
}

export default UniversityTeamRegistration