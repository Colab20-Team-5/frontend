import React from 'react'
import cardDetails from '../constants';

const AboutCard = () => {
  return (
    <>
    <section className="about">
      <h2 className="about__title">ABOUT US</h2>
      <p className="about__text">Your personalized fitness journey,
          empowering you to achieve your fitness goals with a tailor-made
            workout plan and seamless tracking on the go.
      </p>
    </section>
    <section className='section-card'>
      {
        cardDetails.map(({im, title, description}) => {
            return (
                <>
                    <div className="card">
                    <Image src="/setting.svg"
                    alt="home nav icon"
                    width={25} height={25} />
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                </>
            )
        })
      }          
    </section>
    </>
  )
}

export default AboutCard;



