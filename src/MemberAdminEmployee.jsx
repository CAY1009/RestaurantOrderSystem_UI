import { Link } from "react-router";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import axios from "axios";

function MemberAdminEmployee() {

    const apiGet = 'https://jsonplaceholder.typicode.com/users';

    const [employees, setEmployees] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);

    useEffect(() => {
        const getEmployees = async () => {
            try{
                const res = await axios.get(apiGet)
                setEmployees(res.data)
                setFilterRecords(res.data)
            }
            catch(error){
                console.log(error.message)
            }
        }
        getEmployees();
    }, [])

    function handleDelete() {
        const deleteConfirm = confirm('Are you sure?')
        {deleteConfirm ? alert("Deleted") : ("")}
    };

    function handleFilter(e) {
        let query = e.target.value;
        const newRecords = employees.filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        setFilterRecords(newRecords)
    }

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
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
            name: 'Action',
            selector: () => (
                <div>
                    <button className='action-button'>Edit</button>
                    <button className='action-button-delete' onClick={handleDelete}>Delete</button>
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
                <Link to="/adminCustomer" className='admin-nav'>Customers</Link>
                <Link to="/adminEmployee" className='admin-nav-employee'>Employees</Link>
            </div>
            <br />
            <div className="employee-table">
                <div>
                    <span><input className="search-box" type='text' placeholder="Search by Name" onChange={handleFilter}></input></span>
                    <span><button>Search</button></span>
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

export default MemberAdminEmployee