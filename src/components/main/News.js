import { useState, useEffect } from 'react';

function News() {
	const getLocalData = () => {
		const dummyPosts = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];

		const data = localStorage.getItem('post');
		console.log(data);

		if (data) {
			return JSON.parse(data);
		} else {
			console.log('더미 데이터 담기');
			return dummyPosts;
		}
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []);

	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	return (
		<section id='news'>
			<h1>News</h1>
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
