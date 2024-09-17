import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../products_mock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3>{props.greeting}</h3>
      <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer
