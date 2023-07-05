import React from 'react'
import cardDetails from '../constants';

const AboutCard = () => {
  return (
    <>
    <section className="section">
      <h2>ABOUT US</h2>
      <p>Your personalized fitness journey,
          empowering you to achieve your fitness goals with a tailor-made
            workout plan and seamless tracking on the go.
      </p>
    </section>
    <section className='section-about'>
      {
        cardDetails.map(({im, title, description}) => {
            return (
                <>
                    <h2>{title}</h2>
                      <p>{description}</p>
                </>
            )
        })
      }          
    </section>
    </>
  )
}

export default AboutCard;



