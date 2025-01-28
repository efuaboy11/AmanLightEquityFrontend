import { Link, useLocation } from 'react-router-dom'
import '../css/componentCss/footer.css'
import '../css/style.css'
import '../css/informationCss/site.css'
import { useContext, useState } from 'react'
import { use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBarsStaggered, faEnvelope, faHandHoldingDollar, faLocation, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../context/AuthContext'
import mfsa from '../img/mfsa.svg'
import acpr from '../img/acpr.svg'
import bafin from '../img/bafin.svg'
import cnmv from '../img/cnmv.svg'
import mfid from '../img/mfid.svg'
import bank from '../img/bank-transfer.svg'
import neteller from '../img/neteller.svg'
import mastercard from '../img/mastercard.svg'
import visa from '../img/visa.svg'
import finanstilsynet from '../img/finanstilsynet.svg'
import barclays from '../img/barclays.svg'
import citi from '../img/citi.svg'
import credit from '../img/credit-suisse.svg'
import currenex from '../img/currenex.svg'
import lmax from '../img/lmax.svg'
import primexm from '../img/primexm.svg'
import ubs from '../img/ubs.svg'
import bankCyprus from '../img/bank-of-cyprus.svg'
import bov from '../img/bov.svg'
import pwc from '../img/pwc.svg'
import marm from '../img/provider-icon12.svg'
export const Footer = () =>{

  return(
    <div>
      <div className="footer-bg py-5">
        <div className="container-lg">
          <div>
            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">

              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faPhoneVolume}/>
                    <p className="light-text">+1 (983) 458-3459</p>
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faEnvelope}/>
                    <p className="light-text">support@AmanilightEquity.com</p>
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faLocation}/>
                    <p className="light-text">27 Division St, 1100. E Denver, CO 80237, USA</p>
                  </div>

                </div>
              </div>
            </div>


            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 pb-3">REGULATION:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={mfsa} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={acpr} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={bafin} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={cnmv} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={mfid} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={finanstilsynet} alt="" />
                  </div>

                </div>
              </div>
            </div>

            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 pb-3">PAYMENT METHOD:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={bank} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={neteller} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={mastercard} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={visa} alt="" />
                  </div>

                </div>
              </div>
            </div>

            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 uppercase non-wrap-text pb-3">Liquidity Provider:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={barclays} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={citi} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={credit} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={currenex} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={lmax} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={primexm} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={ubs} alt="" />
                  </div>


                  

                </div>
              </div>
            </div>

            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 uppercase non-wrap-text pb-3">Corporate Governance:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={bankCyprus} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={bov} alt="" />
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <img src={pwc} alt="" />
                  </div>


                  

                </div>
              </div>
            </div>

            <div className="row border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <div className="align-center d-flex">
                  <p className="light-text-2 sm-text font-weight-700 uppercase non-wrap-text pb-3">ASSOCIATIONS:</p>
                </div>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <img src={marm} alt="" />
                  </div>                  

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}