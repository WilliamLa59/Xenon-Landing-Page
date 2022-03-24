import React from 'react'

import logo from '../../assets/icons/logo.png'
import island1 from '../../assets/graphics/island 1.png'
import island2 from '../../assets/graphics/island 2.png'
import bm from '../../assets/graphics/bm.png'
import vine from '../../assets/graphics/plant.png'
import tree from '../../assets/graphics/tree.png'

import './Hero.scss'

export const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-header'>  
            <div className='hero-header-text'>
                <img className='vine' src={vine} alt="" />
                <container className='text-container'>
                    
                    <div className='logo-container'> 
                        <img className='logo' src={logo} alt="" />
                        <h2 className='title' >Xenon <br /><span>by Luma</span></h2>
                    </div>
                   
                    <h1>Improving Lives Together.</h1>
                    <div className='vertical-line'></div>
                    <p>
                        The Xenon Method is designed to 
                        inspire and guide healthcare workers 
                        on their personal health journey. 
                        Teaching individuals to live a healthy 
                        lifestyle connecting the mind, body & soul. 
                    </p>
                    <p className='sub'>Begin your #xenonlifestyle today!</p>
                 
                   

                    <button className="get-started-btn"><p>Get Started</p></button>
                </container>
            </div>
            <img className='bm1'src={bm} alt="" />
        </div>

        <div className='island-container'>
            <img className='island1' src={island1} alt="" />
            <img className='island2' src={island2} alt="" />
        </div>

        <div className='about-us'>
            <h2>Who are we?</h2>
            <p>
                We are <span>Luma </span> a small team built off the appreciation for healthcare workers. We develop app with the goal of improving the worker experience within the healthcare industry. 
            </p>
            <hr/>
            <h2>What is Xenon?</h2>
            <p>
                Xenon is a wellness app targeted towards healthcare workers. 
                It aims to provide a holistic experience that focuses on reinforcing both the mind and body.
                With daily exercise and meditation exercises, and many more features.
                Our goal with Xenon is to help reduce and prevent stress and burnout.
            </p>
            <hr/>
            <h2>Who can use Xenon?</h2>
            <p>
                ANYONE! 
                While it was designed for healthcare workers, our free features allows it to be used as a general wellness application for just about everyone!
                Xenon can be used on its own by an individual user, but trives when implemented within an organization.
            </p>
            <div className='about-btns'>
                <button className='personal-btn'><p>Personal Use</p></button>
                <button className='business-btn'><p>Use within Organization</p></button>
            </div>
            <hr/>
            
        </div>
    </div>
  )
}
