import { Link } from "react-router";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import axios from "axios";

function MemberAdminCustomer() {

    const apiLink = 'http://localhost:3000';

    const [customers, setCustomers] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);

    useEffect(() => {
        const getCustomers = async () => {
            try {
                const res = await axios.get(`${apiLink}/api/customers`)
                console.log(res.data)
                setCustomers(res.data.data)
                setFilterRecords(res.data.data)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        getCustomers();
    }, [])

    function handleDelete() {
        const deleteConfirm = confirm('Are you sure?')
        {
            deleteConfirm ?
                alert("Deleted")


                : ("")
        }
    };

    function handleFilter(e) {
        let query = e.target.value;
        const newRecords = customers.filter(item => item.fullname.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        setFilterRecords(newRecords)
    }

    const columns = [
        {
            name: 'ID',
            selector: row => row.customerid,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.fullname,
            sortable: true,
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
            name: 'Created By',
            selector: row => row.createdby,
        },
        {
            name: 'Action',
            selector: (row) => (
                <div>
                    <Link to={`/customerEdit/${row.customerid}`} className="action-button">Edit</Link>
                </div>
            )
        }
    ];

    const tableHeaderStyle = {
        headCells: {
            style: {
                backgroundColor: "darkcyan",
                color: "aqua",
                fontSize: "17px",
            }
        }
    };

    return (
        <>
            <div>
                <h1 className='view-cart-title'>Admin</h1>
                <br />
                <Link to="/adminFood" className='admin-nav'>Food Menu</Link>
                <Link to="/adminCustomer" className='admin-nav-customer'>Customers</Link>
                <Link to="/adminEmployee" className='admin-nav'>Employees</Link>
            </div>
            <br />
            <div className="employee-table">
                <div>
                    <span><input className="search-box" type='text' placeholder="Search by Name" onChange={handleFilter}></input></span>
                </div>
                <DataTable
                    columns={columns}
                    data={filterRecords}
                    customStyles={tableHeaderStyle}
                    fixedHeader
                    pagination
                ></DataTable>
            </div>

        </>
    );
}

export default MemberAdminCustomer

