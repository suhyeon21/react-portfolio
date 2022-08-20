import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState([]);

	//글 저장 함수
	const createPost = () => {
		console.log('title', input.current.value);
		console.log('content', textarea.current.value);
		setPosts([
			...Posts,
			{ title: input.current.value, content: textarea.current.value },
		]);
	};

	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea
					cols='30'
					rows='3'
					placeholder='본문을 입력하세요'
					ref={textarea}></textarea>
				<br />
				<button>CANCEL</button>
				<button onClick={createPost}>WRITE</button>
			</div>
			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
