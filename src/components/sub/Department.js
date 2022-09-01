import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Department() {
	const path = process.env.PUBLIC_URL;
	const [Members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(path + '/DB/members.json').then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			<h1 className='title'>
				MEET <span>THE</span> TEAM
			</h1>
			<p>RESPONSIBLE FOR MAKING THE MAGIC HAPPEN</p>
			{Members.map((member, idx) => (
				<article key={idx}>
					<div className='inner'>
						<div className='picFrame'>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
							</div>
						</div>
						<div className='info'>
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</div>
						<div className='icons'>
							<ul>
								<li>
									<FontAwesomeIcon icon={faInstagram} className='icon' />
								</li>
								<li>
									<FontAwesomeIcon icon={faTwitter} className='icon' />
								</li>
								<li>
									<FontAwesomeIcon icon={faYoutube} className='icon' />
								</li>
							</ul>
						</div>
					</div>
				</article>
			))}
		</Layout>
	);
}

export default Department;
