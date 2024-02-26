/* eslint-disable react/prop-types */
export default function Icon({ data }) {
	return (
		<div className='box'>
			<div className='icon'>
				<i className={data.icon}></i>
			</div>
			<p>{data.title}</p>
		</div>
	);
}
