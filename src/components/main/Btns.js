function Btns({ setIndex }) {
	return (
		//버튼 클릭시 클릭한 순번의 위치값으로 스크롤 이동하도록 Anime로 모션동작처리

		<ul className='scroll_navi'>
			<li className='on' onClick={() => setIndex(0)}></li>
			<li onClick={() => setIndex(1)}></li>
			<li onClick={() => setIndex(2)}></li>
			<li onClick={() => setIndex(3)}></li>
		</ul>
	);
}

export default Btns;
