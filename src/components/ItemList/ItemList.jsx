import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 align-items-center">
              <img
                src={product.img}
                style={{ width: '240px', height: '240px' }}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.name}
                </h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/item/${product.id}`} className="btn btn-success">Ver detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
