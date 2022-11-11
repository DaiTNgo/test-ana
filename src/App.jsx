import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('G-3YZCG8VTGG');
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
	const [name, setName] = useState('');

	const handleClick = () => {
		ReactGA.event({
			user_namee: name,
		});
	};

	return (
		<div>
			<h1>{name}</h1>
			<input
				className='input-3'
				type='text'
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button onClick={handleClick}>Submit</button>
		</div>
	);
}

export default App;
