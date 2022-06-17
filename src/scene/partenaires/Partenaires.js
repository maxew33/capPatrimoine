import React from 'react'
import CtaContact from '../../components/ctaContact/CtaContact'

import logo from '../../assets/logo.png'
import jigsaw from '../../assets/jigsaw.jpg'


import './partenaires.css'
import { useEffect } from 'react'

import {immoLogo, placementLogo, financementLogo} from '../../data/partnersLogo'

export default function Partenaires() {

  useEffect(() => {

    const carouselContent = Array.from(document.querySelectorAll('.carousel-content'))

    setTimeout(() => {
      carouselContent.forEach(carousel => {
        carousel.style.setProperty('--slide-speed', carousel.getBoundingClientRect().width / 75 + 's')
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
              Immobilier
            </div>
          </div>
          <div className="partners-intro">Des programmes en investissement locatif rigoureusement sélectionnés sur tout le territoire
          </div>
          <div className="partners-carousel">
            <div className="carousel-content">
              {
                immoLogo.map(logo => {
                  return (<img
                    key={logo.id}
                    src={logo.link}
                    alt={logo.name} />)
                })
              }
            </div>
            <div className="carousel-content">
              {
                immoLogo.map(logo => {
                  return (<img
                    key={logo.id}
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
              Placement
            </div>
          </div>
          <div className="partners-intro">
          Une gamme complète de solutions de placement financiers sélectionnée auprès des plus grandes signatures du marché
          </div>
          <div className="partners-carousel">
            <div className="carousel-content carousel-content-reversed">
              {
                placementLogo.map(logo => {
                  return (<img
                    key={logo.id}
                    src={logo.link}
                    alt={logo.name} />)
                })
              }
            </div>
            <div className="carousel-content carousel-content-reversed">
              {
                placementLogo.map(logo => {
                  return (<img
                    key={logo.id}
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
              Financement
            </div>
          </div>
          <div className="partners-intro">
          Des spécialistes du financement des projets patrimoniaux en immobilier et en SCPI
          </div>
          <div className="partners-carousel">
            <div className="carousel-content">
              {
                financementLogo.map(logo => {
                  return (<img
                    key={logo.id}
                    src={logo.link}
                    alt={logo.name} />)
                })
              }
            </div>
            <div className="carousel-content">
              {
                financementLogo.map(logo => {
                  return (<img
                    key={logo.id}
                    src={logo.link}
                    alt={logo.name} />)
                })
              }
            </div></div>
        </div>

        <CtaContact />

      </div>


    </section>
  )
}
