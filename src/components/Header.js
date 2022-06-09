import React from 'react'

import logo from '../assets/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import {changePage} from '../redux/changePage'

export default function Header(props) {

  const pages = props.pages

  const pageRank = useSelector(state => state.myPage.pageRank)

  const dispatch = useDispatch()

  return (
    <div className="header">

      <div className="logo-container">
        <img className="logo-container-img"
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
                  className={pages[pageRank].name === page.name ? 'displayed' : 'toto'}
                >
                  {page.name}
                </li>
              )
            })
          }
        </ul>
      </nav>

      <div className="social-network">

        <FontAwesomeIcon icon={faLinkedinIn} />

      </div>
    </div>
  )
}
