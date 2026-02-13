import { Link } from "react-router";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import axios from "axios";

function MemberAdminEmployee(){

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const getEmployees = async () => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(res.data)
                setEmployees(res.data)
            }
            catch(error){
                console.log(error.message)
            }
        }
        getEmployees();
    },[]);

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone number',
            selector: row => row.phone,
        },
        {
            name: 'Action',
            selector: row => row.name,
        }
    ]

    return (
        <>
        <div>
            <h1 className='view-cart-title'>Admin</h1>
            <h2 className='admin-sub-title'>Employees</h2>
            <Link to="/adminFood" className='admin-button'>Food Menu</Link>
            <Link to="/adminCustomer" className='admin-button'>Customers</Link>
            <Link to="/adminEmployee" className='admin-button'>Employees</Link>
        </div>
        <br/>
        <DataTable columns={columns} data={employees} className="employee-table"></DataTable>
        </>
    );
}

export default MemberAdminEmployee