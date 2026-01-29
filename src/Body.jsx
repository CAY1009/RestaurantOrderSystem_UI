import hamburger from './assets/hamburger.png';
import pizza from './assets/pizza.png';
import frenchfries from './assets/frenchfries.png';
import burrito from './assets/burrito.png';

function Food(){

    return (
        <body>
            <div className="photo-row">
                <div id="food1" className="photo-item">
                    <h4>Hamburger</h4>
                    <img src={hamburger} alt="Hamburger Photo"></img>
                        <div>
                            Amount:
                            <input className="order-amount-selection" type="number" min="0"></input>
                            <button href="#">Add to Cart</button>
                        </div>
                </div>
                <div id="food2" className="photo-item">
                    <h4>Pizza</h4>
                    <img src={pizza} alt="Pizza Photo"></img>
                        <div>
                            Amount:
                            <input className="order-amount-selection" type="number" min="0"></input>
                            <button href="#">Add to Cart</button>
                        </div>
                </div>
                <div id="food3" className="photo-item">
                    <h4>French Fries</h4>
                    <img src={frenchfries} alt="French Fries Photo"></img>
                        <div>
                            Amount:
                            <input className="order-amount-selection" type="number" min="0"></input>
                            <button href="#">Add to Cart</button>
                        </div>
                </div>
                <div id="food4" className="photo-item">
                    <h4>Burrito</h4>
                    <img src={burrito} alt="Burrito Photo"></img>
                        <div>
                            Amount:
                            <input className="order-amount-selection" type="number" min="0"></input>
                            <button href="#">Add to Cart</button>
                        </div>
                </div>
            </div>
        </body>
    );
}

export default Food