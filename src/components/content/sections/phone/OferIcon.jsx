/* eslint-disable react/prop-types */
export default function OferIcon({ data }) {
	return (
		<div className='box'>
			<div className='icon-styled'>
				<img src={data.img} alt={data.src} />
			</div>
			<div className='media-body'>
				<h3>{data.title}</h3>
				<p>{data.description}</p>
			</div>
		</div>
	);
}
