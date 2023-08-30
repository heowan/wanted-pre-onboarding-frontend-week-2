import { useEffect, useState } from 'react';
import axios from 'axios';

const useIssueList = (pageNumber: number) => {
	const [issue, setIssue] = useState([]);
	const [error, setError] = useState(false);
	const token = process.env.GITHUB_TOKEN;

	useEffect(() => {
		const issueListApi = async () => {
			try {
				const response = await axios.get(
					`https://api.github.com/repos/facebook/react/issues?per_page=30&page=${pageNumber}&sort=comments`,
					{
						headers: { Authorization: token },
					},
				);
				setIssue((prevIssue: any): any => {
					return [...prevIssue, ...response.data];
				});
			} catch (error) {
				setError(true);
			}
		};
		issueListApi();
	}, [pageNumber]);

	return { issue, error };
};

export default useIssueList;
