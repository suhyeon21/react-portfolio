import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Location() {
	const { kakao } = window;
	const container = useRef(null);
	// const [Info] = useState(info);

	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

	const marker = new kakao.maps.Marker({
		position: option.center,
	});

	//컴포넌트 마운트시 window전역객체에 리사이즈 이벤트 연결
	window.addEventListener('resize', () => {
		option.setCenter(new kakao.maps.LatLng(33.450701, 126.570667));
	});
	// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
	useEffect(() => {
		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
	}, []);

	return (
		<Layout name={'Location'}>
			<div className='top'>
				<div className='wrap-con'>
					<h2 className='contact'>CONTACT OUR HEAD OFFICE</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						usmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud xercitation lamco laboris.
					</p>
					<ul className='sns'>
						<li>
							<FontAwesomeIcon icon={faFacebook} />
						</li>
						<li>
							<FontAwesomeIcon icon={faInstagram} />
						</li>
						<li>
							<FontAwesomeIcon icon={faTwitter} />
						</li>
					</ul>
				</div>
				<div className='wrap-inp'>
					<div className='input-bottom'>
						<input type='text' placeholder='Your Name' className='name' />
						<input type='email' placeholder='Your Email' className='email' />
						<input type='text' placeholder='Your Subject' className='subject' />
						<input type='text' placeholder='Your Message' className='message' />
					</div>
					<button>+ SEND</button>
				</div>
			</div>
			<div id='map' ref={container}></div>
			<div className='info'>
				<span>Tel: +(123) 456 7890 </span>
				<br />
				<span>brok@qodeinteractive.com</span>
				<br />
				<span>Oslo, Kampengata 24</span>
			</div>
		</Layout>
	);
}

export default Location;
