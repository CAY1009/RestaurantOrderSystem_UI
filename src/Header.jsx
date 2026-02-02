import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
   
    return (
        <header>
            <div className="header">
                <h1>Welcome to Restaurant</h1>
                <a href="/">Home</a>
                <a href="#">Order</a>
                <a href="/member">Member</a>
                <a href="#">Cart: </a>
            </div>
        </header>
    );
}

export default Header
