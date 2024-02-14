import React from 'react'
import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from "react-icons/gi";
import { values } from '../data';
import Card from '../UI/Card';

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond />} title='Values' />
                <p>
                    At this gym we are dedicated to personal growth and providing a supportive community atmosphere to foster a positive environment to empower all our members.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className='values__value'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values