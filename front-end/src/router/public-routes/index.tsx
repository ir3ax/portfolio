import { RouteObject } from 'react-router-dom';
import Container from './container';
import { Dashboard } from '../../pages/dashboard';
import { TestingPage } from '../../pages/testing';

export const PublicRoutes: RouteObject = {
	path: '/',
	element: <Container />,
	children: [
		{
			path: '/',
			element: <Dashboard />,
		},
		{
			path: '/testing',
			element: <TestingPage />,
		},
	]
}