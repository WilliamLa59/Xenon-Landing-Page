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
                <button className='dl-btn'><FontAwesomeIcon className='icon apple-store' icon={faApple} /><p><span>Available on the <br/></span>Apple Store</p></button>
                <button className='dl-btn'><FontAwesomeIcon className='icon google-play' icon={faGooglePlay}/><p><span>Get it on <br/></span>Google Play</p></button>
            </div>
            <h1>Or</h1>
            <h5>Learn how to implement Xenon within your orgranization</h5>
            <button className='learn-btn'><p>Learn More</p></button>
        </div>

    </div>
  )
}
