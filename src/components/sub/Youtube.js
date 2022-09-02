import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Youtube() {
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	const Vids = useSelector((store) => store.youtube.data);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((vid, idx) => (
					<article key={vid.id}>
						<div className='left'>
							<h2>
								{vid.snippet.title.length > 50
									? vid.snippet.title.substr(0, 50) + '...'
									: vid.snippet.title}
							</h2>

							<div className='txt'>
								<p>
									{vid.snippet.description.length > 300
										? vid.snippet.description.substr(0, 300) + '...'
										: vid.snippet.description}
								</p>
								<span>{vid.snippet.publishedAt.split('T')[0]}</span>
							</div>
						</div>

						<div className='pic'>
							<img src={vid.snippet.thumbnails.standard.url} alt={vid.title} />
							<FontAwesomeIcon
								icon={faYoutube}
								onClick={() => {
									setIndex(idx);
									pop.current.open();
								}}
							/>
						</div>
					</article>
				))}
			</Layout>

			<Popup ref={pop}>
				{Vids.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
			</Popup>
		</>
	);
}

export default Youtube;
