/* eslint-disable react/prop-types */
export default function ContactList({ classes, title, data, changeContent }) {
	return (
		<div className={classes}>
			<h4>{title}</h4>
			<ul>
				{data.list.map(el => (
					<li key={el[0]}>
						<a href='#top' onClick={() => changeContent(el[1])}>
							{" "}
							{">"} {el[0]}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
