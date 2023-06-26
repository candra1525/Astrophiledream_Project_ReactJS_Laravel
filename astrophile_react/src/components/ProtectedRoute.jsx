import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ProtectedRoute = (props) => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
     
	const checkUserToken = async () => {
		const userToken = localStorage.getItem('token');
		if (!userToken || userToken === 'undefined') {
			setIsLoggedIn(false);
			return navigate('/auth/login');
		} else {
			try {
				axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
				// await axios.post('http://localhost:8000/api/auth/me').then((response) => {});
			} catch (error) {
				await axios.post('http://localhost:8000/api/auth/refresh').then((response) => {
					localStorage.setItem('token', response.data.access_token);
				});
			}
		}
		setIsLoggedIn(true);
	};

	useEffect(() => {
		checkUserToken();
	}, [isLoggedIn]);

	return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedRoute;
