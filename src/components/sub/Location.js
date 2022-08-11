import Layout from '../common/Layout';
import { useEffect, useRef } from 'react';

function Location() {
	const { kakao } = window;
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};
	// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
	useEffect(() => {
		new kakao.maps.Map(container.current, option);
	}, []);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
