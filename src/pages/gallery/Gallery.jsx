import React from 'react'
import './Gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'


const Gallery = () => {

  const galleryLength = 15;
  const images = [];

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        See What You Can Find Access To Within Our Gym. As Well As Live Photos Taken From Some Of The Many Classes That We Offer.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt="Gallery" />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery