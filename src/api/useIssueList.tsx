import { useEffect, useState } from 'react';
import axios from 'axios';
const token = process.env.GITHUB_TOKEN;
interface Issue {
	id: number;
	number: number;
	title: string;
	user: {
		login: string;
		avatar_url: string;
	};
	updated_at: string;
	comments: number;
	body: string;
}

export const useGetIssueList = (pageNumber: number, setIsLoding: any) => {
	const [issue, setIssue] = useState([]);
	const [error, setError] = useState(false);

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

export const useGetIssueItem = (id: string, setIsLoding: any) => {
	const [issueItem, setIssueItem] = useState<Issue>({
		id: 0,
		number: 0,
		title: '',
		user: {
			login: '',
			avatar_url: '',
		},
		updated_at: '',
		comments: 0,
		body: '',
	});
	const [error, setError] = useState(false);

	useEffect(() => {
		const issueListApi = async () => {
			try {
				setIsLoding(true);
				const response = await axios.get(
					`https://api.github.com/repos/facebook/react/issues/${id}`,
					{
						headers: { Authorization: token },
					},
				);
				setIssueItem({ ...response.data });
				setIsLoding(false);
			} catch (error) {
				setError(true);
			}
		};
		issueListApi();
	}, []);

	return { issueItem, error };
};
