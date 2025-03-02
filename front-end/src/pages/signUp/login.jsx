
import "../../css/signUp/signUp.css"
import "../../css/signUp/login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useState, useContext, useEffect} from "react";
import { useForm } from 'react-hook-form';
import FloatingAlert from "../../component/alert";
import AuthContext from "../../context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";
import loginPic from '../../img/login.png'

export const Login = () =>{
  const {
    email, 
    setEmail,
    password,
    setPassword,
    messages,
    onCaptchaChange,
    alertVisible,
    setAlertVisible,
    RequestOTP,
    showAmimaton, 
    disablebutton, 
    setDisablebutton,
    isSuccess,
    setPage,
    setActivateCaptcha,
    errorMessages, 
    setErrorMessage,

  }= useContext(AuthContext)

  const[ showPassword, setShowPassword] = useState(false)

  const toogleShowPassword = () =>{
    setShowPassword(!showPassword)
  }

  setPage('otp-page')


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data, e) =>{
    if (isValid){
      console.log(data)

      RequestOTP(e)
    }else{
      console.log('error')
      setDisablebutton(false)
    }
  }
  useEffect(() =>{
    setActivateCaptcha(true)
  }, [])

  


  return(
    <div className="sign-up-bg">
      <section className="container-lg">
        <div>
          <FloatingAlert
            message={messages}
            isVisible={alertVisible}
            onClose={() => setAlertVisible(false)}
            successs={isSuccess}
          />
        </div>
        <div className=''>
          <div>
            <div className="row">
              <div className="col-xl-1"></div>
              <div className="col-xl-10">
                <div className="login-page">
                  <div className="login-box">
                    {showAmimaton &&
                      <div className="sign-up-animation"></div>            
                    }

                    <div className="login-box-margin">
                      <div className="row">
                        <div className="col-md-4 ">
                          <div className="sign-up-texts">
                            <div class="d-none d-md-block ">
                              {/* <div>
                                <img src="" alt="" />
                              </div>
                              <div className="">
                                <div className="">
                                  <h1><span className="primary-txt">Login</span></h1>
                                  <p>Login right away and start investing</p>
                                </div>
                              </div>   */}

                              <img src={loginPic} alt="" width='130%'/>
                            </div>
                          </div>


                        </div>

                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-10">
                              <div>
                                <div className="mb-5 pt-3  text-center">
                                  <h1><span className="primary-txt">Login</span></h1>
                                  <p>Login right away and start investing</p>
                                </div>
                                {errorMessages &&
                                  <div className="alert-danger p-3 mb-3">
                                    <p><i class="bi bi-exclamation-circle pe-3"></i> {errorMessages}</p>
                                  </div>
                                }


                                <div>
                                  <form onSubmit={handleSubmit(onSubmit)}>
                                      <div className="row g-3">
                                        <div className="col-12">
                                          <label className="form-label">Email</label>
                                          <input type="email" className={` ${errors.email ? 'error-input' : ''} styled-input`} {...register('email', {required: true})}  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g johnDoe23@gmail.com" />
                                          {errors.email && <span style={{color: 'red'}}>This Feild is required</span>}
                                        </div>

                                        <div className="col-12">
                                          <label className="form-label">Password</label>
                                          <div className="password-container">
                                            <input type={`${showPassword ? "text": 'password'}`}  className={`styled-input password-input ${errors.password ? 'error-input' : ''}`} {...register('password', {required: true})}  value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" />
                                            <span className="password-icon">
                                              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={toogleShowPassword}/>
                                            </span>
                                          </div>
                                          {errors.password && <span style={{color: 'red'}}>This Feild is required</span>}
                                        </div>

                                        <div className="col-12">
                                          <div>
                                            <ReCAPTCHA sitekey="6LdcY7kqAAAAAD-uqrX0lrpUIabQjuWpWFosd2y_" onChange={onCaptchaChange}/>
                                          </div>                      
                                        </div>
                                      </div>
                                      <div className="col-12 mt-4">
                                        <button disabled={disablebutton} type="submit " className={`${disablebutton ? 'disable-btn' : ''}sign-up-btn width-100`}>Login</button>

                                        <div className="d-block d-sm-flex justify-content-between py-2">
                                          <p className="">New on our platform? <Link to='/register'>Sign up</Link> </p>
                                          <p className=""><Link to='/forgot-password'>Forgot password?</Link></p>

                                        </div>
                                        
                                      </div>


                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xl-1"></div>
            </div>

          </div>

        </div>
      </section>
    
    </div> 
  )
}