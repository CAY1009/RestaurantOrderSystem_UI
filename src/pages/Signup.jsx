import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

function Signup() {

    const apiLink = 'http://localhost:3000';

    const [newCustomer, setNewCustomer] = useState({ email: '', fullName: '', phone: '', createdBy: 'Register' });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (document.getElementById("password").value !== document.getElementById("confirm-password").value) {
            alert("Passwords do not match.");
        }
        else {
            axios.post(`${apiLink}/api/customers`, newCustomer)
                .then(async (res) => {
                    // try to create auth entry using returned customer id
                    const created = res?.data?.data || res?.data || {};
                    const customerId = created.customerid || created.customerId || created.id;
                    const password = document.getElementById("password").value;

                    if (customerId) {
                        try {
                            await axios.post(`${apiLink}/api/auth`, { customerId, password });
                        } catch (err) {
                            console.error('Auth creation failed', err?.message || err);
                            // continue even if auth creation failed
                        }
                    }

                    alert("Signed up successfully!")
                    navigate('/login')
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div><h2 className="login-title">Sign Up</h2></div>
                <div>
                    <input className="signup-placeholder" placeholder="Email" type="text" id="email" name="email" onChange={e => setNewCustomer({...newCustomer, email: e.target.value})} />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Password" type="password" id="password" name="password"  />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Confirm Password" type="password" id="confirm-password" name="confirm-password" />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Full Name" type="text" id="fullname" name="fullname" onChange={e => setNewCustomer({...newCustomer, fullname: e.target.value})} />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Phone Number" type="text" id="phone" name="phone" onChange={e => setNewCustomer({...newCustomer, phone: e.target.value})} />
                </div>
                <div>
                    <button className="login-button" type="submit">Register</button>
                </div>
                <br />
            </form>
        </div>
    );
}

export default Signup