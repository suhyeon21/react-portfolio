import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';
import { useRef, useEffect } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);

	const getPos = () => {
		pos.current = [];
		const secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		console.log(pos.current);
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);

		return () => {
			//window 객체의 경우 remove 이벤트 같이 걸어줘야함
			window.removeEventListener('resize', getPos);
		};
	}, []);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
			<Btns />
		</main>
	);
}

export default Main;
