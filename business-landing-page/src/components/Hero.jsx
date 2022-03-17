import { TextField } from '@mui/material'
import React from 'react'

export const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='CTA'>
            <h4>We are Luma</h4>
            <h1>We care and appreciate our healthcare workers</h1>
            <p>
                Turnover in the healthcare industry is at an all-time high and its biggest factor is the struggle with Burnout.
                Which is where we come in play. We're devoted to providing the most well rounded and rich wellness program for healthcare workers. 


                Our App, Xenon, is a holistic and focuses on reinforcing both the mind and body.
                We provide confidential support for issues such as stress, substance abuse, depression, and anxiety. As well as offer fitness and meditation exercies. 
            </p>
            

            <p>provide your organization with the most comprehensive wellness program</p>
            <form action="POST">
                <input type='text' id='email'></input>
                <br/>
                <button type='submit'>Get Started Now</button>
            </form>
        </div>

    </div>
  )
}
