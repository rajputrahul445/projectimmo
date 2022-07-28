import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const useAuth = () => {
	const user = localStorage.getItem('token');
	if (user) {
		return true;
	} else {
		return false;
	}
};
	
const  ProtectedRoute = () => {
	const currentLocation = useLocation();
	let locationPathName = currentLocation.pathname;
	const auth = useAuth();
	return auth? <Outlet />:<Navigate to={`/?path=${locationPathName}`} />;
};
	
export default ProtectedRoute;
