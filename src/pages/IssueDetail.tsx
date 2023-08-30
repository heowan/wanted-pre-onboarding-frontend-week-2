import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetIssueItem } from '../api/useIssueList';
import IssueItem from '../components/issue/IssueItem';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function IssueDetail() {
	const params = useParams();
	const [isLoding, setIsLoding] = useState(true);
	const { issueItem, error } = useGetIssueItem(params.id as string, setIsLoding);

	if (error) {
		return <div>오류가 발생했습니다.</div>;
	}

	return isLoding ? (
		<div>로딩중...</div>
	) : (
		<div>
			<div>
				<img src={issueItem.user.avatar_url} alt="" />
				<IssueItem item={issueItem} />;
			</div>
			<div>
				<ReactMarkdown children={issueItem.body} />
			</div>
		</div>
	);
}

export default IssueDetail;
