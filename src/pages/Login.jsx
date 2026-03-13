
function Login(){
    const loginEventHandler = (e) => {
        e.preventDefault();
        // username 123456 to go to Admin page
        if (document.getElementById("username").value === "123456") {
            window.location.href = '/adminFood';            
            alert("Login successful!");
        } else {
            alert("Sorry! You aren't a member. Please sign up!")
            window.location.href = '/signup';
        }
        // will check credentials from Database here
        /* 
            if match {
            Match found, redirect to Home page
            window.location.href = '/home';
            }
            else {
            show ("Invalid username or password.");
            }
        */
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
        <p>Use username: 123456 / password 123 to access Food manage page. Will delete this later</p>
        </div>
    );
}

export default Login
