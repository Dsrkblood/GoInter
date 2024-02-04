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
					<p>internet</p>
					<p>na</p>
					<p>każdą</p>
					<p>kieszeń</p>
				</div>
				<div className='social'>
					<p className='social-heading'>media</p>
					<div className='social-icons'>
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
			</div>
		</>
	);
}

export default App;
