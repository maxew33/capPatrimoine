import React from 'react'
import CtaContact from '../../components/CtaContact'

import financialSavings from '../../assets/greenplant.jpg'
import realEstateSavings from '../../assets/keys.jpg'

export default function Solutions() {
  return (
    <section>

      <div className="banner banner-solutions">
        <div className="banner-title">
          Nos solutions
        </div>
        <div className="banner-page-descr">
          Videre haec redeundum serium admodum ardore agi mirum plebem serium cum mirum ergo dimicationum textum mirum haec dimicationum memorabile admodum quodam permittunt pendentem plebem mirum nihil serium innumeram infuso serium textum pendentem.
        </div>
      </div>

      <div className="solutions-details">
        <div className="solutions-detail-container">
          <div className="solution-detail-title">
            Épargne financière
          </div>
          <div className="solution-detail-content">
            <div className="solution-detail-img">
              <img src={financialSavings} alt="" />
            </div>
            <div className="solution-detail-text">
              Assurance vie, Contrat de capitalisation. Multigestionnaire, à architecture ouverte, avec options de gestion financière, garantie plancher des sommes investies.
            </div>
          </div>
        </div>
        <div className="solutions-detail-container">
          <div className="solution-detail-title">
            Épargne immobilière
          </div>
          <div className="solution-detail-content">
            <div className="solution-detail-img">
              <img src={realEstateSavings} alt="" />
            </div>
            <div className="solution-detail-text">
              Dispositifs Pinel<br />
              Dispositif Malraux<br />
              SCPI de rendement<br />
            </div>
          </div>
        </div>
      </div>

      <CtaContact />

    </section>
  )
}
