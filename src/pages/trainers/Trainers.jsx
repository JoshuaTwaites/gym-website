import React from 'react'
import './Trainers.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Trainer from '../../components/Trainer'

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage}>
        See The Wide Range Of Trainers We Have Available And Pick One That Best Suits Your Needs
      </Header>
      <section className='trainers'>
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <CiInstagram />, link: socials[0]},
                  {icon: <FaTwitter />, link: socials[1]},
                  {icon: <FaFacebook />, link: socials[2]},
                  {icon: <CiLinkedin />, link: socials[3]},
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers