function Signup() {
    const PasswordMatch = () => {
        if (document.getElementById("password").value !== document.getElementById("confirm-password").value) {
            alert("Passwords do not match.");
        }}

    return (
        <div>
            <br />
            <h2 className="login">Sign Up</h2>
            <div>
                <label className="signup" htmlFor="email">Email: </label>
                <input className="signup" type="text" id="email" name="email" />
            </div>
            <div>
                <label className="signup" htmlFor="password">Password: </label>
                <input className="signup" type="password" id="password" name="password" />
            </div>
            <div>
                <label className="signup" htmlFor="confirm-password">Confirm Password: </label>
                <input className="signup" type="password" id="confirm-password" name="confirm-password" />
                
            </div>
            <div>
                <label className="signup" htmlFor="full-name">Full Name: </label>
                <input className="signup" type="text" id="full-name" name="full-name" />
            </div>
            <div>
                <label className="signup" htmlFor="phone-number">Phone Number: </label>
                <input className="signup" type="text" id="phone-number" name="phone-number" />
            </div>
            <div>
                <button className="login-button" type="submit">Register</button>
            </div>
            <br />
            
        </div>
    );
}

export default Signup