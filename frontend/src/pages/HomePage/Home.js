import React from 'react'
import Header from '../../components/Header/Header'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerOne from "../../../src/asset/banner-home-one.jpg"
import bannerTwo from "../../../src/asset/banner-home-two.jpg"
import "./Home.css"

function Home() {

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 1000,
	};

	return (
		<div>
			<Header />
			<div className="wrapper-banner">
				<div className="container">
					<div className="content-banner">
						<Slider {...settings}>
							<div className="wrapper-banner-image">
								<img src={bannerOne} alt="banner" />
							</div>
							<div className="wrapper-banner-image">
								<img src={bannerTwo} alt="banner" />
							</div>
						</Slider>
					</div>
					<div className="wrapper-home-main">

					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
