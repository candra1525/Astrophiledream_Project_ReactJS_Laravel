import React, { useEffect, useState } from 'react';
import arrow from './../images/arrow.png';
import logo from './../images/astronaut.png';
import dashboard from './../images/dashboard.png';
import astronaut from './../images/astronaut2.png';
import rocket from './../images/shuttle.png';
import planet from './../images/planets.png';
import star from './../images/stars.png';
import favorite from './../images/folder-favorite.png';
import profile from './../images/profile.png';
import logout from './../images/logout-no-bg.png';
import manageData from './../images/manageData.png';
import userAdmin from './../images/addUser.png';
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import about from '../images/about.png';

const SideBar = () => {
	const [open, setOpen] = useState(localStorage.getItem('open'));
	const [user, setUser] = useState([]);
	// const [role, setRole] = useState('');

	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			await axios.post('http://localhost:8000/api/auth/me').then((response) => {
				// setRole(response.data.role);
				localStorage.setItem('role', response.data.role);
				setUser(response.data);
			});
		} catch (error) {
			localStorage.removeItem('token');
			localStorage.removeItem('role');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
		const storedToggleValue = localStorage.getItem('open');
		if (storedToggleValue) {
			setOpen(JSON.parse(storedToggleValue));
		}
		if (!token) {
			navigate('/auth/login');
		}
	}, []);

	const handleClick = () => {
		setOpen(!open);
		localStorage.setItem('open', JSON.stringify(!open));
	};

	const token = localStorage.getItem('token');

	const handleLogout = async () => {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		await axios.post('http://localhost:8000/api/auth/me').then(() => {
			Swal.fire({
				title: 'Logout',
				text: 'Are you sure you want to logout ? If you want to log back in, you must re-login',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire('Success !', 'You have successfully logged out !', 'success');
					localStorage.removeItem('token');
					localStorage.removeItem('open');
					navigate('/home');
				}
			});
		});
	};

	const navigate = useNavigate();

	return (
		<div className={`${open ? 'w-72' : 'w-[90px]'} duration-500 p-5 pt-8 latar-belakang sticky top-0 left-0 h-[100vh]`}>
			<img src={arrow} alt="arrow" className={`absolute duration-500 z-50 cursor-pointer -right-3 top-9 w-7 border-[#100b37] bg-white rounded-full rotate-180  ${!open && 'rotate-[-0deg]'}`} onClick={handleClick} />
			<div className="flex gap-x-4 items-center">
				<img src={logo} alt="logo" className={`w-10 cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
				<h1 className={`text-white origin-left font-bold text-xl duration-500 ${!open && 'scale-0'}`}>Astrophiledream</h1>
			</div>
			<div className="absolute flex flex-col p-5 h-full top-0 left-0 justify-between">
				<ul className={`mt-28 ${open ? 'w-[250px]' : 'w-[50px]'}`}>
					<NavLink to="/dashboard" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
						<li className="flex items-center">
							<img src={dashboard} alt="dashboard" className="w-5 mr-6" />
							<span className={`origin-left duration-500 ${!open && 'hidden'}`}>Dashboard</span>
						</li>
					</NavLink>
					<NavLink to="/astronauts" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
						<li className="flex items-center">
							<img src={astronaut} alt="dashboard" className="w-5 mr-6" />
							<span className={`origin-left duration-500 ${!open && 'hidden'}`}>Astronaut</span>
						</li>
					</NavLink>
					<NavLink to="/rockets" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
						<li className="flex items-center">
							<img src={rocket} alt="dashboard" className="w-5 mr-6" />
							<span className={`origin-left duration-500 ${!open && 'hidden'}`}>Rocket</span>
						</li>
					</NavLink>
					<NavLink to="/planets" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
						<li className="flex items-center">
							<img src={planet} alt="dashboard" className="w-5 mr-6" />
							<span className={`origin-left duration-500 ${!open && 'hidden'}`}>Planet</span>
						</li>
					</NavLink>
					<NavLink to="/stars" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
						<li className="flex items-center">
							<img src={star} alt="dashboard" className="w-5 mr-6" />
							<span className={`origin-left duration-500 ${!open && 'hidden'}`}>Star</span>
						</li>
					</NavLink>
					<NavLink to="/favorites" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
						<li className="flex items-center">
							<img src={favorite} alt="dashboard" className="w-5 mr-6" />
							<span className={`origin-left duration-500 ${!open && 'hidden'}`}>My Favorite</span>
						</li>
					</NavLink>
					{localStorage.getItem('role') === 'admin' ? (
						<NavLink to="/managedata" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
							<li className="flex items-center">
								<img src={manageData} alt="dashboard" className="w-5 mr-6" />
								<span className={`origin-left duration-500 ${!open && 'hidden'}`}>Manage Data User</span>
							</li>
						</NavLink>
					) : (
						<></>
					)}
				</ul>
				<ul>
					<NavLink to="/aboutdev" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
						<li className="flex items-center">
							<img src={about} alt="dashboard" className="w-5 mr-6" />
							<span className={`origin-left duration-500 ${!open && 'hidden'}`}>About</span>
						</li>
					</NavLink>
					<NavLink to="/profiles" activeclassname="active" className={`flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold`}>
						<li className="flex items-center">
							<img src={`http://localhost:8000/storage/user/${user.image}`} alt="dashboard" className="w-5 mr-6 h-5 rounded-full object-cover" />
							<span className={`origin-left duration-500 ${!open && 'hidden'}`}>Profile</span>
						</li>
					</NavLink>
					<li className="flex items-center text-white text-sm p-4 cursor-pointer hover:bg-[#1b125c] rounded-lg hover:font-bold" onClick={handleLogout}>
						<img src={logout} alt="dashboard" className="w-5 mr-6" />
						<span className={`origin-left duration-500 ${!open && 'hidden'}`}>Log Out</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
