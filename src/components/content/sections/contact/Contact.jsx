/* eslint-disable react/prop-types */
import Icon from "./Icon";

export default function Contact({ icon }) {
	let content = [];

	for (const pic in icon) {
		content.push(<Icon key={pic} content={icon[pic]} />);
	}

	return <div id="contact" className='container'>{content}</div>;
}
