import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <hr />
      <div className='footer-socials'>
        <FontAwesomeIcon className='icon-social' icon={faInstagram}/>
        <FontAwesomeIcon className='icon-social' icon={faTwitter}/>
        <FontAwesomeIcon className='icon-social' icon={faTiktok}/>
        <FontAwesomeIcon className='icon-social' icon={faYoutube}/>
      </div>
      <div class="copyright">
        © Copyright Luma
      </div>
    </footer>
  );
};

