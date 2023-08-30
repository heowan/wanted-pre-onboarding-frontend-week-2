import { useEffect, useState } from 'react';
import axios from 'axios';

const useIssueList = (pageNumber: number, setIsLoding: any) => {
	const [issue, setIssue] = useState([]);
	const [error, setError] = useState(false);
	const token = process.env.GITHUB_TOKEN;

	useEffect(() => {
		const issueListApi = async () => {
			try {
				setIsLoding(true);
				const response = await axios.get(
					`https://api.github.com/repos/facebook/react/issues?per_page=10&page=${pageNumber}&sort=comments`,
					{
						headers: { Authorization: token },
					},
				);
				setIssue((prevIssue: any): any => {
					return [...prevIssue, ...response.data];
				});
				setIsLoding(false);
			} catch (error) {
				setError(true);
			}
		};
		issueListApi();
	}, [pageNumber]);

	return { issue, error };
};

export default useIssueList;
