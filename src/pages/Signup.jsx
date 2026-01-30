import { useEffect, useState } from "react";
import axios from 'axios';

function Signup() {

    const generateId = () => {
        Math.random();
    }
    
    const [post, setPost] = useState({
        id: '12',
        email: '',
        password: '',
        fullName: '',
        phoneNum: '',
    });

    const apiPost = 'https://jsonplaceholder.typicode.com/posts';

    const handleChange = (event) => {
        setPost({ ...post, [event.target.name]: [event.target.value] })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById("password").value !== document.getElementById("confirm-password").value) {
            alert("Passwords do not match.");
        }
        else {
            console.log(post)
            useEffect(() => {
                const insertCustomer = async () => {
                    try {
                        const res = await axios.post(apiPost, { post })
                        console.log(res);
                        alert("Registration successful!");
                        window.location.href = '/';
                    }
                    catch (error) {
                        console.log(error.message);
                    }
                }
                insertCustomer();
            }, []);
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