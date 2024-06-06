import React,{useContext} from "react";
import "../cssFiles/style.css";
import logo from "../assets/Food.jpg"
import Button from "./UI/Button";
import CartContext from "../Store/CartContext.jsx";

function Header(){
    const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
    return(
        <div className="Header">
            <header id="main-header">
                <div id="title">
                    <img src={logo} alt="Good Food" />
                    <h1>Munching</h1>
                </div>
                <div>
                    <nav>
                        <Button textOnly="true">Cart ({totalCartItems})</Button>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;