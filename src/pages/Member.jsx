
function Member(){

    return(
        <div>
            <br />
            <h2 className="login">Login</h2>
            <div>
                <label className="login" htmlFor="username">Email: </label>
                <input className="login" type="text" id="username" name="username" />
            </div>
            <div>
                <label className="login" htmlFor="password">Password: </label>
                <input className="login" type="password" id="password" name="password" />
            </div>
            <div>
                <button className="login-button" type="button" onClick={() => window.location.href = '/signup'}>Sign Up</button>
                <button className="login-button" type="submit">Login</button>
            </div>
            <br />
        </div>
    );
}

export default Member
