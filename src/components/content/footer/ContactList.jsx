/* eslint-disable react/prop-types */
export default function ContactList({ classes, title, data }) {
	return (
		<div className={classes}>
			<h4>{title}</h4>
			<ul>
				{data.list.map((el, index) => (
					<li key={index}>
						<a href='#'>
							{" "}
							{">"} {el}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
