import React, { useRef } from 'react'

import logo from '../../assets/logoCapPatrimoine.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../redux/changePage'
import { useState } from 'react'

import './header.css'

export default function Header(props) {

  const [myLogoIsResized, setMyLogoIsResized] = useState(false)

  const pages = props.pages

  const pageRank = useSelector(state => state.myPage.pageRank)

  const dispatch = useDispatch()

  const burger = useRef()
  const header = useRef()
  const outsideClick = useRef()

  const setLogoSize = () => {

    const myLogo = document.querySelector('.header-logo')

    const scrolled = document.documentElement.scrollTop;
    if (scrolled === 0 && myLogoIsResized) {
      myLogo.style.height = '9vh'
      setMyLogoIsResized(!myLogoIsResized)
    }
    else if (!myLogoIsResized) {
      myLogo.style.height = '2.5rem'
      setMyLogoIsResized(!myLogoIsResized)
    }

  }

  window.addEventListener('scroll', setLogoSize)

  const handleClick = () => {
    burger.current.classList.toggle('open')
    header.current.classList.toggle('slide-in')
    outsideClick.current.classList.toggle('display')
  }

  return (
    <>

      <div className="burger-header">
        <img className="burger-header-logo"
          src={logo}
          alt="cabinet cap patrimoine" />
        <div className="burger-header-name">
          Cabinet CAP Patrimoine
        </div>
      </div>

      <div className="burger-container"
        onClick={handleClick}>
        <div className="burger" 
        ref={burger}>

        </div>
      </div>

      <div className="click-outside"
      ref={outsideClick}
        onClick={handleClick}>

        </div>

      <div className="header" ref={header}>

        <div className="logo-container"
          onClick={() => dispatch(changePage(0))}>
          <img className="logo-container-img header-logo"
            src={logo}
            alt="cabinet cap patrimoine" />
          <div className="logo-container-name">Cabinet CAP Patrimoine
          </div>
        </div>

        <nav>
          <ul>
            {
              pages.map((page, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => dispatch(changePage(idx))}
                    className={pages[pageRank].name === page.name ? 'displayed' : ''}
                  >
                    {page.name}
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <div className="social-network">
          <a href="https://www.linkedin.com/in/christophe-vitu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </>
  )
}
