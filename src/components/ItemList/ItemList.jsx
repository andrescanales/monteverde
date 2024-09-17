import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 align-items-center">
              <img
                src="https://speedwellcoffee.com/cdn/shop/products/COLD-BREW_240x.png"
                style={{ width: '240px', height: '240px' }}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.name}
                </h5>
                <p className="card-text">{product.description}</p>
                <button type="button" className="btn btn-success">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
