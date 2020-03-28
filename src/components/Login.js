import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const Login = ({
    submitted,
    email,
    password,
    loggingIn,
    onChange,
    onSubmit,
}) => {
    return (
        <div id="login">
            <div className="login-wrap">
                <h1 className="dj-logo">로그인</h1>
                <div className="login-form-wrap">
                    <form name="form" onSubmit={onSubmit}>
                        <span className="input-area">
                            <label htmlFor="email"> E-MAIL </label>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={onChange}
                                className={
                                    submitted && !email ? ' is-invalid' : ''
                                }
                            />
                        </span>
                        {submitted && !email && (
                            <span className="error-msg">
                                이메일은 필수입니다.
                            </span>
                        )}
                        <span className="input-area">
                            <label htmlFor="password"> PW </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                className={
                                    submitted && !password ? ' is-invalid' : ''
                                }
                            />
                        </span>
                        {submitted && !password && (
                            <span className="error-msg">
                                비밀번호는 필수입니다.
                            </span>
                        )}
                        <button
                            className="btn-login"
                            type="button"
                            onClick={onSubmit}
                        >
                            {loggingIn && (
                                <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            로그인
                        </button>
                    </form>
                    <div className="sns-login">
                    <GoogleLogin
                            clientId="1055029759864-87bu77ntpbt73r457aagbscloi35sdai.apps.googleusercontent.com"
                            buttonText="Google Login"
                            onSuccess={(res)=>{
                                console.log(res);
                            }}
                            onFailure={()=>{

                            }}
                            cookiePolicy={'single_host_origin'} />   
                        <button> Kakao 로그인 </button>
                        <button> Naver 로그인 </button>
                    </div>
                </div>
                <nav className="menu">
                    <Link to="/signup"> 회원가입 </Link>
                    <Link to="#"> 아이디 찾기 </Link>
                    <Link to="#"> 비밀번호 찾기 </Link>
                </nav>
            </div>
        </div>
    );
};

export default Login;
