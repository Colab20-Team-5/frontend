import React from 'react'
import cardDetails from '../constants';
import Image from 'next/image';
import PageButton from './PageButton';
import Link from 'next/link';

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
                        <Image src={im}
                          alt="home nav icon"
                          width={100} height={100} />
                      
                        <div className="card__text-box">
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                        <Link
                          href={'/gympage'}
                          className="btn btn--primary btn--dark"
                        >
                          Learn more
                        </Link>
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



