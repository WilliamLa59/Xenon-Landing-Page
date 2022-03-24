import React from 'react'

import homeScreen from '../../assets/photos/phone-mockups/home-4k.png'

import contactIcon from '../../assets/icons/contact.png'
import supportIcon from '../../assets/icons/support.png'
import challengeIcon from '../../assets/icons/challenges.png'
import trackerIcon from '../../assets/icons/tracker.png'

import bm2 from '../../assets/graphics/bm 2.png'

import './Features.scss'
export const Features = () => {
  return (
    <div className='features-container'>
       
       <div className='feat-img-container'>
            <img src={bm2} alt="" />
       </div>

       <div className='feat-text-container'>
           <h1>Our Features</h1>
            <div className='feat-row'>
                <div className='col1-item top-item'>
                    <h3>Track your progress</h3>
                    <p>Track things such as mood, stress, and anxiety</p>
                    <img className='feat-icon' src={trackerIcon} alt="" />
                </div>
                <div className='col1-item'>
                    <h3>Daily mental and physical challanges</h3>
                    <p>exersices to reinforce mental and physical wellbeing</p>
                    <img className='feat-icon' src={challengeIcon} alt="" />
                </div>
            </div>
            <div className='back-div'>
                <div className='background'></div>
            </div>
            <div className='feat-row'>
                <div className='col2-item top-item'>
                    <img className='feat-icon' src={contactIcon} alt="" />
                    <h3>Talk to someone</h3>
                    <p>Privately connect with a licensed and professional therapist.</p>
                </div>
                <div className='col2-item'>
                    <img className='feat-icon' src={supportIcon} alt="" />
                    <h3>Connect</h3>
                    <p>Get connected with peers who may be facing the same issues</p>
                </div>
            </div>
       </div>
       
    </div>
  )
}
