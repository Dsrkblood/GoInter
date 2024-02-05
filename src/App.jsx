import "./App.css";
import Navbar from "./components/navComponents/Navbar";
import ParticlesAnimation from "./components/ParticlesAnimation";
import InternetPromo from "./components/info/InternetPromo";

function App() {
	return (
		<>
			<ParticlesAnimation />
			<Navbar />
			<InternetPromo />
			<div id='motto'>Głupotki</div>
		</>
	);
}

export default App;
