/* eslint-disable react/prop-types */
export default function BrandPilar({ active, content }) {
	if (active) {
		return (
			<>
				<h1 className={active ? "active" : null}>
					{content.title.map((el, index) => {
						return <p key={index}>{el}</p>;
					})}

					<p className='small-text'>{content.description}</p>
				</h1>
			</>
		);
	}
}
