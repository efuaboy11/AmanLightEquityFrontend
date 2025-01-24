
import { Link, useLocation } from 'react-router-dom'
import '../css/componentCss/navbar.css'
import '../css/informationCss/site.css'
import { useContext, useState } from 'react'
import { use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBarsStaggered, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../context/AuthContext'
export const Navbar = () =>{

  const { authTokens, 
    showSidebar, 
    toggleClientSidebar,

  } = useContext(AuthContext)
  
  const [overlay, setOverlay] = useState(false)
  const [assetDropdown, setAssetDropdown] = useState(false)
  const [accountDropdown, setAccountDropdown] = useState(false)
  const [marketDropdown, setMarketDropdown] = useState(false)
  const [tradingDropdown, setTradingDropdown] = useState(false)
  const [cryptoDropdown, setCryptoDropdown] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)


  const [sidebarAssetDropdown, setSidebarAssetDropdown] = useState(false)
  const [sidebarAccountDropdown, setSidebarAccountDropdown] = useState(false)
  const [sidebarMarketDropdown, setSidebarMarketDropdown] = useState(false)
  const [sidebarTradeDropdown, setSidebarTradeDropdown] = useState(false)
  const [sidebarCryptoDropdown, setSidebarCryptoDropdown] = useState(false)
  const [sidebarAboutDropdown, setSidebarAboutDropdown] = useState(false)



  const location = useLocation();
  const isActiveDashLink = (path) =>{
    return location.pathname === path

  }

  




  const toggleAsset = () =>{
    setAssetDropdown(!assetDropdown)
    setAccountDropdown(false)
    setMarketDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setTradingDropdown(false)
    if(!assetDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  const toggleAccount = () =>{
    setAccountDropdown(!accountDropdown)
    setAssetDropdown(false)
    setMarketDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setTradingDropdown(false)
    if(!accountDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  
  const toggleMarket = () =>{
    setMarketDropdown(!marketDropdown)
    setAssetDropdown(false)
    setAccountDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setTradingDropdown(false)
    if(!marketDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  const toggleTrade = () =>{
    setTradingDropdown(!tradingDropdown)
    setMarketDropdown(false)
    setAssetDropdown(false)
    setAccountDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    if(!tradingDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  const toggleCrypto = () =>{
    setCryptoDropdown(!cryptoDropdown)
    setMarketDropdown(false)
    setAssetDropdown(false)
    setAccountDropdown(false)
    setTradingDropdown(false)
    if(!cryptoDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }

  const toggleAbout = () =>{
    setAboutDropdown(!aboutDropdown)
    setMarketDropdown(false)
    setAssetDropdown(false)
    setAccountDropdown(false)
    setTradingDropdown(false)
    setCryptoDropdown(false)
    if(!aboutDropdown){
      setOverlay(true)
    }else{
      setOverlay(false)
    }

  }






    const toggleSidebarAsset = () =>{
    setSidebarAssetDropdown(!sidebarAssetDropdown)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarAccount = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(!sidebarAccountDropdown)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarMarket = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(!sidebarMarketDropdown)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarTrade = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(!sidebarTradeDropdown)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarCrypto = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(!sidebarCryptoDropdown)
  }


  const toggleSidebarAbout = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(!sidebarAboutDropdown)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }
  return(
    <div className={`${overlay ? 'overlay-background' : ''}`}>
      <div className="nav-shadow nav-bar">
        <div className="mx-3 width-100">
          <div className='nav-laptop-screen'>
            <div className="row justify-content-between py-4">
              <div className="col-2">

              </div>

              <div className="col-7">
                <div className="d-flex align-center">
                  <div className='nav-links'>
                    <ul className="d-flex ">
                      <li className='px-3'>
                        <div>
                          <p onClick={toggleAsset} className={`${assetDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`} >Assets</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div>
                          <p onClick={toggleAccount} className={`${accountDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Acoount</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div>
                          <p onClick={toggleMarket} className={`${marketDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Markets</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div>
                          <p onClick={toggleTrade} className={`${tradingDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Trading Platform</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div>
                          <p className={` navbar-links cursor-pointer`}>Our Packages</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div onClick={toggleCrypto}>
                          <p className={`${cryptoDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Buy Crypto</p>
                        </div>
                      </li>

                      <li className='px-3'>
                        <div onClick={toggleAbout}> 
                          <p className={`${aboutDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>About Company</p>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>


                
              </div>

              <div className="col-3">
                
                <div className='d-flex'>
                  <div className='me-3'>
                    <Link className='site-btn font-bold'>Create Account</Link>
                  </div>

                  <div>
                    <Link className='site-inverse-btn font-bold'>Sign In</Link>
                  </div>
                  
                </div>

              </div>
            </div>
          </div>

          <div className="nav-responsive px-1">
            <div className="d-flex justify-content-between">
              <div>
                <img src="" alt="" />
              </div>

              <div onClick={toggleClientSidebar}>
                <FontAwesomeIcon className='sm-text site-primary-text font-weight-700' icon={faBarsStaggered}/>
               {/* <i class="bi bi-list-nested md-text"></i> */}
              </div>
            </div>
          </div>

          <section className='row'>
            <div className="col-2"></div>
            <div className='col-7 ps-4 '>
              <div>
                {assetDropdown &&
                  <ul className={`nav-sublink-container `}>
                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Forex</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Precious Metal</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Shared Indexes</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Energies Carriers</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Crypto Currency</p>                
                      </Link>
                    </li>
                  </ul>
                }

                {accountDropdown &&
                  <ul className={`nav-sublink-container `}>

                    <div className="d-flex">
                      <div className='me-5 pe-5'>
                        <p className="light-text">Accounts</p>
                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Open Live Account</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Account Verification</p>                
                          </Link>
                        </li>
                      </div>


                      <div>
                        <p className="light-text">Fundings</p>
                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Deposit Method</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>General Fees</p>                
                          </Link>
                        </li>

                      </div>
                    </div>
                  </ul>
                }

                {marketDropdown &&
                  <ul className={`nav-sublink-container `}>
                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Bitcoin</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Crude Oil</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Shocked Indexes</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Commodities</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Marijuana</p>                
                      </Link>
                    </li>
                  </ul>
                }

                {tradingDropdown &&
                  <ul className={`nav-sublink-container `}>
                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>MT5 Desktop</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>MT5 Mobile</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>MT5 Web Trader</p>                
                      </Link>
                    </li>
                  </ul>
                }

                {cryptoDropdown &&
                  <ul className={`nav-sublink-container `}>
                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Coinbase</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Voyager</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Coinmama</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Gemini</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>eToro</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>BlockFi</p>                
                      </Link>
                    </li>

                    <li className='mb-3'>
                      <Link className='nav-sublink'>
                        <p>Kraken</p>                
                      </Link>
                    </li>
                  </ul>
                }

                {aboutDropdown &&
                  <ul className={`nav-sublink-container `}>

                    <div className="d-flex">
                      <div className='me-5 pe-5'>
                        <p className="light-text">About Company</p>
                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>About Us</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Contact Us</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Affiliate Programs</p>                
                          </Link>
                        </li>

                        <p className="light-text">Trading Condition</p>
                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Order of Execution</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Margin Requirements</p>                
                          </Link>
                        </li>

                      </div>



                      <div className='me-5 pe-5'>
                        <p className="light-text">Regulations</p>
                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Regulation Explained</p>                
                          </Link>
                        </li>
                        <p className="light-text">Transparency</p>
                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Privacy Policy</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Safety Funds</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Risk Disclosure</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Terms and Conditions</p>                
                          </Link>
                        </li>


                      </div>

                      <div>
                        <p>...</p>
                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Information Security</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Conflit of Interest</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Complaint Procedure</p>                
                          </Link>
                        </li>

                        <li className='mb-3'>
                          <Link className='nav-sublink'>
                            <p>Margin Calls</p>                
                          </Link>
                        </li>
                      </div>
                    </div>
                  </ul>
                }



                
              </div>
            </div>
          </section>
        </div>
        


      </div>


      <div className={`${showSidebar ? 'client-sidebar-overlay' : ''}`}>
        <div className={` client-sidebar ${showSidebar ? 'client-show-sidebar': 'client-close-sidebar'}`}>
          <div className='scroll-bar-y client-sidebar-height pb-5'>
            <ul className='pt-3'>
              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAsset}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Asset</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAssetDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAssetDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/plan/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/plan/">
                          <div className="d-flex ms-3 py-2">
                            <p>Forex</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/history/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/history/">
                          <div className="d-flex ms-3 py-2">
                            <p>Precious Metals</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Shared Indexes</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Energy Carriers</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Cryptocurrencies</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>


              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAccount}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Account</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAccountDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAccountDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <p className="light-text ps-3 pt-3">Account</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/plan/") ?"client-sidebar-active-link": ""}`}>     
                        <Link className='client-sidebar-link' to="/dashboard/investment/plan/">
                          <div className="d-flex ms-3 py-2">
                            <p>Open Live Account</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/history/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/history/">
                          <div className="d-flex ms-3 py-2">
                            <p>Account Verification</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Fundings</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Deposit Method</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>General Fees</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>

              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarMarket}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Market</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarMarketDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarMarketDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/plan/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/plan/">
                          <div className="d-flex ms-3 py-2">
                            <p>Crude Oil</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/history/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/history/">
                          <div className="d-flex ms-3 py-2">
                            <p>Bitcoin</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Commodities</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Marijuana</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Stock Indicies</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>


              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarTrade}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Trading Platform</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarTradeDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarTradeDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/plan/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/plan/">
                          <div className="d-flex ms-3 py-2">
                            <p>MT5 Desktop</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/history/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/history/">
                          <div className="d-flex ms-3 py-2">
                            <p>MT5 Mobile</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>MT5 Web Trader</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>

              <li className={`pb-3 pt-1  ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                  <div className="d-flex ms-3">
                    <p className=' font-size-20px'>Our Packages</p> 
                  </div>
                </Link>
              </li>

              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarCrypto}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Buy Crypto</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarCryptoDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarCryptoDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/history/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/history/">
                          <div className="d-flex ms-3 py-2">
                            <p>Coinbase</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Voyager</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Coinmama</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Gemini</p> 
                          </div>
                        </Link>
                      </li>



                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>eToro</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>BlockFi</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Kraken</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>

              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAbout}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>About Company</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAboutDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAboutDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <p className="light-text ps-3 pt-3">About Company</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/plan/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/plan/">
                          <div className="d-flex ms-3 py-2">
                            <p>About Us</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/history/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/history/">
                          <div className="d-flex ms-3 py-2">
                            <p>Contact Us</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/investment/history/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/investment/history/">
                          <div className="d-flex ms-3 py-2">
                            <p>Affilate Programs</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Trading Conditions</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Order of Execution</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Margin Requirement</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Regulation</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Regulation  Explained</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Transparency </p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Privacy Policy</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Safety Funds</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Risk Disclosure</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Terms and Conditions</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Information Security</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Conflit of Interest</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Complaint Procedure</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/dashboard/market-chart/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/dashboard/market-chart/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Margin Calls</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>
              
            </ul>

            <div className="d-flex justify-content-center pt-4">
              <div>
                <div className='d-flex'>
                  <div className='me-3'>
                    <Link className='client-sidebar-btn  font-bold'>Create Account</Link>
                  </div>

                  <div>
                    <Link className='client-sidebar-btn  font-bold'>Sign In</Link>
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