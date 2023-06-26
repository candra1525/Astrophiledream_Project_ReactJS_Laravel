import React from 'react';
import Typed from 'react-typed';
import astro from './../images/hero.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const navigate = useNavigate();
	return (
		<div className="text-white latar-belakang">
			<div className="max-w-[1000px] w-full h-screen mx-auto text-center flex items-center justify-between p-6">
				<div className=" w-[1000px] md:mr-[100px]">
					<h1 className="md:text-5xl sm:text-4xl text-2xl font-bold judul">"Build your dreams with Astrophiledream"</h1>
					<div className="flex items-center justify-center md:text-2xl sm:text-xl text-l font-bold mt-4">
						<p className="md:mr-2 mr-1">Here you will find out about</p>
						<Typed strings={['Astronaut', 'Rocket', 'Planet', 'Star']} typeSpeed={120} backSpeed={140} loop />
					</div>
					<button className="bg-[#F6C66E] w-[120px] rounded-md font-bold my-6 p-2 mx-auto px-6 text-[#100b37] ease-in-out duration-500 hover:scale-125 hover:text-white hover:w-[150px]" onClick={() => navigate('/auth/login')}>
						Let's Go
					</button>
				</div>

				<div className="md:flex hidden my-3 items-center justify-center w-[600px] h-[600px]">
					<img src={astro} alt="astro" className="animated-image md:w-[1200px] w-[200px] " />
				</div>
			</div>
		</div>
	);
};

export default Hero;
