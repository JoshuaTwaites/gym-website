import React from 'react'
import './Contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Get In Tuch With Us Today To Start Your Fitness Journey
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href='https:gmail.com'><MdEmail /></a> 
            <a href='https://facebook.com'><FaFacebookMessenger /></a>
            <a href='https://whatsapp.com'><ImWhatsapp /></a> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact