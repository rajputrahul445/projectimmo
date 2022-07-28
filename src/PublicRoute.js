import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';


const useAuth=()=>{
	const user = localStorage.getItem('token');
	if(user) {
		return true;
	} else {
		return false;
	}
};
	
const  PublicRoute=() =>{
	const auth = useAuth();
	console.log(auth);
	return auth ? <Navigate to="/" />:<Outlet />;
};
	
export default PublicRoute;
