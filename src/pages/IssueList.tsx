import React, { useState, useRef } from 'react';
import useIssueList from '../api/useIssueList';
import IssueItem from '../components/issue/IssueItem';
import WantedAd from '../components/banner/WantedAd';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function IssueList() {
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoding, setIsLoding] = useState(true);
	const { issue, error } = useIssueList(pageNumber, setIsLoding);

	const targetRef = useRef(null);
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

	useIntersectionObserver(targetRef, () => {
		setPageNumber(pageNumber + 1);
	});

	if (error) {
		return <div>오류가 발생했습니다.</div>;
	}

	return (
		<div>
			<ul>
				{issue &&
					issue.map((item: Issue, index: number) =>
						index && index % 4 === 0 ? (
							<React.Fragment key={item.id}>
								<WantedAd />
								<IssueItem key={item.id} item={item} />
							</React.Fragment>
						) : (
							<IssueItem key={item.id} item={item} />
						),
					)}
				{isLoding ? <div>로딩중...</div> : <li ref={targetRef}></li>}
			</ul>
		</div>
	);
}

export default IssueList;
