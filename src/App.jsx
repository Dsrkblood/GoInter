import "./App.css";
import Header from "./components/headerComponents/Header";
import Content from "./components/content/Content";
import Footer from "./components/content/footer/Footer";
import { useState } from "react";
import { CONTENT } from "./data";

function App() {
	const [content, setContent] = useState(CONTENT.start);
	function handleChangeContent(value) {
		setContent(value);
	}

	return (
		<>
			<Header changeContent={handleChangeContent} content={content} />
			<Content />
			<Footer />
		</>
	);
}

export default App;
