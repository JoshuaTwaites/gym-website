import React from 'react'
import './About.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/abouttop.png'
import VisionImage from '../../images/aboutend.png'
import MissionImage from '../../images/aboutmiddle.jpg'

const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
         Want to learn more about us as a gym...
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Welcome to Our Story, where fitness becomes a journey, and every step is a triumph. Our story is one of passion, dedication, and community, born out of the belief that a healthy lifestyle transforms not just bodies but lives.</p>
            <p>Our story is shaped by a team of expert trainers and fitness enthusiasts who are committed to guiding you through your fitness odyssey. We understand that everyone's journey is unique, and we tailor our programs to meet diverse needs and goals.</p>
            <p>As a member, you're not just a part of a fitness center; you're embraced by a vibrant community that celebrates victories, big and small. Join us in rewriting your fitness narrative, where every rep, every drop of sweat, and every smile exchanged becomes a cherished chapter. </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>In envisioning the future here, our vision transcends the ordinary, reaching for new heights in the realm of fitness and well-being. We strive to be a beacon of inspiration, where individuals discover the power within themselves to achieve their health and fitness goals.</p>
            <p>As we look ahead, our vision extends beyond the walls of [Gym Name]. We aspire to be a catalyst for positive change in the wider community, promoting health and fitness as essential components of a fulfilling life. Through partnerships, outreach programs, and a culture of giving back, we aim to create a ripple effect, inspiring individuals to embrace an active and balanced lifestyle. </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Story" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Our mission is to empower individuals to embrace a healthier and more active lifestyle. We are dedicated to providing a supportive and motivating environment where fitness enthusiasts of all levels can thrive. </p>
            <p>Central to our mission is the commitment to personalized excellence. We strive to deliver cutting-edge fitness programs and state-of-the-art facilities that cater to the unique needs and goals of each member. Through expert guidance from our passionate trainers, we aim to equip individuals with the knowledge and tools necessary to achieve sustainable and meaningful results. </p>
            <p>Beyond individual transformations, our mission extends to creating a positive impact on the community at large. We believe in fostering a culture of inclusivity, where diversity is celebrated, and everyone feels welcome.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About