import React, { useEffect } from 'react'

import logo from '../assets/logo.png'

import '../style/transition-slide.css'

export default function TransitionSlide() {

    return (
        <div className='transition-slide'>
            <div className="transition-slide-content">
                <img src={logo} alt="" />
                Cabinet CAP Patrimoine
            </div>
        </div>
    )
}
