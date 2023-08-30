interface Issue {
	id: number;
	number: number;
	title: string;
	user: {
		login: string;
	};
	updated_at: string;
	comments: number;
}

interface IssueItemProps {
	item: Issue;
}

function IssueItem(props: IssueItemProps) {
	const item = props.item;
	return (
		<li>
			<div>
				<h3>
					<span>{item.number}</span> {item.title}
				</h3>
				<p>
					<span>{item.user.login}</span>
					<span>{item.updated_at}</span>
				</p>
			</div>
			<div>{item.comments}</div>
		</li>
	);
}

export default IssueItem;
