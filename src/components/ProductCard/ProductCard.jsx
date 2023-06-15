import React, { useContext } from 'react';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

import './ProductCard.css';

function ProductCard({ data }) {

  const {title, thumbnail, price} = data;
  const { cartItens, setCartItens } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItens([...cartItens, data]);
  };

  return (  
    <section className="product-card">
      <img 
        src={ thumbnail.replace(/\w\.jpg/gi, 'W.jpg') } 
        alt="product" 
        className="card-image"
      />
      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button 
        type="button" 
        className="button-add-card"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
