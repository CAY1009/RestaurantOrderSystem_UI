import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

function AddEmployee() {
    const apiLink = 'http://localhost:3000';

    const [newEmployee, setNewEmployee] = useState({email:'', fullName:'', phone:'', userrole:''})

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const editConfirm = confirm('ADD: Are you sure?')
        {
            if (editConfirm) {
                axios.post(`${apiLink}/api/users`,newEmployee)
                    .then(res => {
                        console.log('Added: ' + newEmployee)
                        alert("Added Successfully!")
                        navigate('/adminEmployee')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div><h2 className="login-title">Add New Employee</h2></div>
                <div>
                    <label>Email: </label>
                    <input className="signup-placeholder" type="text" onChange={e => setNewEmployee({...newEmployee, email: e.target.value})}/>
                </div>
                <div>
                    <label>Full name: </label>
                    <input className="signup-placeholder" type="text" onChange={e => setNewEmployee({...newEmployee, fullName: e.target.value})}/>
                </div>
                <div>
                    <label>Phone number: </label>
                    <input className="signup-placeholder" type="text" name="phone" onChange={e => setNewEmployee({...newEmployee, phone: e.target.value})}/>
                </div>
                <div>
                    <label>Role: </label>
                    <select className="signup-placeholder" name="phone" id="userrole" onChange={e => setNewEmployee({...newEmployee, userrole: e.target.value})}>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Leader">Leader</option>
                        <option value="Staff">Staff</option>
                    </select>
                </div>
                <div>
                    <button className="login-button" type="submit">Add</button>
                </div>
            </form>
        </div>

    );
}

export default AddEmployee