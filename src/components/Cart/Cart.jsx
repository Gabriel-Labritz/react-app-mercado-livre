import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

import './Cart.css';

function Cart() {

  const { cartItens, isCartVisible } = useContext(AppContext);

  const totalCart = cartItens.reduce((acc, item) => item.price + acc, 0);

  return (  
    <section className={`cart ${isCartVisible ? 'cart-active' : ''}`}>
      <div className="cart-itens">
        {
          cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)
        }
      </div>
      <div className="cart-resume">{formatCurrency(totalCart, 'BRL')}</div>
    </section>
  );
}

export default Cart;
