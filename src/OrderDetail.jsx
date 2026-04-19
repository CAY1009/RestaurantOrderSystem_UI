import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function OrderDetail() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const apiLink = 'http://localhost:3000';

    useEffect(() => {
        const fetchOrderDetail = async () => {
            try{
                const res = await axios.get(`${apiLink}/api/orders/${id}`)
                console.log(res.data.data);
                setOrder(res.data.data);
            }
            catch(error){
                console.error("Error fetching order detail:", error);
            }
        };
        fetchOrderDetail();
    }, [id]);

    if (!order) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <h1>Order Detail</h1>
            <h2>Order #{order.orderid}</h2>
            
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> {order.customername}</p>
            <p><strong>Email:</strong> {order.customeremail}</p>
            <p><strong>Phone:</strong> {order.customerphone || 'N/A'}</p>
            
            <h3>Order Information</h3>
            <p><strong>Total Charge:</strong> ${order.totalcharge}</p>
            <p><strong>Created By:</strong> {order.createdby}</p>
            <p><strong>Created At:</strong> {new Date(order.createdat).toLocaleString()}</p>
            
            <h3>Order Items</h3>
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items && order.items.map((item) => (
                        <tr key={item.orderitemid}>
                            <td>{item.itemid}</td>
                            <td>{item.itemname}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div style={{ marginTop: '20px' }}>
                <Link to="/order" className="action-button">Back to Orders</Link>
            </div>
        </div>
    );
}

export default OrderDetail;