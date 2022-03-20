import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'

import homeScreen from '../../assets/photos/phone-mockups/home-4k.png'

import contactIcon from '../../assets/icons/contact.png'
import supportIcon from '../../assets/icons/support.png'
import challengeIcon from '../../assets/icons/challenges.png'
import trackerIcon from '../../assets/icons/tracker.png'

import './Cta.scss'

export const Cta = () => {
  return (
    <div className='cta-container'>
        <div className='display-container'>
            
            <div className='col-1'>
                <div className='contact-feat top'>
                    <img className='feat-icon' src={contactIcon} alt="" />
                    <h3>Talk to someone</h3>
                    <p>Privately connect with a licensed and professional therapist.</p>
                </div>
                
                <div className='support-feat bot'>
                    <img className='feat-icon' src={supportIcon} alt="" />
                    <h3>Connect</h3>
                    <p>Get connected with peers who may be facing the same issues</p>
                </div>
            </div>

            <div className='col-2'>
                <img className='phone-mockup'src={homeScreen} alt="" />
            </div>

            <div className='col-3'>
                <div className='challenges-feat top'>
                    <img className='feat-icon' src={challengeIcon} alt="" />
                    <h3>Daily mental and physical challanges</h3>
                    <p>Complete exersices to help reinforce your mental and physical wellbeing</p>
                </div>
                
                <div className='tracker-feat bot'>
                    <img className='feat-icon' src={trackerIcon} alt="" />
                    <h3>Track your progress</h3>
                    <p>Track things such as mood and how your day went</p>
                </div>
            </div>
        </div>

        
        <div className='dl-btns-content'>
            <h1>Try out our free features now</h1>
            <h5>Brighten up your day with Xenon</h5>
            <div className='cta-btn-container'>
                <button className='dl-btn'><FontAwesomeIcon className='icon' icon={faApple} size/><p><span>Download on the <br/></span>Apple Store</p></button>
                <button className='dl-btn'><FontAwesomeIcon className='icon' icon={faGooglePlay}/><p><span>Get it on <br/></span>Google Store</p></button>
            </div>
        </div>

    </div>
  )
}
