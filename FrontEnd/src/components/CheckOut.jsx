import { useContext } from 'react';

import Modal from './UI/Modal.jsx';
import CartContext from '../Store/CartContext.jsx';
import { moneyFormat } from '../util/formattingMoney.js';
import Input from './UI/Input.jsx';
import Button from './UI/Button.jsx';
import ModalContext from '../Store/ModalContext.jsx';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    modalCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }

    
  }

  return (
    <Modal open={modalCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {moneyFormat.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}