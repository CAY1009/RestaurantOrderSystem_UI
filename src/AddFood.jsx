import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

function AddFood() {
    const apiLink = 'http://localhost:3000';

    const [newFood, setNewFood] = useState({itemname:'', description:'', price:''})

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const editConfirm = confirm('ADD: Are you sure?')
        {
            if (editConfirm) {
                axios.post(`${apiLink}/api/menu-items`,newFood)
                    .then(res => {
                        console.log('Added: ' + newFood)
                        alert("Added Successfully!")
                        navigate('/adminFood')
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
                <div><h2 className="login-title">Add New Food</h2></div>
                <div>
                    <label>Food name: </label>
                    <input className="signup-placeholder" type="text" onChange={e => setNewFood({...newFood, itemname: e.target.value})}/>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea className="signup-placeholder-food-description" rows="1" name="description" onChange={e => setNewFood({...newFood, description: e.target.value})}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input className="signup-placeholder" type="text" name="price" onChange={e => setNewFood({...newFood, price: e.target.value})}/>
                </div>
                <div>
                    <button className="login-button" type="submit">Add</button>
                </div>
            </form>
        </div>

    );
}

export default AddFood