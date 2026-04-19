
function Header({ customer, onLogout }){

    return (
        <header>
            <div className="header">
                <h1>Welcome to Restaurant</h1>
                <a href="/">Home</a>
                <a href="/order">Order</a>
                {customer ? (
                    <>
                        <a href="/member">My Profile ({customer.fullName})</a>
                        <a href="/" onClick={(e) => { e.preventDefault(); onLogout(); }}>Sign Out</a>
                    </>
                ) : (
                    <a href="/login">Member</a>
                )}
                <a href="/contact">Contact</a>
            </div>
            <br />
        </header>
    );
}

export default Header
