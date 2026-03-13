import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function EditEmployee() {

    const apiLink = 'http://localhost:3000';

    const { id } = useParams();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployees = async () => {
            try {
                const res = await axios.get(`${apiLink}/api/users/${id}`)
                console.log(res.data)
                setEmployees(res.data.data)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        getEmployees();
    }, [id])

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const editConfirm = confirm('UPDATE: Are you sure?')
        if (editConfirm) {
            axios.put(`${apiLink}/api/users/${id}`, employees)
                .then(res => {
                    alert("Updated Successfully!")
                    navigate('/adminEmployee')
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    };

    function handleDelete(id) {
        event.preventDefault();
        const deleteConfirm = confirm('DELETE: Are you sure?')
        {
            if (deleteConfirm) {
                axios.delete(`${apiLink}/api/users/${id}`, employees)
                    .then(res => {
                        alert("Deleted!")
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
                <div><h2 className="login-title">Edit Employee</h2></div>
                <div>
                    <label>Employee ID:</label>
                    <input className="signup-placeholder" disabled value={employees.userid}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input className="signup-placeholder" type="text" name="email" value={employees.email} onChange={e => setEmployees({ ...employees, email: e.target.value })} />
                </div>
                <div>
                    <label>Full name: </label>
                    <input className="signup-placeholder" type="text" name="fullName" value={employees.fullname} onChange={e => setEmployees({ ...employees, fullname: e.target.value })} />
                </div>
                <div>
                    <label>Phone number: </label>
                    <input className="signup-placeholder" type="text" name="phone" value={employees.phone} onChange={e => setEmployees({ ...employees, phone: e.target.value })} />
                </div>
                <div>
                    <label>Role: </label>
                    <select className="signup-placeholder" name="phone" id="userrole" value={employees.userrole} onChange={e => setEmployees({ ...employees, userrole: e.target.value })}>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Leader">Leader</option>
                        <option value="Staff">Staff</option>
                    </select>
                </div>
                <div>
                    <button className='action-button-delete' onClick={e => { handleDelete(employees.userid) }}>Delete</button>
                    <button className="login-button" type="submit">Save</button>
                </div>
                <br />
            </form>
        </div>
    );
}

export default EditEmployee