import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState('');  // Initialize with empty string
    const [email, setEmail] = useState('');  // Initialize with empty string
    const [age, setAge] = useState('');  // Initialize with empty string
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();

        // Ensure age is a number
        const ageAsNumber = parseInt(age);

        // Basic validation to check if the fields are filled
        if (!name || !email || !ageAsNumber) {
            alert("Please fill in all fields.");
            return;
        }

        axios.post("http://localhost:5000/createUser", { name, email, age: ageAsNumber })
            .then(result => {
                console.log(result);
                navigate('/update');
            })
            .catch(err => console.log(err));
    }

   
    return (
        <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h3>Add User</h3>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder='Enter Name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='Enter Email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            placeholder='Enter Age'
                            className='form-control'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
