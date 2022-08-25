import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Btns from './Btns';
import { useRef, useEffect, useState } from 'react';
import Anime from '../../assets/Anime';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [Index, setIndex] = useState(0);
	const [Scrolled, setScrolled] = useState(0);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
			<Btns
				setIndex={setIndex}
				Scrolled={Scrolled}
				pos={pos.current}
				Index={Index}
			/>
		</main>
	);
}

export default Main;
