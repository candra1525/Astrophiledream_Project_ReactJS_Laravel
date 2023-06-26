import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import edit from '../images/edit.png';
import Loading from 'react-loading';

const Profiles = () => {
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
		<div className="flex ">
			<div className="relative">
				<SideBar />
			</div>
			<div className="p-7 flex-1">
				{Object.keys(user).length !== 0 ? (
					<div>
						<div className="flex justify-between items-center mb-10 w-full ">
							<div className="flex justify-between items-center w-full mt-5">
								<h1 className="text-2xl font-semibold ml-10">My Profile</h1>
								<Link to={`/editdataprofileuser`}>
									<div className="flex items-center gap-3 hover:underline hover:font-bold hover:cursor-pointer mr-10">
										<img src={edit} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" />
										<blockquote>Edit Profile</blockquote>
									</div>
								</Link>
							</div>
						</div>

						<div key={user.id} className="max-w-[1000px] mx-auto bg_custom p-20 rounded-lg">
							<div className="w-full flex justify-center">
								<img src={`http://localhost:8000/storage/user/${user.image}`} alt={user.name} className="w-[200px] h-[200px] rounded-full shadow-xl object-cover" />
							</div>
							<div className="mt-[100px] flex md:flex-col justify-around ">
								<div>
									<div>
										<blockquote className="font-bold">Fullname</blockquote>
										<p className="mt-3">{user.name}</p>
									</div>
									<div className="mt-[25px]">
										<blockquote className="font-bold">Gender</blockquote>
										<p className="mt-3">{user.gender}</p>
									</div>
								</div>
								<div>
									<div className="mt-[25px]">
										<blockquote className="font-bold">Email</blockquote>
										<p className="mt-3">{user.email}</p>
									</div>
									<div className="mt-[25px]">
										<blockquote className="font-bold">Phone Number</blockquote>
										<p className="mt-3">{user.phoneNumber}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<Loading className="mx-auto my-[100px]" type="spinningBubbles" color="#100b37" height={90} width={90} />
				)}
			</div>
		</div>
	);
};

export default Profiles;
