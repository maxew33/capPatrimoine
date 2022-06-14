import React from 'react'
import CtaContact from '../../components/CtaContact'

import logo from '../../assets/logo.png'
import jigsaw from '../../assets/jigsaw.jpg'

import bouygues from '../../assets/bouygues.png'
import citya from '../../assets/citya.png'
import cogedim from '../../assets/cogedim.png'
import foncia from '../../assets/foncia.png'
import fonta from '../../assets/fonta.png'
import icade from '../../assets/icade.jpg'
import imodeus from '../../assets/imodeus.png'
import kaufman from '../../assets/kaufaman.jpg'
import nacarat from '../../assets/nacarat.png'
import pitch from '../../assets/pitch.png'
import tagerim from '../../assets/tagerim.png'

import './partenaires.css'
import { useEffect } from 'react'

export default function Partenaires() {

  const promLogo = [
    {
      name: 'bouygues',
      link: bouygues
    },
    {
      name: 'citya',
      link: citya
    },
    {
      name: 'cogedim',
      link: cogedim
    },
    {
      name: 'foncia',
      link: foncia
    },
    {
      name: 'fonta',
      link: fonta
    },
    {
      name: 'icade',
      link: icade
    },
    {
      name: 'imodeus',
      link: imodeus
    },
    {
      name: 'kaufman',
      link: kaufman
    },
    {
      name: 'nacarat',
      link: nacarat
    },
    {
      name: 'pitch',
      link: pitch
    },
    {
      name: 'tagerim',
      link: tagerim
    }
  ]

  useEffect(() => {

    const carouselContent = Array.from(document.querySelectorAll('.carousel-content'))

    setTimeout(() => {
      carouselContent.forEach(carousel => {
        carousel.style.setProperty('--slide-speed', carousel.getBoundingClientRect().width / 150 + 's')
        console.log(carousel, carousel.getBoundingClientRect().width)
      })
    }, 250)


  }, [])

  return (
    <section>


      {/* <div className="banner-illus">
        <img
          src={jigsaw}
          alt="puzzle" />
        <div className="overlay"></div>
      </div> */}

      <div className="banner banner-partners">
        <div className="banner-title">
          Nos Partenaires
        </div>
        <div className="banner-page-descr">
          Videre haec redeundum serium admodum ardore agi mirum plebem serium cum mirum ergo dimicationum textum mirum haec dimicationum memorabile admodum quodam permittunt pendentem plebem mirum nihil serium innumeram infuso serium textum pendentem.
        </div>
      </div>

      <div className="partners-wrapper page-wrapper">

        <div className="partners">
          <div className="partners-banner">
            <img
              className="partners-banner-icon"
              src={logo}
              alt="boussole" />
            <div className="partners-banner-title">
              Promoteurs et gestionnaires
            </div>
          </div>
          <div className="partners-carousel">
            <div className="carousel-content">
              {
                promLogo.map((logo, idx) => {
                  return (<img
                    key={idx}
                    src={logo.link}
                    alt={logo.name} />)
                })
              }
            </div>
            <div className="carousel-content">
              {
                promLogo.map((logo, idx) => {
                  return (<img
                    key={idx}
                    src={logo.link}
                    alt={logo.name} />)
                })
              }
            </div>
          </div>
        </div>

        <div className="partners">
          <div className="partners-banner">
            <img
              className="partners-banner-icon"
              src={logo}
              alt="boussole" />
            <div className="partners-banner-title">
              Société de gestion
            </div>
          </div>
          <div className="partners-carousel"></div>
        </div>

        <div className="partners">
          <div className="partners-banner">
            <img
              className="partners-banner-icon"
              src={logo}
              alt="boussole" />
            <div className="partners-banner-title">
              Placement et financement
            </div>
          </div>
          <div className="partners-carousel"></div>
        </div>

        <CtaContact />

      </div>


    </section>
  )
}
