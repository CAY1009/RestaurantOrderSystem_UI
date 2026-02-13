import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Order() {
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        const customerInfo = async () => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(res.data);
                setCustomer(res.data);
            }
            catch(error){
                console.error("Error fetching customer info:", error);
            }
        };
        customerInfo();
    }, []);

    return(
        <div>
            <h1>Order Page</h1>
            <h2>Customer Information</h2>
            <ul>
                {customer.map((customer) => (
                    <li key={customer.id}>
                        <p>Name: {customer.name}</p>
                        <p>Email: {customer.email}</p>
                        <p>Phone: {customer.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Order;