import Particles from "react-tsparticles";
import "./App.css";
import Navbar from "./components/Navbar";
import ParticlesAnimation from "./components/ParticlesAnimation";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<div id='hero-bg'>
				<ParticlesAnimation />
			</div>

			<div className='info'>
				<div className='mott-text'>
					<span>internet</span>
					<span>na</span>
					<span>każdą</span>
					<span>kieszeń</span>
				</div>
				<div className='social'>
					<span>media</span>
					<a href='#'>
						<i className='fa-brands fa-facebook-f'></i>
					</a>
					<a href='#'>
						<i className='fa-brands fa-linkedin-in'></i>
					</a>
					<a href='#'>
						<i className='fa-brands fa-x-twitter'></i>
					</a>
				</div>
			</div>
		</>
	);
}

export default App;
