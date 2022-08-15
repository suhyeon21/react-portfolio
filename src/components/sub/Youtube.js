import Layout from '../common/Layout';

import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyB9zeQFs7g9K4g_p4oCeqToiPG81AmLFhk';
		const playlist = 'PLUTOYlZjKt_ZJJO4HwADJIalRw28uqXVe';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	});

	return (
		<Layout name={'Youtube'}>
			{Vids.map((vid, idx) => {
				return (
					<article key={idx}>
						<h2>
							{vid.snippet.title.length > 50
								? vid.snippet.title.substr(0, 30) + '...'
								: vid.snippet.title}
						</h2>
						<div className='txt'>
							<span>{vid.snippet.publishedAt.split('T')[0]}</span>
						</div>
						<div className='pic'>
							<img src={vid.snippet.thumbnails.standard.url} alt={vid.title} />
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
export default Youtube;
