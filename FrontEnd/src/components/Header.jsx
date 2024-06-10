import { useContext } from 'react';

import Button from './UI/Button.jsx';
import logoImg from '../assets/Food.jpg';
import CartContext from '../Store/CartContext.jsx';
import ModalContext from '../Store/ModalContext.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    modalCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Munching</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}