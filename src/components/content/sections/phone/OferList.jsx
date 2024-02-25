/* eslint-disable react/prop-types */
export default function OferList({ data }) {
	return (
		<li>
			<p className='strong'>{data[0]}</p>
			<p className='info'>{data[1]}</p>
		</li>
	);
}
