import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './scrollToTop.css'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


export default function ScrollToTop() {

    const [scrollBtnVisible, setScrollBtnVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setScrollBtnVisible(true)
        }
        else if (scrolled <= 300) {
            setScrollBtnVisible(false)
        }
    }

    const handleScrollBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible)


    return (
        <>{
            scrollBtnVisible &&
            <button
                onClick={handleScrollBtn}
                className='scroll-to-top'>
                <FontAwesomeIcon icon={faChevronUp}/>
            </button>
        }
        </>
    )
}
