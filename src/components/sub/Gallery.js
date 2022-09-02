import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Masonry from 'react-masonry-component';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlickr } from '../../redux/flickrSlice';
import { useEffect, useState, useRef } from 'react';

function Gallery() {
	const dispatch = useDispatch();
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	//store에 있는 flickr데이터를 가져옴 (처음 사이클에서는 빈배열  가져옴)
	const Pics = useSelector((store) => store.flickr.data);

	const [Index, setIndex] = useState(0);

	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	const masonryOptions = { transitionDuration: '0.5s' };
	const num = 12;
	const user = '196184841@N06';
	const [Opt, setOpt] = useState({ type: 'user', user: user });

	// const getFlickr = async (opt) => {
	// 	const key = '5f93204b89f778b6700e782d390ca6ea';
	// 	const method_interest = 'flickr.interestingness.getList';
	// 	const method_user = 'flickr.people.getPhotos';
	// 	const method_search = 'flickr.photos.search';
	// 	let url = '';
	// 	if (opt.type === 'interest') {
	// 		url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
	// 	}
	// 	if (opt.type === 'user') {
	// 		url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
	// 	}
	// 	if (opt.type === 'search') {
	// 		url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tag}`;
	// 	}

	// 	await axios.get(url).then((json) => {
	// 		console.log(json.data.photos.photo);
	// 		if (json.data.photos.photo.length === 0)
	// 			return alert('해당 검색어의 결과값이 없습니다.');
	// 		setItems(json.data.photos.photo);
	// 	});

	// 	setTimeout(() => {
	// 		frame.current.classList.add('on');
	// 		setLoading(false);
	// 		setEnableClick(true);
	// 	}, 1000);
	// };

	//interest요청 함수
	const showInterest = () => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'interest' });
		setEnableClick(false);
	};

	//search요청 함수
	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요');
		if (!EnableClick) return;
		setEnableClick(false);
		setLoading(true);
		frame.current.classList.remove('on');
		//Opt값 변경 (search)
		setOpt({ type: 'search', tag: result });
		input.current.value = '';
	};

	//user요청 함수
	const showUser = (e) => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		//Opt값 변경 (user)
		setOpt({ type: 'user', user: e.target.getAttribute('user') });
		setEnableClick(false);
	};
	//데이터가 로딩완료되면 로딩바 제거하고 frame출력하는 함수
	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => setEnableClick(true), 600);
		}, 1000);
	};

	//Opt값이 변경될떄마다 dispath로 변경된 해당 Opt값을 Flickr_start액션객체에 담아서 saga에 전달
	useEffect(() => {
		dispatch(fetchFlickr(Opt));
	}, [Opt]);

	//flickr데이터가 변경될때마다 (새로운데이터 요청을 해서 해당 요청이 완료될때마다) 로딩제거함수 호출
	useEffect(endLoading, [Pics]);

	return (
		<>
			<Layout name={'Gallery'}>
				{/* <button user={user} onClick={showUser}>
					Projects
				</button>
				<button onClick={showInterest}>Interest</button> */}
				<div className='searchBox'>
					<input
						type='text'
						ref={input}
						onKeyUp={(e) => {
							if (e.key === 'Enter') showSearch();
						}}
					/>
					<button onClick={showSearch}>search</button>
				</div>

				{Loading && (
					<img
						className='loading'
						src={process.env.PUBLIC_URL + '/img/loading.gif'}
					/>
				)}
				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{Pics.map((pic, idx) => {
							return (
								<article key={idx}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}>
											<img
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
												alt={pic.title}
											/>
										</div>

										{/* <div className='profile'>
											<img
												src={`http://farm${pic.farm}.staticflickr.com/${pic.server}/buddyicons/${pic.owner}.jpg`}
												alt={pic.owner}
												onError={(e) => {
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													);
												}}
											/>
											<span user={pic.owner} onClick={showUser}>
												{pic.owner}
											</span>
										</div> */}
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>
			{/* <Popup ref={pop}>
				{Pics.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`}
						alt={Pics[Index].title}
					/>
				)}
			</Popup> */}
		</>
	);
}

export default Gallery;
