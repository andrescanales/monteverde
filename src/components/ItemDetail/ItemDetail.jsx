import React from 'react';
// import monteVerdeCafe from '../../assets/images/logo_monte_verde.webp';

const ItemDetail = ({id, name, description, stock, price, img}) => {
  return (
    <>
      <h2>Detalle de Producto</h2>
      <img src={img } alt={name} style={{ width: '240px', height: '240px' }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Stock: {stock} units</p>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success">+</button>
        <button type="button" class="btn btn-success disabled">0</button>
        <button type="button" class="btn btn-success">-</button>
      </div>
      <p></p>
      <button type="button" class="btn btn-success">Agregar al carrito</button>
    </>
  );
};

export default ItemDetail;
