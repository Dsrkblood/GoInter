/* eslint-disable react/prop-types */
import Icon from "./Icon";

export default function Contact({ icon }) {
	let content = [];

	for (const element in icon) {
		content.push(<Icon key={element} content={icon[element]} />);
	}

	return (
		<section id='top-section'>
			<div id='contact' className='container'>
				{content}
			</div>
		</section>
	);
}
