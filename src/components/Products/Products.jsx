import React, { useContext, useEffect } from 'react';

import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import fetchProducts from '../../api/fetchProducts';

import './Products.css';
import AppContext from '../../context/AppContext';

function Products() {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (  
    (loading && <Loading />) || (<section className="products container">
      {
        products.map((product) => {
          return <ProductCard key={product.id} data={product}/>;
        })
      }
    </section>)
    
  );
}

export default Products;
