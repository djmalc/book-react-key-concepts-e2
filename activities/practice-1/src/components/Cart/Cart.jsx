import { use } from 'react';
import { createPortal } from 'react-dom';

import CartContext from '../../store/cart-context.jsx';
import classes from './Cart.module.css';

function Cart({ onClose }) {
  const cartCtx = use(CartContext);

  const total = cartCtx.items.reduce(
    (prevVal, item) => prevVal + item.price,
    0
  );

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={onClose}>Close</button>
          <button onClick={onClose}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById('modal')
  );
}

export default Cart;
