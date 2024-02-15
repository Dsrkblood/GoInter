/* eslint-disable react/prop-types */
export default function LinkModal({ handleOpen, changeContent, content }) {
	return (
		<a
			href='#top'
			onClick={() => {
				handleOpen();
				changeContent(content);
			}}>
			{content.title}
		</a>
	);
}
