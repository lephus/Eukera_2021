import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import "./Register.css";
function Register() {
	return (
		<>
			<Header></Header>
			<div className="wrapper-register">
				<div className="container">
					<div className="content-register">
						<h2 className="title-register">Đăng ký vào BLOG | COURSE</h2>
						<div className="form-groups">
							<label htmlFor="userName" className="form-label"> Email Address </label>
							<input className="form-input" type="text" id="userName" name="userName" placeholder="Hoang" />
						</div>
						<div className="form-groups">
							<label htmlFor="email" className="form-label"> Email Address </label>
							<input className="form-input" type="text" id="email" name="email" placeholder="abc@gmail.com" />
						</div>
						<div className="form-groups">
							<label htmlFor="password" className="form-label"> Mật khẩu </label>
							<input className="form-input" type="password" id="password" name="email" />
						</div>
						<div className="form-groups">
							<button className="bg-button btn-register w-100">Tạo tài khoản</button>
						</div>
						<hr className="divider"></hr>
						<div className="content-action-register">
							<button className="btn-register-facebook btn-action-register d-inline-block">
								<div className="btn-icon-register icon-register-facebook">
									<i className="fa fa-facebook-official" ></i>
								</div>
								<div className="text-register-facebook">
									Đăng ký bằng Facebook
								</div>
							</button>
							<button className="btn-register-google btn-action-register d-inline-block">
								<div className="btn-icon-register icon-register-google">
									<i className="fa fa-google-plus-square" ></i>
								</div>
								<div className="text-register-google">
									Đăng ký bằng Google
								</div>
							</button>

						</div>
						<div className="more-title-register">
							<p>Bạn đã có tài khoản trên BLOG | COURSE ? <Link to="/dang-nhap" className="text-more-register">Đăng nhập</Link> </p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Register
