import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Menu from './Menu';

function Header({ type }) {
	const menu = useRef(null);
	const active = { color: '#000' };
	return (
		<header className={type}>
			<h1>
				<Link to='/'>
					<img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo' />
				</Link>
			</h1>
			<nav id='webGnb'>
				<ul id='gnb'>
					<li>
						<NavLink to='/department'>DEPARTMENT</NavLink>
					</li>
					<li>
						<NavLink to='/community'>COMMUNITY</NavLink>
					</li>
					<li>
						<NavLink to='/gallery'>GALLERY</NavLink>
					</li>
					<li>
						<NavLink to='/youtube'>YOUTUBE</NavLink>
					</li>
					<li>
						<NavLink to='/location'>LOCATION</NavLink>
					</li>
					<li>
						<NavLink to='/members'>MEMBERS</NavLink>
					</li>
				</ul>
			</nav>

			{/* 토글버튼 클릭시 참조된 토글함수 호출 */}
			<FontAwesomeIcon
				icon={faBars}
				className='bar'
				onClick={() => menu.current.toggle()}
			/>
			<Menu ref={menu} />
		</header>
	);
}

export default Header;
