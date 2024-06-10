import Modal from "./UI/Modal";
import CartContext from "../Store/CartContext";
import { useContext,useState,useEffect } from "react";
import {moneyFormat} from "../util/formattingMoney";
import Button from "./UI/Button";
import ModalContext from "../Store/ModalContext";
import CartItem from './CartItem.jsx';
function Cart(){
    const cartCtx=useContext(CartContext);
    const modalCtx = useContext(ModalContext);

    const cartTotal=cartCtx.items.reduce( (totalPrice,item)=>{
        return totalPrice+item.price*item.quantity;
    },0)

    function handleCloseCart() {
        modalCtx.hideCart();
      }

    function handleGoToCheckout() {
        modalCtx.showCheckout();
      }
    
    return(
        <Modal 
          className="cart" 
          open={modalCtx.progress === 'cart'}
          onClose={modalCtx.progress === 'cart' ? handleCloseCart : null}
          >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{moneyFormat.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button> }
      </p>
    </Modal>
    )
}

export default Cart;