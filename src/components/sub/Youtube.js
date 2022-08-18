import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
	const line = useRef(null);
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyARA74pOQDMfjJhRvlEL6vBbvht5l5Xh4Q';
		const playlist = 'PLUTOYlZjKt_YfIUHaMMypoLWiKGHqjonq';
		const num = 4;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	});

	return (
		<Layout name={'Youtube'}>
			<div className='wrap'>
				<h1 className='title'>
					SELECTED
					<br />
					WORK
				</h1>
				{Vids.map((vid, idx) => {
					return (
						<article key={idx}>
							<h2>{vid.snippet.title}</h2>

							<div className='pic'>
								<img
									src={vid.snippet.thumbnails.standard.url}
									alt={vid.title}
								/>
								<FontAwesomeIcon icon={faYoutube} ref={line} />
							</div>
							<div className='txt'>
								<span>{vid.snippet.publishedAt.split('T')[0]}</span>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}
export default Youtube;
