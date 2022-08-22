import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Masonry from 'react-masonry-component';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

function Gallery() {
	const frame = useRef(null);
	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Open, setOpen] = useState(false);
	//masonry 전환속도 옵션객체 설정
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	const masonryOptions = { transitionDuration: '0.5s' };

	const key = '5f93204b89f778b6700e782d390ca6ea';
	const method_interest = 'flickr.interestingness.getList';

	const num = 20;

	const url_interest = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;

	const getFlickr = async (url) => {
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});

		//masonry 박스정렬시간동안 기다린후 리스트 출력
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setEnableClick(true);
		}, 1000);
	};

	useEffect(() => getFlickr(url_interest), []);

	return (
		<>
			<Layout name={'Gallery'}>
				<button
					onClick={() => {
						if (!EnableClick) return;
						setLoading(true);
						frame.current.classList.remove('on');
						getFlickr(url_interest);
						setEnableClick(false);
					}}>
					Interest Gallery
				</button>
				{Loading && (
					<img
						className='loading'
						src={process.env.PUBLIC_URL + '/img/loading.gif'}
					/>
				)}

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{Items.map((pic, idx) => {
							return (
								<article
									key={idx}
									onClick={() => {
										setIndex(idx);
										setOpen(true);
									}}>
									<div className='inner'>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
												alt={pic.title}
											/>
										</div>
										<h2>{pic.title}</h2>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			{Open && (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
					/>
				</Popup>
			)}
		</>
	);
}

export default Gallery;
