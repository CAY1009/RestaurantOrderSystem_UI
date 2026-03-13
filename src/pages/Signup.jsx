import { useEffect, useState } from "react";
import axios from 'axios';

function Signup() {

    const apiLink = "http://localhost:5432";

    const generateId = () => {
        Math.random();
    }

    const [shouldRunEffect, setShouldRunEffect] = useState(false);

    const [post, setPost] = useState({
        fullName: '',
        email: '',
        phoneNum: '',
    });

    const handleChange = (event) => {
        setPost({ ...post, [event.target.name]: [event.target.value] })
    }

    useEffect(() => {
        if (shouldRunEffect) {
            const insertCustomer = async () => {
                try {
                    const res = await axios.post(`${apiLink}/api/users`, post)
                    console.log(res.data);
                    alert("Registration successful!");
                    window.location.href = '/';
                }
                catch (err) {
                    console.log(err.message);
                }
            }
            insertCustomer();
            setShouldRunEffect(false);
        }
    }, [shouldRunEffect]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById("password").value !== document.getElementById("confirm-password").value) {
            alert("Passwords do not match.");
        }
        else {
            console.log(post);
            setShouldRunEffect(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div><h2 className="login-title">Sign Up</h2></div>
                <div>
                    <input className="signup-placeholder" placeholder="Email" type="text" id="email" name="email" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Password" type="password" id="password" name="password" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Confirm Password" type="password" id="confirm-password" name="confirm-password" />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Full Name" type="text" id="fullName" name="fullName" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Phone Number" type="text" id="phoneNum" name="phoneNum" onChange={(e) => handleChange(e)} />
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