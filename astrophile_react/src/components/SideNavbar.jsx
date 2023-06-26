import React from 'react';
import logo from './../images/astronaut.png';
import iconastro from './../images/astronaut2.png';
import iconplanet from './../images/planets.png';
import iconrocket from './../images/shuttle.png';
import iconstar from './../images/stars.png';
import iconhome from './../images/home.png';

import { useNavigate, NavLink } from 'react-router-dom';

const SideNavbar = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="text-white fixed left-0 top-0 w-[50%] h-full border-r border-r-[#3C4043] bg-[#141824] ease-in-out duration-500">
				<NavLink to="/">
					<div className="w-full flex items-center mt-9 mb-10 pl-8">
						<img src={logo} alt="logo" className="w-10 mr-4" />
						<h1 className=" text-2xl font-bold text-white">Astrophiledream</h1>
					</div>
				</NavLink>

				<ul className="pl-6 pr-6">
					<NavLink to="/" activeclassname="active">
						<li className="p-4 cursor-pointer hover:bg-[#100b37] rounded-lg flex hover:font-bold" onClick={() => navigate('/')}>
							<img src={iconhome} alt="iconhome" className="w-5 h-5 mr-4" />
							Dashboard
						</li>
					</NavLink>
					<NavLink to="/astronaut" activeclassname="active">
						<li className="p-4 cursor-pointer hover:bg-[#100b37] rounded-lg flex hover:font-bold">
							<img src={iconastro} alt="iconastro" className="w-5 h-5 mr-4" />
							Astronaut
						</li>
					</NavLink>
					<NavLink to="/rocket" activeclassname="active">
						<li className="p-4 cursor-pointer hover:bg-[#100b37] rounded-lg flex hover:font-bold" onClick={() => navigate('/rocket')}>
							<img src={iconrocket} alt="iconroket" className="w-5 h-5 mr-4" />
							Rocket
						</li>
					</NavLink>
					<NavLink to="/planet" activeclassname="active">
						<li className="p-4 cursor-pointer hover:bg-[#100b37] rounded-lg flex hover:font-bold" onClick={() => navigate('/planet')}>
							<img src={iconplanet} alt="iconplanet" className="w-5 h-5 mr-4" />
							Planet
						</li>
					</NavLink>
					<NavLink to="/star" activeclassname="active">
						<li className="p-4 cursor-pointer hover:bg-[#100b37] rounded-lg flex hover:font-bold" onClick={() => navigate('/star')}>
							<img src={iconstar} alt="iconstar" className="w-5 h-5 mr-4" />
							Star
						</li>
					</NavLink>
					{/* <NavLink to="/star" activeclassname="active">
						<li className="p-4 cursor-pointer hover:bg-[#100b37] rounded-lg flex hover:font-bold" onClick={() => navigate('/star')}>
							<img src={iconstar} alt="iconstar" className="w-5 h-5 mr-4" />
							My Favorite
						</li>
					</NavLink> */}
					<li className="p-4">
						<button className="bg-[#F6C66E] w-[90px] rounded-md font-bold p-2 mx-auto px-6 text-[#100b37] ease-in-out duration-300 hover:text-white" onClick={() => navigate('/auth/login')}>
							Login
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SideNavbar;
