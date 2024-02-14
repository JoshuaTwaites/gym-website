import React, { useState } from 'react'
import Logo from '../images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import './Navbar.css'

const Navbar = () => {

    const [toggleNav, setToggleNav] = useState(false);


  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className='logo' onClick={() => setToggleNav(false)} >
                <img src={Logo} alt="Logo" />
            </Link>
            <ul className={`nav__links ${toggleNav ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setToggleNav(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    } )
                }
            </ul>
            <buton className="nav__toggle-btn" onClick={() => setToggleNav(prev => !prev)}>
                {
                    toggleNav ? <IoIosClose /> : <FaBars />
                }
            </buton>
        </div>
    </nav>
  )
}

export default Navbar