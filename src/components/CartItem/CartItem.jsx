import React, { useContext } from 'react';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

import { BsFillCartDashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

import './CartItem.css';

function CartItem({ data }) {

  const { cartItens, setCartItens } = useContext(AppContext);
  const { id, thumbnail, title, price} = data;

  const handleRemoveItem = () => {
    const updatedItens = cartItens.filter((item) => item.id !== id);
    setCartItens(updatedItens);
  };
  
  return (  
    <section className="cart-item">
      <img 
        src={ thumbnail } 
        alt="produto" 
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{ title }</h3>
        <h3 className="cart-item-price">{ formatCurrency(price, 'BRL') }</h3>
        <button 
          type="button" 
          className="button-remove-item"
          onClick={ handleRemoveItem }
        >
          <BsFillCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
