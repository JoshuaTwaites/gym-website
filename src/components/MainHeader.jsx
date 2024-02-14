import React from 'react'
import '../pages/home/Home.css'
import { Link } from 'react-router-dom'
import Header from '../images/hero_image.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">

        <div className="main__header-left">
          <h4>Your Journey Begins Today</h4>
          <h1>Join Right Now</h1>
          <p>Unleash your full potential and sculpt the best version of yourself with our dynamic workouts and personalized training programs.</p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>

        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Header} alt="Workout photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader