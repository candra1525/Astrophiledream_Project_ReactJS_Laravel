import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Dev from '../components/Dev';

const AboutDev = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const token = localStorage.getItem('token');
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			const response = await axios.post('http://localhost:8000/api/auth/me');
			setUser(response.data);
		} catch (error) {
			localStorage.removeItem('token');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!token) {
			navigate('/auth/login');
		} else {
			fetchData();
		}
	}, [navigate, token]);

	return (
		<div className="flex">
			<div className="relative">
				<SideBar />
			</div>
			<div className='mx-auto'>
                    <Dev/>
               </div>
		</div>
	);
};

export default AboutDev;
