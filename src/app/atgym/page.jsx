import React from 'react'
import HeaderImg from '../components/HeaderImg';

const page = () => {
  return (
    <div>
        <HeaderImg headerImg={"/atgym.png"} />
        <div className="at-gym-header">
            <h2>At gym</h2>
            <p>You’ve made it to the gym!
            Choose your week of workout to begin.</p>
        </div>

        <div className="accordion">
            <div className="accordion__item">
                <p>Select week</p>
                <div className="accordion__item-body">
                    <div className="accordion-item-body-content">
                        <p>Week 1</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page;