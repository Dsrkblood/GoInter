export default function OtherPilar({ content }) {
	return (
		<>
			<div className='top-section'>
				<div className='section-description'>
					<h1 className='active'>{content.header.title}</h1>
				</div>
			</div>
			<div className='bottom-section'> {`start > ${content.title}`}</div>
		</>
	);
}
