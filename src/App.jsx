import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('G-1GN712E90M');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Hello Vite + React!</p>
				<p>
					<button type='button' onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'>
						Learn React
					</a>
					{' | '}
					<a
						className='App-link'
						href='https://vitejs.dev/guide/features.html'
						target='_blank'
						rel='noopener noreferrer'>
						Vite Docs
					</a>
				</p>
			</header>
			<A />
			<button>Click Button 1</button>
			<button>Click Button 2</button>
			<button>Click Button 3</button>
			<button>Click Button 4</button>
		</div>
	);
}

function A() {
	useEffect(() => {
		ReactGA.event({
			category: 'User',
			action: 'Created an Account',
		});
	}, []);

	return <h1>hello</h1>;
}

export default App;
