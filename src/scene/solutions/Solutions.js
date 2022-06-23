import React from 'react'
import CtaContact from '../../components/ctaContact/CtaContact'

import financialSavings from '../../assets/greenplant.webp'
import realEstateSavings from '../../assets/keys.webp'

import './solutions.css'

export default function Solutions() {
  return (
    <section>
      {/* faire un toggle pour changer la classe des solutions => characteristic lors du passage en portrait */}

      <div className="banner banner-solutions">
        <div className="banner-title">
          Nos solutions
        </div>
        <div className="banner-page-descr">
          Videre haec redeundum serium admodum ardore agi mirum plebem serium cum mirum ergo dimicationum textum mirum haec dimicationum memorabile admodum quodam permittunt pendentem plebem mirum nihil serium innumeram infuso serium textum pendentem.
        </div>
      </div>


      <div className="solutions-wrapper page-wrapper">

        <div className="solution">
          <div className="solution-title">
            Épargne financière
          </div>
          <img
            className="solution-img"
            src={financialSavings}
            alt="épargne financière" />
          <div className="solution-text paragraph-content-text">
            Assurance vie, Contrat de capitalisation. Multigestionnaire, à architecture ouverte, avec options de gestion financière, garantie plancher des sommes investies.
          </div>
        </div>

        <div className="solution">
          <div className="solution-title">
            Épargne immobilière
          </div>
          <div>
            <img
              className="solution-img"
              src={realEstateSavings}
              alt="épargne immobilière" />
          </div>
          <div className="solution-text paragraph-content-text">
            Dispositifs Pinel<br />
            Dispositif Malraux<br />
            SCPI de rendement<br />
          </div>
        </div>

        <CtaContact />

      </div>

    </section>
  )
}
