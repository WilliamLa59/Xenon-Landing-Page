import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import './Socials.scss'

export const Socials = () => {
  return (
    <div className='socials-container'>
      <h2>Connect with us</h2>
      <div className='icon-container'>
        <FontAwesomeIcon className='icon-social' icon={faInstagram}/>
        <FontAwesomeIcon className='icon-social' icon={faTwitter}/>
        <FontAwesomeIcon className='icon-social' icon={faTiktok}/>
        <FontAwesomeIcon className='icon-social' icon={faYoutube}/>
      </div>
      
    </div>
  )
}
