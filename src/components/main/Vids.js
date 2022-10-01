import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Vids() {
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	const youtube = useSelector((store) => store.youtube.data);

	return (
		<>
			{/* <div className='wrap'>
				<img src={process.env.PUBLIC_URL + '/img/figure1.png'} alt='logo' />{' '}
				<img src={process.env.PUBLIC_URL + '/img/figure2.png'} alt='logo' />{' '}
				<img src={process.env.PUBLIC_URL + '/img/figure3.png'} alt='logo' />{' '}
				<img src={process.env.PUBLIC_URL + '/img/figure4.png'} alt='logo' />{' '}
				<img src={process.env.PUBLIC_URL + '/img/figure5.png'} alt='logo' />
			</div> */}

			<section id='vids' className='myScroll'>
				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					autoplay={{ delay: 2000, disableOnInteraction: true }}
					pagination={{ clickable: true }}
					navigation={true}
					spaceBetween={50}
					loop={true}
					slidesPerView={3}
					centeredSlides={true}>
					{youtube.map((vid, idx) => {
						return (
							<SwiperSlide key={vid.id}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={vid.snippet.thumbnails.standard.url}
											alt={vid.snippet.title}
										/>
										<FontAwesomeIcon
											icon={faYoutube}
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}
										/>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>

			<Popup ref={pop}>
				{youtube.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${youtube[Index].snippet.resourceId.videoId}`}
						frameBorder='0'
						allowFullScreen></iframe>
				)}
			</Popup>
		</>
	);
}

export default Vids;
