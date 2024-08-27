import React from 'react'

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center" role="search">
      <i className="bi bi-cart-dash text-white" style={{ fontSize: '1.5rem' }}></i>
      <span className="text-white ms-1">5</span>
    </div>
  )
}

export default CartWidget
