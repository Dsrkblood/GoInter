import "./App.css";
import Navbar from "./components/Navbar";
import ParticlesAnimation from "./components/ParticlesAnimation";
import Motto from "./components/Motto";

function App() {
	return (
		<>
			<div id='hero-bg'>
				<ParticlesAnimation />
			</div>
			<Navbar />
			<Motto />
		</>
	);
}

export default App;
