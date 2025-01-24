import { useContext } from "react"
import '../../css/informationCss/home.css'
import { Navbar } from "../../component/navbar"
import AuthContext from "../../context/AuthContext"
import { HomeCoverCarousel } from "../../swiperContainer/HomeCoverSwiper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuildingColumns, faScaleBalanced } from "@fortawesome/free-solid-svg-icons"
import featuresIcon1 from '../../img/f.svg'
import featuresIcon2 from '../../img/features-icon1.svg'
import featuresIcon3 from '../../img/features-icon3.svg'
import featuresIcon4 from '../../img/features-icon4-updated.svg'
import visaPic from '../../img/visa.png'
import masterCardPic from '../../img/mastercard.png'
import coinPic from "../../img/moneyIcon.png"
import groupPeople1 from "../../img/GroupPeople1.jpg"
import manComputer from "../../img/manComputer.jpg"
import phoneChart from "../../img/phone.mp4"


import { Link } from "react-router-dom"


export const Home = () =>{
  const { authTokens, 
    overlay,

  } = useContext(AuthContext)
  


  return(
    <div>
      <div className="position-sticky1">
        <Navbar/>
      </div>


      <div>
        <HomeCoverCarousel />

        <div>
          <section className="site-section-container">
            <div className="container-lg">
              <div className="row g-4">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div>
                    <img width='150px'  src={featuresIcon1} alt="" />
                    <div className="pt-4">
                      <p className="font-weight-700 uppercase pb-3">Constant Innovation</p>
                      <p>AmanlightEquity is always evolving, consistently enhancing the trading experience to make it seamless, intuitive, and user-friendly.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div>
                    <img width='90px' src={featuresIcon2} alt="" />
                    <div className="pt-4">
                      <p className="font-weight-700 uppercase pb-3">Trustworthy & Transparent</p>
                      <p>Our platform is built on a foundation of trust, offering transparent processes and clear communication to ensure you always know where your investments stand.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div>
                    <img width='70px' src={featuresIcon3} alt="" />
                    <div className="pt-4">
                      <p className="font-weight-700 uppercase pb-3">Advanced Security Measures</p>
                      <p>We employ industry-leading security protocols, including two-factor authentication and encryption, to safeguard your funds and personal data from any threats.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div>
                    <img width='80px' src={featuresIcon4} alt="" />
                    <div className="pt-4">
                      <p className="font-weight-700 uppercase pb-3">PURE ECN</p>
                      <p>AmaniLightEquity offers Electronic Communication Network technology, which seeks to guarantee that traders always trade under the best trading conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row gy-5 gx-3">
                <div className="col-md-6 text-md-start text-center">
                  <div className='who-we-are-text'>
                    <div>
                      <h2 className='grey-text pb-4' data-aos="fade-right" data-aos-duration="1000">Company Overview</h2>
                      <p data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="300">At AmaniLightEquity, we are dedicated to empowering individuals and businesses to achieve financial success through smart investments and expert guidance. Founded on the principles of transparency, integrity, and innovation, our platform provides a comprehensive suite of trading and investment solutions tailored to meet the diverse needs of our clients. <br />As a trusted broker, we specialize in Forex, cryptocurrency, stocks, and commodities, offering competitive spreads, cutting-edge trading technology, and unparalleled customer support. Our team of seasoned financial experts and analysts work tirelessly to ensure a seamless trading experience while equipping our clients with the tools and knowledge needed to thrive in dynamic markets.</p>
                      <div className="pt-5" data-aos="fade-right" data-aos-duration="1000">
                      <Link to='/about' className='site-btn px-5'>Learn More</Link>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-none d-md-block">
                    <img  className='width-100 border-radius-5px' src={groupPeople1} alt="" />
                  </div>

                </div>


                <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img  className='width-100 border-radius-5px' src={manComputer} alt="" />
                </div>

              </div>


              <div className="col-md-6 text-md-start text-center">
                <div className='who-we-are-text'>
                  <div>
                    <h2 className='grey-text pb-4' data-aos="fade-left" data-aos-duration="1000">Company Profile</h2>
                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">At AmanilightEquity, we specialize in providing secure, innovative, and client-focused brokerage services in Forex, cryptocurrencies, commodities, and equities. Our mission is to empower traders and investors with the tools, knowledge, and support to succeed in global financial markets.Regulated by [Regulatory Body], we adhere to the highest standards of transparency, integrity, and compliance. Our advanced trading platforms, competitive spreads, and robust security protocols ensure a seamless and trusted trading experience.</p>
                    <div data-aos="fade-left" data-aos-duration="1000"  className="pt-5 pb-5">
                    <Link to="/about" className='site-btn px-5'>Learn More</Link>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="text-center">
                <p className="font-weight-700 site-primary-text uppercase">Live Chart</p>
                <p className="site-header font-weight-700">Leveraging Live Charts For Advanced <br />Analysis</p>
              </div>
 

              <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22NASDAQ%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22cypherblocksage.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22cypherblocksage.com%2F%22%7D"
               title="ticker tape TradingView widget" lang="en"
               style={{
                userSelect: "none",
                boxSizing: "border-box",
                display: "block",
                height: "46px",
                width: "100%",
              }}></iframe>

              <div className="row pt-5 gy-5 gx-3">
                <div className="col-md-6">
                  <div>
                    <iframe
                    scrolling="no" 
                    allowtransparency="true" 
                    frameborder="0" 
                    src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A610%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Atrue%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22d%22%3A%22Nasdaq%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANKY%22%2C%22d%22%3A%22Nikkei%20225%22%7D%2C%7B%22s%22%3A%22INDEX%3ADEU30%22%2C%22d%22%3A%22DAX%20Index%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3AUKXGBP%22%2C%22d%22%3A%22UK%20100%22%7D%5D%2C%22originalTitle%22%3A%22Indices%22%7D%2C%7B%22title%22%3A%22Commodities%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1!%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3A6E1!%22%2C%22d%22%3A%22Euro%22%7D%2C%7B%22s%22%3A%22COMEX%3AGC1!%22%2C%22d%22%3A%22Gold%22%7D%2C%7B%22s%22%3A%22NYMEX%3ACL1!%22%2C%22d%22%3A%22Crude%20Oil%22%7D%2C%7B%22s%22%3A%22NYMEX%3ANG1!%22%2C%22d%22%3A%22Natural%20Gas%22%7D%2C%7B%22s%22%3A%22CBOT%3AZC1!%22%2C%22d%22%3A%22Corn%22%7D%5D%2C%22originalTitle%22%3A%22Commodities%22%7D%2C%7B%22title%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME%3AGE1!%22%2C%22d%22%3A%22Eurodollar%22%7D%2C%7B%22s%22%3A%22CBOT%3AZB1!%22%2C%22d%22%3A%22T-Bond%22%7D%2C%7B%22s%22%3A%22CBOT%3AUB1!%22%2C%22d%22%3A%22Ultra%20T-Bond%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBL1!%22%2C%22d%22%3A%22Euro%20Bund%22%7D%2C%7B%22s%22%3A%22EUREX%3AFBTP1!%22%2C%22d%22%3A%22Euro%20BTP%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBM1!%22%2C%22d%22%3A%22Euro%20BOBL%22%7D%5D%2C%22originalTitle%22%3A%22Bonds%22%7D%2C%7B%22title%22%3A%22Currencies%20%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%5D%2C%22utm_source%22%3A%22cypherblocksage.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22cypherblocksage.com%2Fuser%2Fmarket-charts%22%7D" title="market overview TradingView widget" lang="en" 
                    style={{
                      userSelect: "none",
                      boxSizing: "border-box",
                      display: "block",
                      height: "500px",
                      width: "100%",
                    }}
                    ></iframe>
                  </div>

                </div>

                <div className="col-md-6">
                  <div>
                    <p className="site-header pb-2">Using Live Chat to Enhance Your Investment</p>
                    <p className="">AmaniLightEquity is dedicated to providing excellent communication and personalized support to investors throughout the investment process. As part of this commitment, we have introduced a live chat feature that makes it easier for investors to connect with us <br /> This tool has proven to be incredibly successful, providing numerous benefits to our clients. With live chat, investors can get their questions answered quickly and easily, making the investment process much smoother.</p>
                    <div className="d-flex pb-3">
                      <div className='blue-text d-flex pt-2 pb-4 pe-2'>
                        < FontAwesomeIcon className='md-text' icon={faBuildingColumns}/>

                      </div>

                      <div className="pt-2 pe-2">
                        <img src={visaPic} alt="" width="40px" />
                      </div>

                      <div className="pt-2 pe-2">
                        <img src={masterCardPic} alt="" width="40px" />
                      </div>

                      <div className="pt-2 pe-2">
                        <img src={coinPic} alt="" width="30px" />
                      </div>

                    </div>
                    <Link className='site-inverse-btn px-5'>Open Live Account</Link>
                  </div>
                </div>

                <div className="col-md-6">
                  <video className="home-phone-chart-video"  autoPlay loop muted playsInline>
                    <source src={phoneChart} type="video/mp4" />
                  </video>
                </div>

                <div className="col-md-6">
                  <div>
                  <iframe 
                    scrolling="no" 
                    allowtransparency="true" 
                    frameborder="0" 
                    src="https://www.tradingview-widget.com/embed-widget/hotlists/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212M%22%2C%22exchange%22%3A%22US%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Afalse%2C%22showFloatingTooltip%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A600%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(42%2C%2046%2C%2057%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22utm_source%22%3A%22cypherblocksage.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22hotlists%22%2C%22page-uri%22%3A%22cypherblocksage.com%2Fuser%2Fmarket-charts%22%7D" title="hotlists TradingView widget" lang="en" 
                    style={{
                      userSelect: "none",
                      boxSizing: "border-box",
                      display: "block",
                      height: "600px",
                      width: "100%",
                    }}>

                  </iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section-container">
            <div className="light-background1 py-5">
              <div className="container-lg">
                <div className="text-center font-weight-700 site-header">
                  <p>Tradable Assets <br /> Invest in Currencies, CFD's, Cryptocurrencies, Forex e.t.c</p>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="home-crypto-banner">
                <div className="row">
                  <div className="col-md-5 ps-5">
                    <div className="home-crypto-banner-text-container">
                      <div>
                        <p className="home-crypto-banner-header font-bold">Crypto's Making A Move</p>
                        <p className="light-text sm-text pb-4">Bitcoin Ripping Higher – How much further can it kick? What can stop this momentum juggernaut? The Crypto market is gaining momentum and is worth watching closely.</p>
                        <div className="pb-4">
                          <Link className="site-inverse-btn px-5">Open Live Account</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>

    </div>
  )
}