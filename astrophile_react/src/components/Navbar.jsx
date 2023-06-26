import React, { useState } from 'react';
import logo from './../images/astronaut.png';
import iconastro from './../images/astronaut2.png';
import iconplanet from './../images/planets.png';
import iconrocket from './../images/shuttle.png';
import iconstar from './../images/stars.png';
import iconhome from './../images/home.png';

import { useNavigate, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	const navigate = useNavigate();

	return (
		<div className="w-full latar-belakang z-[999999999] fixed top-0 left-0 mx-auto">
			<div className="max-w-[1024px] flex justify-between items-center h-24 mx-auto px-4 text-white  z-[1000]">
				<NavLink to="/">
					<div className="w-full flex items-center ml-5 cursor-pointer">
						<img src={logo} alt="logo" className="w-10 mr-4" />
						<h1 className="text-2xl font-bold text-white">Astrophiledream</h1>
					</div>
				</NavLink>

				<ul className="hidden lg:flex items-center justify-center ">
					<li className="p-4 cursor-pointer hover:font-bold ">
						<NavLink to="/" activeclassname="active">
							Home
						</NavLink>
					</li>
					<li className="p-4 cursor-pointer hover:font-bold ">
						<NavLink to="/astronaut" activeclassname="active">
							Astronaut
						</NavLink>
					</li>
					<li className="p-4 cursor-pointer hover:font-bold ">
						<NavLink to="/rocket" activeclassname="active">
							Rocket
						</NavLink>
					</li>
					<li className="p-4 cursor-pointer hover:font-bold ">
						<NavLink to="/planet" activeclassname="active">
							Planet
						</NavLink>
					</li>
					<li className="p-4 cursor-pointer hover:font-bold ">
						<NavLink to="/star" activeclassname="active">
							Star
						</NavLink>
					</li>
					<li className="p-4">
						<button className="bg-[#F6C66E] w-[90px] rounded-md font-bold p-2 mx-auto px-6 text-[#100b37] ease-in-out duration-300 hover:text-white" onClick={() => navigate('/auth/login')}>
							Login
						</button>
					</li>
				</ul>
				<div onClick={handleNav} className="block mr-5 lg:hidden ease-in-out duration-500 ">
					{!nav ? <HiOutlineMenuAlt2 className="text-4xl cursor-pointer " /> : <IoMdClose className="text-4xl cursor-pointer" />}
				</div>
				<div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-[#3C4043] latar-belakang ease-in-out duration-500' : 'fixed left-[-100%] bottom-0 w-[45%] h-full border-r border-r-[#3C4043] bg-[#141824] ease-in-out duration-500'}>
					<NavLink to="/">
						<div className="w-full flex items-center mt-9 mb-5 pl-8">
							<img src={logo} alt="logo" className="w-10 mr-4" />
							<h1 className=" text-2xl font-bold text-white">Astrophiledream</h1>
						</div>
					</NavLink>
					<ul className="pl-6 pr-6">
						<NavLink to="/" activeclassname="active">
							<li className="p-4 cursor-pointer hover:bg-[#100b37] rounded-lg flex hover:font-bold" onClick={() => navigate('/')}>
								<img src={iconhome} alt="iconhome" className="w-5 h-5 mr-4" />
								Home
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
						<li className="p-4">
							<button className="bg-[#F6C66E] w-[90px] rounded-md font-bold p-2 mx-auto px-6 text-[#100b37] ease-in-out duration-300 hover:text-white" onClick={() => navigate('/auth/login')}>
								Login
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

// Develop your dreams with Astophiledream
