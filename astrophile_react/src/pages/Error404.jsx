import React, { useEffect } from 'react';
import NotFound from './../images/laman_not_found.png';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
	useEffect(() => {
		document.title = 'Astrophiledream - Error Pages Not Found';
	}, []);
	const navigate = useNavigate(false);
	return (
		<div className="text-[#100b37] h-screen w-full mx-auto flex items-center justify-center latar-belakang">
			<div className="w-[1024px] h-[700px] bg-slate-200 rounded-xl flex flex-col justify-center items-center p-6">
				<div className="md:flex mx-auto justify-center items-center">
					<div className="md:w-[50%]">
						<img src={NotFound} alt="Pages Not Found" />
					</div>
					<div className="text-center md:w-[50%] flex flex-col items-center justify-center">
						<h1 className="text-9xl">404</h1>
						<p className="text-4xl mt-4">Pages Not Found</p>
					</div>
				</div>
				<div className="mt-10 ease-in-out duration-300 hover:scale-110">
					<button className="bg-[#100b37] text-white p-4 rounded-md" onClick={() => navigate('/')}>
						Back To Home Pages
					</button>
				</div>
			</div>
		</div>
	);
};

export default Error404;
