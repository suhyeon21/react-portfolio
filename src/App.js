import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
//main
import Main from './components/main/Main';
import Content from './components/main/Content';
//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				{/* 메인페이지 전용 라우터  */}
				<Route exact path='/'>
					<Main />
				</Route>

				{/* 서브페이지 라우터 */}
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department'>
				<Department />
			</Route>
			<Route path='/community'>
				<Community />
			</Route>
			<Route path='/gallery'>
				<Gallery />
			</Route>
			<Route path='/youtube'>
				<Youtube />
			</Route>
			<Route path='/location'>
				<Location />
			</Route>
			<Route path='/members'>
				<Members />
			</Route>
			<Footer />
		</>
	);
}

export default App;
