import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'



import './Cta.scss'

export const Cta = () => {
  return (
    <div className='cta-container'>
        
        <div className='dl-btns-content'>
            <h1>Try out our free features now</h1>
            <h5>Brighten up your day with Xenon</h5>
            <div className='cta-btn-container'>
                <button className='dl-btn'><FontAwesomeIcon className='icon' icon={faApple} size/><p><span>Download on the <br/></span>Apple Store</p></button>
                <button className='dl-btn'><FontAwesomeIcon className='icon' icon={faGooglePlay}/><p><span>Get it on <br/></span>Google Store</p></button>
            </div>
            <h2>Or</h2>
            <p>Learn how to go about implementing Xenon within your orgranization</p>
            <button>Learn More</button>
        </div>

    </div>
  )
}
