/* eslint-disable react/prop-types */
export default function BrandPilar({ active, content, smallContent }) {
	if (active) {
		return (
			<h1 className={active ? "active" : null}>
				{content.map((el, index) => {
					return <p key={index}>{el}</p>;
				})}
				<p className='small-text'>
					{smallContent.first}
					<br />
					{smallContent.seccond}
				</p>
			</h1>
		);
	}
}
