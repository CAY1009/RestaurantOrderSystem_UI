import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login({ setCustomer }){

    const navigate = useNavigate();
    const location = useLocation();
    const apiLink = 'http://localhost:3000';

    // Store the from state in a state variable to persist through re-renders
    const [redirectTo, setRedirectTo] = useState(() => {
        // Check sessionStorage first, then location state
        const saved = sessionStorage.getItem('redirectAfterLogin');
        if (saved) return saved;
        const from = location.state?.from;
        if (from === 'order') return '/order';
        if (from === 'member') return '/member';
        return null;
    });

    useEffect(() => {
        // Save to sessionStorage when location changes
        const from = location.state?.from;
        let redirect = null;
        if (from === 'order') {
            redirect = '/order';
        } else if (from === 'member') {
            redirect = '/member';
        }
        if (redirect) {
            sessionStorage.setItem('redirectAfterLogin', redirect);
            setRedirectTo(redirect);
        }
    }, [location]);

    const loginEventHandler = async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
            try {
                const res = await axios.post(`${apiLink}/api/auth/login`, { username, password });
                if (res.data && res.data.success) {
                    alert('Login successful!');
                    setCustomer(res.data.data);
                    // Clear the stored redirect
                    sessionStorage.removeItem('redirectAfterLogin');
                    // Redirect to the stored page if user came from Order or Member, otherwise go to home
                    if (redirectTo) {
                        navigate(redirectTo, { replace: true });
                    } else {
                        navigate('/', { replace: true });
                    }
                } else {
                    alert(res.data?.message || 'Login failed, please try again');
                }
            } catch (err) {
                const msg = (err.response?.data?.message || err.messageLogin || 'Login failed');
                console.log(msg);
                alert(msg);
            }
    };

    return(
        <div>
            <form onSubmit={loginEventHandler} className="signup-form">
                <h2 className="login-title">Login</h2>
                <div>
                    <input className="login-placeholder" placeholder="Email" type="text" id="username" name="username" />
                </div>
                <div>
                    <input className="login-placeholder" placeholder="Password" type="password" id="password" name="password" />
                </div>
                <div>
                    <button className="login-button" type="button" onClick={() => window.location.href = '/signup'}>Sign Up</button>
                    <button className="login-button" type="submit">Login</button>
                </div>
                <br></br>
                <a href="/login/employee">For Employee</a>
            </form>
        </div>
    );
}

export default Login
