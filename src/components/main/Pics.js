import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-component';

function Pics({ Scrolled, currentPos }) {
	const Pics = useSelector((store) => store.flickr.data);
	const position = Scrolled - currentPos || 0;

	return (
		<section id='pics' className='myScroll'>
			<h1>
				OVER 10 YEARS <br /> IN THE GAME
			</h1>
			<div className='wrap'>
				<div className='intro'>
					<h2>ABOUT US</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipising elit, sed do usmod
						tempor dunt ut labore et dolorie magna aliqua. Ut enim ad minim
						veniam, quis rud xercitation lamco laboris nisi ut aliquip ex ea do
						sit amet in.
					</p>
				</div>
				<div className='intro'>
					<h2>OUR GOAL</h2>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit. Esse
						cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat non.
					</p>
				</div>
				<div className='intro'>
					<h2>AWARDS</h2>
					<span>
						The Design Awards 2019
						<br /> Star / Winner Award
						<br /> Creative Awards 2018
						<br /> Best Design of Year
					</span>
				</div>
			</div>
			<ul>
				<Masonry elementType={'div'}>
					{Pics.map((pic, idx) => {
						if (idx >= 12) return;
						return (
							<li key={pic.id}>
								<img
									src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
									alt={pic.title}
								/>
							</li>
						);
					})}
				</Masonry>
			</ul>
		</section>
	);
}

export default Pics;
