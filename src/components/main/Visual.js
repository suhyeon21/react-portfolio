import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function Visual() {
	return (
		<>
			<figure id='visual' className='myScroll'>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
						renderBullet: function (index, className) {
							return (
								'<span class="' + className + '">' + (index + 1) + '</span>'
							);
						},
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className='mySwiper'>
					<SwiperSlide className='mySlide'>
						<img src={process.env.PUBLIC_URL + '/img/slide1.jpg'} alt='logo' />
						<h1>FUTURE CITY BUILDINGS</h1>
						<span>+ VIEW MORE</span>
					</SwiperSlide>
					<SwiperSlide className='mySlide'>
						<img src={process.env.PUBLIC_URL + '/img/slide2.jpg'} alt='logo' />
						<h1>MINIMAL HOME DESIGN</h1>
						<span>+ VIEW MORE</span>
					</SwiperSlide>
					<SwiperSlide className='mySlide'>
						<img src={process.env.PUBLIC_URL + '/img/slide3.jpg'} alt='logo' />
						<h1>HARMONY OF SHAPES</h1>
						<span>+ VIEW MORE</span>
					</SwiperSlide>
				</Swiper>
			</figure>
		</>
	);
}

export default Visual;
