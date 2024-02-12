export default function ContactList({ title, data }) {
	return (
		<>
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
		</>
	);
}
