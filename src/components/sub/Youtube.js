import Layout from '../common/Layout';
import Popup from '../common/Popup';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
	const line = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyCa4kJGxnh2YRcoywf_v-37m9DRJY75_Mw';
		const playlist = 'PLUTOYlZjKt_YfIUHaMMypoLWiKGHqjonq';
		const num = 4;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);

	useEffect(() => {
		console.log(line);
	}, [line]);

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='wrap'>
					<h1 className='title'>
						SELECTED
						<br />
						WORK
					</h1>

					{Vids.map((vid, idx) => (
						<article key={vid.id}>
							<h2>{vid.snippet.title}</h2>

							<div className='pic'>
								<img
									src={vid.snippet.thumbnails.standard.url}
									alt={vid.title}
								/>
								<FontAwesomeIcon
									icon={faYoutube}
									ref={line}
									onClick={() => {
										setOpen(true);
										setIndex(idx);
									}}
								/>
							</div>
							<div className='txt'>
								<span>{vid.snippet.publishedAt.split('T')[0]}</span>
							</div>
						</article>
					))}
				</div>
			</Layout>
			{Open && (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Popup>
			)}
		</>
	);
}
export default Youtube;
