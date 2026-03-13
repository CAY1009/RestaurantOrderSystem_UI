import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';

function EditCustomer() {

    const apiLink = 'http://localhost:3000';

    const { id } = useParams();

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const getCustomer = async () => {
            try {
                const res = await axios.get(`${apiLink}/api/customers/${id}`)
                console.log(res.data)
                setCustomers(res.data.data)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        getCustomer();
    }, [id])

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const editConfirm = confirm('Are you sure?')
        {
            if (editConfirm) {
                axios.put(`${apiLink}/api/customers/${id}`, customers)
                    .then(res => {
                        alert("Updated Successfully!")
                        navigate('/adminCustomer')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            }
        }
    };

    function handleDelete(id) {
        event.preventDefault();
        const deleteConfirm = confirm('DELETE: Are you sure?')
        {
            if (deleteConfirm) {
                axios.delete(`${apiLink}/api/customers/${id}`, customers)
                    .then(res => {
                        alert("Deleted!")
                        navigate('/adminCustomer')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div><h2 className="login-title">Edit Customer Info</h2></div>
                <div>
                    <label>Customer ID:</label>
                    <input className="signup-placeholder" disabled value={customers.customerid}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input className="signup-placeholder" type="text" name="email" value={customers.email} onChange={e => setCustomers({ ...customers, email: e.target.value })} />
                </div>
                <div>
                    <label>Full name: </label>
                    <input className="signup-placeholder" type="text" name="fullname" value={customers.fullname} onChange={e => setCustomers({ ...customers, fullname: e.target.value })} />
                </div>
                <div>
                    <label>Phone number: </label>
                    <input className="signup-placeholder" type="text" name="phone" value={customers.phone} onChange={e => setCustomers({ ...customers, phone: e.target.value })} />
                </div>
                <div>
                    <button className='action-button-delete' onClick={e => { handleDelete(customers.customerid) }}>Delete</button>
                    <button className="login-button" type="submit">Save</button>
                </div>
                <br />
            </form>
        </div>
    );
}

export default EditCustomer