import React from 'react'
import './Plans.css'
import Header from '../../components/Header'
import Card from '../../UI/Card'
import {plans} from '../../data'
import HeaderImage from '../../images/header_bg_4.jpg'

const Plans = () => {
  return (
    <>
      <Header title='Our Available Plans' image={HeaderImage}>
        See All Our Available Membership Plans And Choose The One Best Suited For You And All Your Needs
      </Header>
      <section className='plans'>
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`£${price}`}</h1><h2>/mo</h2>
                <h4>FEatures</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? 'disabled' : '' }>
                      {feature}
                    </p>
                  })
                }  
                <button className='btn lg'>Select Plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans