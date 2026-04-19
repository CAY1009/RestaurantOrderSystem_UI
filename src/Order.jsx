import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Order({ customer }) {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const apiLink = 'http://localhost:3000';

    useEffect(() => {
        if (!customer) {
            navigate('/login', { state: { from: 'order' } });
            return;
        }

        const fetchOrders = async () => {
            try{
                const res = await axios.get(`${apiLink}/api/orders/customer/${customer.customerId}`)
                console.log(res.data.data);
                setOrders(res.data.data);
            }
            catch(error){
                console.error("Error fetching orders:", error);
            }
        };
        fetchOrders();
    }, [customer, navigate]);

    return(
        <div>
            <h1>Order Page</h1>
            <h2>All Orders</h2>
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Total Charge</th>
                        <th>Created By</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderid}>
                            <td>{order.orderid}</td>
                            <td>{order.customername}</td>
                            <td>{order.customeremail}</td>
                            <td>${order.totalcharge}</td>
                            <td>{order.createdby}</td>
                            <td>{new Date(order.createdat).toLocaleString()}</td>
                            <td>
                                <Link to={`/order/${order.orderid}`} className="action-button">Detail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Order;