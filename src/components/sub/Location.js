import Layout from '../common/Layout';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Location() {
	const { kakao } = window;
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

	const marker = new kakao.maps.Marker({
		position: option.center,
	});
	// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
	useEffect(() => {
		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
	}, []);

	return (
		<Layout name={'Location'}>
			<div className='title'>
				<span>Contact form</span>
				<h1>GET TO US</h1>
				<span>Lorem ipsum dolor sit amet consectetur</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do se
					eiusmod temps esto incididun in ut labore et sa dolore si magna
					aliqua. Ut enim ad minim destro veniam, inant quis nostrud e exerci de
					tation ullamco laboris nisi ut sen aliquip ex ea commodo insa velit ut
					consequat duis aute irure do se dolor in reprehenderit in
				</p>
			</div>
			<div id='map' ref={container}></div>

			<div className='bottom'>
				<div className='wrap-con'>
					<span>Get in touch</span>
					<h2 className='contact'>CONTACT</h2>
					<input type='text' placeholder='Message' className='message' />
					<div className='input-bottom'>
						<input type='text' placeholder='Name' className='name' />
						<input type='email' placeholder='E-mail' className='email' />
					</div>
					<button>Submit</button>
				</div>

				<div className='wrap'>
					<span>Discover more</span>
					<h2 className='reservation'>RESERVATIONS</h2>
					<div className='info'>
						<p>673 12 Constitution Lane Massillion, 05765 New York</p>
						<p>781-562-9355, 781-727-6090</p>
						<p>musea@qodeinteractive.com</p>
					</div>
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
			</div>
		</Layout>
	);
}

export default Location;
