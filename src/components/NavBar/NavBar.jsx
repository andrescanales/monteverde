import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand text-white"><span className='fs-4'>Monte Verde Coffee</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active text-white">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Coffee</a>
            </li>
          </ul>
          <CartWidget></CartWidget>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
