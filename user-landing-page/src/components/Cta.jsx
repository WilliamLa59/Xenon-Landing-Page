import React from 'react'
import homeScreen from '../assets/photos/phone-mockups/home-1080p.png'


export const Cta = () => {
  return (
    <div className='cta-container'>
        <div className='display-container'>
            <div className='col-1'>
                <h3>Talk to someone</h3>

                <h3>Connect</h3>
            </div>
            <div className='col-2'>
                <img src={homeScreen} alt="" />
            </div>
            <div className='col-3'>

            </div>
        </div>
        <div className='dl-btns'>

        </div>

    </div>
  )
}
