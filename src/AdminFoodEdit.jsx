import { useState } from "react";
import { useNavigate, useParams } from "react-router"
import { useEffect } from "react";
import axios from "axios";

function AdminFoodEdit() {
    const apiLink = 'http://localhost:3000';

    const { id } = useParams();

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const getFoods = async () => {
            try {
                const res = await axios.get(`${apiLink}/api/menu-items/${id}`);
                console.log(res.data.data)
                setFoods(res.data.data)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        getFoods();
    }, [id])

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventdefault();
        const confirmEdit = confirm("UPDATE FOOD: Are you sure?")
        if (confirmEdit) {
            axios.put(`${apiLink}/api/menu-items/${id}`, foods)
                .then(res => {
                    alert("Updated Food Successfully!")
                    navigate('/adminFood')
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div><h2 className="login-title">Edit Customer Info</h2></div>
                <div>
                    <label>Customer ID:</label>
                    <input className="signup-placeholder" disabled value={foods.itemid}></input>
                </div>
                <div>
                    <label>Name: </label>
                    <input className="signup-placeholder" type="text" name="itemname" value={foods.itemname} onChange={e => setFoods({ ...foods, itemname: e.target.value })} />
                </div>
                <div>
                    <label>Description: </label>
                    <textarea className="signup-placeholder-food-description" rows="4" name="description" value={foods.description} onChange={e => setFoods({ ...foods, description: e.target.value })} />
                </div>
                <div>
                    <label>Price: </label>
                    <input className="signup-placeholder" type="text" name="price" value={foods.price} onChange={e => setFoods({ ...foods, price: e.target.value })} />
                </div>
                <div>
                    <button className="login-button" type="submit">Save</button>
                </div>
                <br />
            </form>
        </div>
    )
}

export default AdminFoodEdit