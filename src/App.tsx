import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
const IssueList = lazy(() => import('./pages/IssueList'));
const IssueDetail = lazy(() => import('./pages/IssueDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
	return (
		<Layout>
			<Suspense fallback="...Loading">
				<Routes>
					<Route path="/" element={<IssueList />} />
					<Route path="/issues/:id" element={<IssueDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
