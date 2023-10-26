import React from 'react'
import Button from '../Button'

const Experience = () => {
    return (
        <div className='experience' style={{ backgroundImage: `url('assets/images/bg-img1.jpg')` }}>
            <div className='overlay'>
                <div className='container'>
                    <div className='message-area'>
                        <span className='quote'>Over 20 years of experience we’ll ensure you always get the best guidance.</span>
                        <Button btntext="REQUEST QUOTE" className='button-primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience