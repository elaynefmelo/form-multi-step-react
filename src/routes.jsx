import React from 'react';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage';
const routes = [
{ path: '/', element: <HomePage /> },
{ path: '/login', element: <LoginPage />
},
];
export default routes;