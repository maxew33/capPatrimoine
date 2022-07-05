import React, { useState, useRef } from 'react'
import CtaContact from '../../components/ctaContact/CtaContact'

import logo from '../../assets/logoCapPatrimoine.webp'


import './partenaires.css'

import { immoLogo, placementLogo, financementLogo } from '../../data/partnersLogo'

export default function Partenaires() {

  const carouselContainer = useRef([])

  const carouselContent = useRef([])

  const [imgAreLoaded, setImgAreLoaded] = useState([0, 0, 0])

  const partnersContent = [{
    name: 'Immobilier',
    intro: 'Des programmes en investissement locatif rigoureusement sélectionnés sur tout le territoire',
    logos: immoLogo
  },
  {
    name: 'Placement',
    intro: 'Des programmes en investissement locatif rigoureusement sélectionnés sur tout le territoire',
    logos: placementLogo
  },
  {
    name: 'Financement',
    intro: 'Des programmes en investissement locatif rigoureusement sélectionnés sur tout le territoire',
    logos: financementLogo
  }]


  const setMySpeed = (idx) => {
    const mySpeed = carouselContent.current[idx].getBoundingClientRect().width / 70
    setTimeout(() => { carouselContainer.current[idx].style.setProperty('--slide-speed', mySpeed + 's') }, 100)

  }

  const imgLoaded = (name, idx) => {

    const myState = imgAreLoaded
    myState[idx] += 1
    setImgAreLoaded(myState)

    myState[idx] === partnersContent[idx].logos.length * 2 && setMySpeed(idx)
  }

  return (
    <section>

      <div className="banner banner-partners">
        <div className="banner-title">
          Nos Partenaires
        </div>
        <div className="banner-page-descr">
          L’objectivité du conseil repose sur de nombreux partenaires et une offre de qualité, tant sur l’épargne financière que l’offre immobilière directe et indirecte.
        </div>
      </div>

      <div className="partners-wrapper page-wrapper">

        {
          partnersContent.map((content, idx) => {
            return (
              <div className="partners"
                key={idx}>
                <div className="partners-banner">
                  <img
                    className="partners-banner-icon"
                    src={logo}
                    alt="boussole" />
                  <div className="partners-banner-title">
                    {content.name}
                  </div>
                </div>
                <div className="partners-intro">
                  {content.intro}
                </div>
                <div className="partners-carousel"
                  ref={elt => carouselContainer.current[idx] = elt}>
                  {
                    [0, 1].map(index => {
                      return (
                        <div className={
                          idx === 1 ? "carousel-content carousel-content-reversed" : "carousel-content"}
                          key={'logo' + index}
                          ref={elt => carouselContent.current[idx] = elt}
                        >
                          {
                            content.logos.map(logo => {
                              return (<img
                                key={logo.id}
                                src={logo.link}
                                alt={logo.name}
                                onLoad={() => imgLoaded(logo.name, idx)} />)
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}

        <CtaContact />

      </div>


    </section >
  )
}
