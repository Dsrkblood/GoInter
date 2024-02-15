import "./App.css";
import Header from "./components/headerComponents/Header";
import Content from "./components/content/Content";
import Footer from "./components/content/footer/Footer";
import { useState } from "react";

function App() {
	const [content, setContent] = useState("");
	function handleChangeContent(value) {
		setContent(value);
	}
	console.log(content);

	return (
		<>
			<Header changeContent={handleChangeContent} />
			<Content />
			<Footer />
		</>
	);
}

export default App;
