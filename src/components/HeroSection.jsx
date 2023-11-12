import React from 'react'

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>
            TEST HEREO H1
        </h1>
        <p>
            TEST HERO P
        </p>
        <div className='hero-btns'>
            <Button 
            classname='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'
            >
                TEST HRO BTN
            </Button>
        </div>
    </div>
  )
}

export default HeroSection