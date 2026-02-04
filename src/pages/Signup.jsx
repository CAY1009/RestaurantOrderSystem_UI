function Signup() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById("password").value !== document.getElementById("confirm-password").value) {
            alert("Passwords do not match.");
        }
        else {
            alert("Registration successful!");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div><h2 className="login-title">Sign Up</h2></div>
                <div>
                    <input className="signup-placeholder" placeholder="Email" type="text" id="email" name="email" />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Password" type="password" id="password" name="password" />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Confirm Password" type="password" id="confirm-password" name="confirm-password" />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Full Name" type="text" id="full-name" name="full-name" />
                </div>
                <div>
                    <input className="signup-placeholder" placeholder="Phone Number" type="text" id="phone-number" name="phone-number" />
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