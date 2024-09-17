import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <Link to={'/'} className="navbar-brand text-white"><img src="/images/logo_monte_verde.webp" alt="" style={{ width: '150px', height: '150px' }}/></Link>
      </div>
      <div className="col-6 col-md">
        <h5>Contact</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Facebook</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Instagram</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Location</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer