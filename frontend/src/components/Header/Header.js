import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css";
function Header() {
	return (
		<header className="wrapper-header">
			<div className="container content-header">
				<div className="content-header-left">
					<div className="content-logo">
						<Link to="/" className="logo">
							BLOG | COURSE
						</Link>
					</div>
					<ul className="menu-header-left">
						<li title="trang chủ" className="item-header-left">
							<Link to="/" className="link-header-left">
								Trang chủ
							</Link>
						</li>
						<li title="blog" className="item-header-left">
							<Link to="/blog" className="link-header-left">
								Blog
							</Link>
						</li>
						<li title="khóa học" className="item-header-left">
							<Link to="/khoa-hoc" className="link-header-left">
								Khóa học
							</Link>
						</li>

					</ul>
				</div>
				<div className="content-header-right">
					<ul className="menu-header-right">
						<li title="tìm kiếm" className="item-header-right">
							<Link to="/tim-kiem" className="link-header-right">
								<i className="fa fa-search"></i>
							</Link>
						</li>
						<li className="item-header-right">
							<Link to="/dang-nhap" className="link-header-right">
								Đăng nhập
							</Link>
						</li>
						<li className="item-header-right button-register">
							<Link to="/dang-ky" className="link-register-header-right">
								Đăng ký
							</Link>
						</li>
					</ul>
				</div>
			</div>

		</header>
	)
}

export default Header
