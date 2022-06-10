import React from 'react'
import CtaContact from '../../components/CtaContact'

import attente from '../../assets/questions.jpg'
import reponses from '../../assets/advising.jpg'
import accompagnement from '../../assets/working-process.jpg'
import expertise from '../../assets/raising-graph.jpg'

export default function Cabinet() {
  return (
    <section>

      <div className="banner banner-cabinet">
        <div className="banner-title">
          Cabinet CAP Patrimoine
        </div>
        <div className="banner-page-descr">
          Fort de 18 années d’expériences dans le domaine bancaire (notamment en banque privée) et dans les assurances, notre équipe reste en veille sur les nouveautés fiscales, économiques et juridiques pour toujours mieux vous accompagner.
        </div>
      </div>

      <div className="cabinet-wrapper">
        <div className="cabinet-detail-container">
          <div className="cabinet-detail-img">
            <img src={attente} alt="" />
          </div>
          <div className="cabinet-detail-text">
            <div className="cabinet-detail-text-title">
              Vos attentes
            </div>
            <div className="cabinet-detail-text-content">
              Tout d’abord nous faisons un audit complet de votre situation et de vos besoins, puis dans un second temps restitution des préconisations, enfin nous rechercherons des solutions auprès de nos partenaires pour un accompagnement dans leurs mises en place.
            </div>
          </div>
        </div>
        <div className="cabinet-detail-container">
          <div className="cabinet-detail-img">
            <img src={reponses} alt="" />
          </div>
          <div className="cabinet-detail-text">
            <div className="cabinet-detail-text-title">
              Nos réponses
            </div>
            <div className="cabinet-detail-text-content">
              Pour mieux répondre à vos attentes, nous allons chercher les solutions avec toute la largeur et la profondeur qui existent sur le marché, en toute objectivité, transparence et indépendance grâce à mes nombreux partenaires financiers, immobiliers et société de gestion.
            </div>
          </div>
        </div>
        <div className="cabinet-detail-container">
          <div className="cabinet-detail-img">
            <img src={accompagnement} alt="" />
          </div>
          <div className="cabinet-detail-text">
            <div className="cabinet-detail-text-title">
              Notre accompagnement
            </div>
            <div className="cabinet-detail-text-content">
              Au cabinet CAP Patrimoine, vous aurez un interlocuteur unique qui s’engagera à vous accompagner dans le temps pour des solutions optimisées et personnalisées.
            </div>
          </div>
        </div>
        <div className="cabinet-detail-container">
          <div className="cabinet-detail-img">
            <img src={expertise} alt="" />
          </div>
          <div className="cabinet-detail-text">
            <div className="cabinet-detail-text-title">
              Notre expertise
            </div>
            <div className="cabinet-detail-text-content">
              Activer les leviers<br />
              Utiliser les outils juridiques et fiscaux<br />
              Optimiser de la fiscalité<br />
              Préparer retraite<br />
              Anticiper les transmissions dans les meilleures conditions<br />
              Optimiser la rémunération du dirigeant<br />
              Financer au mieux les projets<br />
              Sécuriser les proches et le patrimoine<br />
            </div>
          </div>
        </div>
      </div>

      <CtaContact />

    </section>
  )
}
