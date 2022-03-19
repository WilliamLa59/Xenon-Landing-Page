import React from 'react'
import island1 from '../../assets/graphics/island 1.png'
import island2 from '../../assets/graphics/island 2.png'
import bm from '../../assets/graphics/bm.png'
import vine from '../../assets/graphics/plant.png'

import './Hero.scss'

export const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-header'>  
            <div className='hero-header-text'>
                <img className='vine' src={vine} alt="" />
                <container className='text-container'>
                    <h1>Improving Lives Together.</h1>
                    <p>
                        The Xenon Method is designed to 
                        inspire and guide healthcare workers 
                        on their personal health journey. 
                        Teaching individuals to live a healthy 
                        lifestyle connecting the mind, body & soul. 
                    </p>
                    <p className='sub'>Begin your #xenonlifestyle today!</p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet sem id
                mi ornare vehicula. Nulla imperdiet,
                leo non tristique sagittis, velit leo
                mattis enim, quis pellentesque magna
                diam eget nisi. Fusce varius urna
                diam, nec dictum quam eleifend id 
            </p>

            <p>
                Etiam in fermentum neque. Donec
                arcu ante, consectetur et aliquam
                vitae, finibus a leo. Vivamus eu porttitor nisl. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. Nunc
                ut sagittis neque. Integer hendrerit
                non lorem sit amet tempus. Proin
            </p>
            <hr/>
        </div>
    </div>
  )
}
