import Anime from '../../assets/Anime';
import { useEffect, useState, useRef } from 'react';

function Btns() {
	const pos = useRef([]);
	const btnRef = useRef(null);
	const [Index, setIndex] = useState(0);
	const [Scrolled, setScrolled] = useState(0);

	//섹션의 세로 위치값을 구하는 함수
	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		console.log(pos.current);
	};

	//스크롤 위치에 따라서 버튼 활성화 함수
	const activation = () => {
		const scroll = window.scrollY;
		const btns = btnRef.current.children;
		setScrolled(scroll);
		//pos.current에 등록된 각 섹션의 세로 위치값을 반복
		pos.current.map((pos, idx) => {
			//현재 스크롤된 거리값이 각 섹션의 위치값보다 같거나 크면
			//기존 버튼 모두 비활성화 시키고 해당 순번의 버튼만 활성화
			if (scroll >= pos) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			//window 객체의 경우 remove 이벤트 같이 걸어줘야함
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {
		console.log(Index);
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[Index],
			duration: 500,
		});
	}, [Index]);

	return (
		<ul className='scroll_navi' ref={btnRef}>
			<li
				className='on'
				onClick={() => {
					if (Index === 0) {
						if (Scrolled !== pos[0]) {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[0],
								duration: 500,
							});
						}
					} else {
						setIndex(0);
					}
				}}></li>
			<li
				onClick={() => {
					if (Index === 0) {
						if (Scrolled !== pos[1]) {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[1],
								duration: 500,
							});
						}
					} else {
						setIndex(1);
					}
				}}></li>
			<li
				onClick={() => {
					if (Index === 0) {
						if (Scrolled !== pos[2]) {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[2],
								duration: 500,
							});
						}
					} else {
						setIndex(2);
					}
				}}></li>
			<li
				onClick={() => {
					if (Index === 0) {
						if (Scrolled !== pos[3]) {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[3],
								duration: 500,
							});
						}
					} else {
						setIndex(3);
					}
				}}></li>
		</ul>
	);
}

export default Btns;
