import Layout from '../common/Layout';
import { useEffect, useRef } from 'react';

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
				<h1>GET TO US</h1>
				<span>Lorem ipsum dolor sit amet consectetur</span>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum
					unde iusto libero laborum.
					<br /> Harum possimus cum eaque est, esse eligendi! Sint nemo
					exercitationem earum, <br />
					itaque ea alias dolorum eos dolores. Iste non consectetur veritatis
					atque nesciunt.
				</p>
			</div>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
