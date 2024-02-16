/* eslint-disable react/prop-types */
export default function Icon({ content }) {
	return (
		<section className='contact-box'>
			<i className={content.graphics}></i>
			<div className={`container ${content.row ? "row" : null}`}>
				<p className='header'>{content.headerFirst}</p>
				<p>{content.descriptionFirst}</p>
				<p className='header'>{content.headerSecond}</p>
				<p>{content.descriptionSecond}</p>

				{content.email && (
					<>
						<p>E-mail:</p>
						<a href={`mailto:${content.email}`}>{content.email}</a>
					</>
				)}
			</div>
		</section>
	);
}
