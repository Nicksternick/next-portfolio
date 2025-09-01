import { useState } from 'react'
import { Link } from 'react-router-dom'
import './../css/navbar.css'

export default function Navbar() {
    const[IsActive, SetIsActive] = useState(false)

    return (
        <nav className={`navbar`}>
            <div className="navbar-brand">
                <Link to="/" className='navbar-item'>
                    <img src="https://placehold.co/40" alt="" />
                </Link>
                <a 
                onClick={() => {
                    SetIsActive(!IsActive)
                }}
                className="navbar-burger burger">
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div className={`navbar-menu  ${IsActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <Link to="/" className="navbar-item nav-link">
                        <a className='link'>Home</a>
                    </Link>
                    <Link to="/projects" className="navbar-item nav-link">
                        <a className='link'>Projects</a>
                    </Link>
                    <Link to="/contact" className="navbar-item nav-link">
                        <a className='link'>Contact</a>
                    </Link>
                    <Link to="" className="navbar-item nav-link">
                        <a className='link'>Art Gallery</a>
                    </Link>
                    <Link to="" className="navbar-item nav-link">
                        <a className='link'>Comics</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}