import React from 'react'
import Carousel from 'react-elastic-carousel'

import loginScreen from '../../assets/photos/phone-mockups/login-proto.png'
import homeScreen from '../../assets/photos/phone-mockups/home-proto.png'
import therapistScreen from '../../assets/photos/phone-mockups/therapist-proto.png'

import './Prototype.scss'

export const Prototype = () => {
    
  return (
    <div className='prototype-container'>
      <div className='prototype-background-wrapper'>
        <h1>A Sneakpeak into the Xenon App</h1>
          <div className='carousel'>
              <Carousel>
                  <img src={loginScreen} alt="" />
                  <img src={homeScreen} alt="" />
                  <img src={therapistScreen} alt="" />
              </Carousel>
        </div>
      </div>
        

    </div>
  )
}
