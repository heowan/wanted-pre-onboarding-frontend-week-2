import React, { useState } from 'react';
import useIssueList from '../api/useIssueList';
import IssueItem from '../components/issue/IssueItem';

function IssueList() {
	const [pageNumber, setPageNumber] = useState(1);
	const { issue, error } = useIssueList(pageNumber);

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

	return (
		<div>
			<ul>
				{issue.map((item: Issue) => (
					<IssueItem key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
}

export default IssueList;
