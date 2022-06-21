import React from 'react'

import logo from '../../assets/logo.png'

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
    const burger = document.querySelector('.burger'),
      header = document.querySelector('.header')

    burger.classList.toggle('open')
    header.classList.toggle('slide-in')
  }

  const handleClickAccueil = () => {

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
        <div className="burger"></div>
      </div>

      <div className="header">

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
