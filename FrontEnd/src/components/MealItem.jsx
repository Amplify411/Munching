import {useContext} from "react";
import {moneyFormat} from "../util/formattingMoney";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext.jsx";
function MealItem({meal}){
    const cartCtx = useContext(CartContext);
    function handleAddToCart(){
        cartCtx.addItem(meal);
    }

    return (
            <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{moneyFormat.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-button">
                    <Button onClick={handleAddToCart}>Add to cart</Button>
                </p>
            </article>
            </li>
    )
}

export default MealItem;