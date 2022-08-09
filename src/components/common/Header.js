import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
	return (
		<header className={type}>
			{/* 로고 */}
			<Link to='/'>
				<h1>
					<div>로고</div>
				</h1>
			</Link>
			<nav>
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
		</header>
	);
}

export default Header;
