import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			{/* 로고 */}
			<h1>
				<div>로고</div>
			</h1>
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
