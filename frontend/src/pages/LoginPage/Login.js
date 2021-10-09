import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import "./Login.css"

function Login() {
	return (
		<>
			<Header />
			<div className="wrapper-login">
				<div className="container">
					<div className="content-login">
						<h2 className="title-login">Đăng nhập vào BLOG | COURSE</h2>
						<div className="form-groups">
							<label htmlFor="email" className="form-label"> Email Address </label>
							<input className="form-input" type="text" id="email" name="email" placeholder="abc@gmail.com" />
						</div>
						<div className="form-groups">
							<div className="form-groups-sub">
								<label htmlFor="password" className="form-label"> Mật khẩu </label>
								<p>Quên mật khẩu</p>
							</div>
							<input className="form-input" type="password" id="password" name="email" />
						</div>

						<div className="form-groups">
							<button className="bg-button btn-login w-100">Đăng nhập</button>
						</div>
						<hr className="divider"></hr>
						<div className="content-action-login">
							<button className="btn-login-facebook btn-action-login d-inline-block">
								<div className="btn-icon-login icon-login-facebook">
									<i className="fa fa-facebook-official" ></i>
								</div>
								<div className="text-login-facebook">
									Đăng ký bằng Facebook
								</div>
							</button>
							<button className="btn-login-google btn-action-login d-inline-block">
								<div className="btn-icon-login icon-login-google">
									<i className="fa fa-google-plus-square" ></i>
								</div>
								<div className="text-login-google">
									Đăng ký bằng Google
								</div>
							</button>
						</div>
						<div className="more-title-login">
							<p>Bạn chưa có tài khoản trên BLOG | COURSE ? <Link to="/dang-ky" className="text-more-login">Đăng ký</Link> </p>
						</div>
					</div>


				</div>
			</div>
			<Footer />
		</>
	)
}

export default Login
