import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'><img src={Logo} alt="Logo" /></Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias maiores sit id neque vitae quos sequi nihil. In, similique quas!</p>
                <div className="footer__socials">
                    <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                    <a href='https://instagram.com/' target='_blank' rel='noreferrer noopener'><FaInstagram /></a>
                    <a href='https://facebook.com/' target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
                    <a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'><FaTwitter /></a>
                </div>
            </article>
            <article>
                <h4>PermaLinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/palns'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>PermaLinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/palns'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>PermaLinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/palns'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
        </div>
        <div className="footer_copyright">
            <small>2023 GymWebsite &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer