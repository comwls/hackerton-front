import React from 'react';

const SignUp = ({ user, submitted, registering, onChange, onSubmit }) => {
    return (
        <div id="signUp">
            <div className="signup-wrap">
                <h1 className="dj-logo">회원가입</h1>
                <div className="signup-form-wrap">
                    <form name="form" onSubmit={onSubmit}>
                        <span className="input-area">
                            <label htmlFor="email">E-MAIL</label>
                            <input
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={onChange}
                                className={
                                    submitted && !user.email
                                        ? ' is-invalid'
                                        : ''
                                }
                            />
                        </span>
                        {submitted && !user.email && (
                            <span className="error-msg">
                                이메일은 필수입니다.
                            </span>
                        )}
                        <span className="input-area confirm">
                            <label htmlFor="password">PW</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={onChange}
                                className={
                                    submitted && !user.password
                                        ? ' is-invalid'
                                        : ''
                                }
                            />
                        </span>
                        {submitted && !user.password && (
                            <span className="error-msg">
                                비밀번호는 필수입니다.
                            </span>
                        )}
                        <span className="input-area">
                            <label htmlFor="name">NAME</label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={onChange}
                                className={
                                    submitted && !user.name ? ' is-invalid' : ''
                                }
                            />
                        </span>
                        {submitted && !user.name && (
                            <span className="error-msg">
                                이름은 필수입니다.
                            </span>
                        )}
                        <button
                            type="submit"
                            className="btn-signup"
                            onClick={onSubmit}
                        >
                            {registering && (
                                <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            회원가입하기
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
