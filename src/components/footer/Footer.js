import React from 'react'
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import logo from '../../assets/logoCapPatrimoine.webp'
import { useDispatch } from 'react-redux'
import { changePage } from '../../redux/changePage'

export default function Footer() {
    const dispatch = useDispatch()

    const handleClick = () => {
        document.querySelector('.legal-notice-wrapper').style.display = 'block'
        setTimeout(() => {
            document.querySelector('.legal-notice-wrapper').style.opacity = 1
        }, 10)
    }

    return (
        <div className="footer">
            <div className="footer-top">
                <div
                    className="footer-logo-container"
                    onClick={() => dispatch(changePage(0))}
                >
                    <img
                        className="footer-logo-container-img"
                        src={logo}
                        alt="cabinet Cap Patrimoine"
                    />
                    <div className="footer-logo-container-name">
                        <div>Cabinet Cap Patrimoine</div>
                        <div>Conseil en gestion de patrimoine.</div>
                    </div>
                </div>

                <div className="legal-notice-link" onClick={handleClick}>
                    Mentions légales
                </div>

                <div
                    className="contact-us"
                    onClick={() => dispatch(changePage(4))}
                >
                    Contactez-nous
                </div>

                <div>
                    <a
                        href="https://www.maxime-malfilatre.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="link to webmaster"
                    >
                        Site crée par Maxime Malfilâtre
                    </a>
                </div>

                <div className="social-network">
                    <a
                        href="https://www.linkedin.com/in/christophe-vitu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="link to linkedin"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>

            <div className="footer-btm">
                <span>Cabinet Cap Patrimoine : 13 allée du carretey 33610 CESTAS - 06 81 76 67 18 </span>
                <span>
                    {' '}
                    SARL CV-FC Gestion & Patrimoine au capital de 1 000€ - RCS
                    de Bordeaux sous le N° 907510499{' '}
                </span>
                <span> Code APE/NAF : 8559A </span>
                <span>
                    {' '}
                    N° de TVA intracommunautaire : FR14907510499 </span><span>Membre de la
                    Compagnie des CIF sous le numéro F002692 agréée par l'AMF{' '}
                </span>
                <span>
                    {' '}
                    Inscrit à L'ORIAS sous le numéro 22001355 en qualité de :
                    Conseiller en Investissements Financiers, membre de La
                    Compagnie des CGP, association agréée par l'Autorité des
                    Marchés Financiers ; Courtier en assurances{' '}
                </span>
                <span>
                    {' '}
                    Responsabilité Civile Professionnelle et Garanties
                    Financières assurées par la compagnie Zurich Insurance PLC
                    (112, Avenue de Wagram 75017 Paris) sous le N° RCPGP
                    7400023129 - Ne peut recevoir aucun effet, fonds ou valeur.
                </span>
            </div>
        </div>
    )
}
