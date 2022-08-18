import { Link, NavLink } from 'react-router-dom';

function Header({ type }) {
	return (
		<header className={type}>
			<h1>
				<Link to='/'>
					<img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo' />
				</Link>
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
				<ul id='sign'>
					<li>SIGN IN</li>
					<li>SIGN UP</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
