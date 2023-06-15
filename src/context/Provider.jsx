import React, { useState } from 'react';
import propTypes from 'prop-types';

import AppContext from './AppContext';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItens, setCartItens] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItens,
    setCartItens,
    isCartVisible,
    setIsCartVisible
  };

  return (  
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
