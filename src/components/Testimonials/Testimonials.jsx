import React from 'react'

import nurse1 from '../../assets/photos/nurse1.jpg'
import nurse2 from '../../assets/photos/nurse2.jpg'
import doctor from '../../assets/photos/doctor.jpg'
import './Testimonials.scss'
export const Testimonials = () => {
  return (
    <div className='testimonial-container'>
        <h1>Don't just take our word for it.</h1>
        <h4>Here are some testimonials from some of our users</h4>
        <hr />
        <div className='card-container'>
            <div className='card'>
                <div className='card-content'>
                    <p>I use the support groups the most. I can't tell you how much support i've gotten and how much i've learned from other nurses on Xenon.</p>
                    <img className='dp'src={nurse1} alt="" />
                    <h3>Steven Smith</h3>
                    <h4>Nurse</h4>
                </div>
            </div>

            <div className='card middle-card'>
                <div className='card-content'>
                    <p>Xenon makes it way easier to meet with my therapist.</p>
                    <img className='dp' src={doctor} alt="" />
                    <h3>Dr. Daniels</h3>
                    <h4>Doctor</h4>     
                </div>
            </div>

            <div className='card'>
                <div className='card-content'>
                    <p>I use everything! But I love the daily challanges Xenon gives me. They're quick and easy to do! I alway make sure to get them done before I leave for work</p>
                    <img className='dp' src={nurse2} alt="" />
                    <h3>Raya Lee</h3>
                    <h4>Nurse</h4>
                </div>
            </div>
        </div>

        
    </div>
  )
}
