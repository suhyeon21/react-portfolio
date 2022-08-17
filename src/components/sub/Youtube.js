import Layout from '../common/Layout';

import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyCa4kJGxnh2YRcoywf_v-37m9DRJY75_Mw';
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
