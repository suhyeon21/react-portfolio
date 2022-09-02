import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function News() {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.members.data);
	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'EXTENSIONS OF MEDIA',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				title: 'THE 5TH WORLD LIBRARY',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				title: 'INTERNATIONAL WORLD',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				title: 'FINDING A PATH IN ART',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				title: 'DESIGNING SPACES',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
		];

		const data = localStorage.getItem('post');
		console.log(data);

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<section id='news' className='myScroll'>
			<h1>
				OUR TEAM <br /> OF ARCHITECTS
			</h1>
			<ul>
				{Members.map((member, idx) => {
					if (idx >= 4) return;
					return (
						<li key={member.name}>
							<img src={`${path}/img/${member.pic}`} alt={member.name} />
							<p>{member.name}</p>
							<span>{member.position}</span>
						</li>
					);
				})}
			</ul>

			<h1>
				LATEST NEWS
				<br /> AND UPDATES
			</h1>
			{Posts.map((post, idx) => {
				if (idx >= 3) return;

				return (
					<article key={idx}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</article>
				);
			})}
		</section>
	);
}

export default News;
