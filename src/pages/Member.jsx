
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Member({ customer }) {
    const [customerData, setCustomerData] = useState(null);
    const navigate = useNavigate();
    const apiLink = 'http://localhost:3000';

    useEffect(() => {
        if (!customer) {
            navigate('/login', { state: { from: 'member' } });
            return;
        }

        const fetchCustomer = async () => {
            try {
                const res = await axios.get(`${apiLink}/api/customers/${customer.customerId}`);
                console.log(res.data.data);
                setCustomerData(res.data.data);
            } catch (error) {
                console.error("Error fetching customer:", error);
            }
        };
        fetchCustomer();
    }, [customer, navigate]);

    if (!customerData) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <h1>My Profile</h1>
            <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
                <p><strong>Customer ID:</strong> {customerData.customerid}</p>
                <p><strong>Full Name:</strong> {customerData.fullname}</p>
                <p><strong>Email:</strong> {customerData.email}</p>
                <p><strong>Phone:</strong> {customerData.phone || 'N/A'}</p>
                <p><strong>Created At:</strong> {new Date(customerData.createdat).toLocaleString()}</p>
            </div>
        </div>
    );
}

export default Member
