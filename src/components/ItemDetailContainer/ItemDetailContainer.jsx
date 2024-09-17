import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../../products_mock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const {productId} = useParams()

  useEffect(() => {
    getOneProduct(productId)
      .then(result => setProduct(result))
      .catch(error => console.log(error))
  }, [productId])

  return (
    <div>
      <ItemDetail {...product}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer
