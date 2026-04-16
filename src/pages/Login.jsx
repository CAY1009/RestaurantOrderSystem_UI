import axios from "axios";

function Login(){

    const apiLink = 'http://localhost:3000';

    const loginEventHandler = async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username == 'admin' && password == 'admin123!!!'){
            window.location.href = '/adminFood';
        }
        else {
            try {
                const res = await axios.post(`${apiLink}/api/auth/login`, { username, password });
                if (res.data && res.data.success) {
                    alert('Login successful!');
                    window.location.href = '/';
                } else {
                    alert(res.data?.message || 'Login failed, please try again');
                }
            } catch (err) {
                const msg = (err.response?.data?.message || err.messageLogin || 'Login failed');
                console.log(msg);
                alert(msg);
            }
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
            </form>
        <p>admin username: admin / password: admin123!!!</p>
        </div>
    );
}

export default Login
