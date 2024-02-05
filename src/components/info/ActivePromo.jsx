/* eslint-disable react/prop-types */
export default function ActivePromo({
	active,
	content,
	smallContent,
	...props
}) {
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
