import React from 'react';
import paknur from '../images/developer/paknur.jpg';
import c from '../images/developer/candra.jpg';
import kwc from '../images/developer/kelvin.png';
import ig from '../images/icon/instagram.png';
import fb from '../images/icon/facebook.png';
import ghb from '../images/icon/github.png';
import wa from '../images/icon/whatsapp.png';

const Dev = () => {
	return (
		<div className="w-full bg-white py-16 px-4 flex flex-col mx-auto border-slate-950">
			<div className="text-[#312455] mb-[40px] max-w-[800px] ml-auto mr-auto">
				<h1 className="text-center md:text-3xl text-2xl font-extrabold">
					About Developer
					<br />
					Astrophiledream
				</h1>
				<hr className="mt-5" />
			</div>

			<div className="max-w-[1240px] mx-auto p-5 shadow rounded-md mb-6">
				<div className="items-center grid md:grid-cols-2 grid-cols-1">
					<div className="w-full">
						<img src={paknur} alt="gambar" className="mx-auto my-auto w-[190px] rounded-full h-[190px] object-cover" />
					</div>
					<div className="p-5 w-full text-justify text-[#312455]">
						<h1 className="text-2xl font-bold mb-3 text-[#F6C66E]">Nur Rachmat, M.Kom [Dosen Pembimbing]</h1>
						<hr />
						<p className="mt-3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos, modi cum, blanditiis iste dolorem, neque iusto natus temporibus quasi quidem praesentium eligendi voluptatem dicta maxime velit est! Molestias animi ab officiis culpa sed minima illo cum? Eaque
						</p>
						<div className="mt-3 flex gap-4">
							<a href="https://www.instagram.com/nurrachmat_nr/" className="hover:underline hover:text-blue-600" target="_blank" rel="noreferrer">
								<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer ">
									<img src={ig} alt="instagram" className="w-5" />
								</div>
							</a>
							<a href="https://web.facebook.com/n.rachmat" className="hover:underline hover:text-blue-600" target="_blank" rel="noreferrer">
								<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
									<img src={fb} alt="facebook" className="w-5" />
								</div>
							</a>
							<a href="https://github.com/nurrachmat-nr" className="hover:underline hover:text-blue-600" target="_blank" rel="noreferrer">
								<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
									<img src={ghb} alt="github" className="w-5" />
								</div>
							</a>
							<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
								<img src={wa} alt="whatsapp" className="w-5" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-5 shadow rounded-md mb-6">
				<div className="items-center grid md:grid-cols-2 grid-cols-1 ">
					<div className="w-full">
						<img src={c} alt="gambar" className="mx-auto my-auto w-[190px] h-[190px] rounded-full object-cover" />
					</div>
					<div className="p-5 w-full text-justify text-[#312455]">
						<h1 className="text-2xl font-bold mb-3 text-[#F6C66E]">Candra [2125250012]</h1>
						<hr />
						<p className="mt-3">
							Hello, introduce my name is Candra. I am a student from Multi Data Palembang University, Faculty of Computer Science and Engineering, Department of Informatics. I am a member of the development team for the Astrophiledream website. I hope that this website can add
							insight for you to find out a lot of information related to Astronauts
						</p>
						<div className="mt-3 flex gap-4">
							<a href="https://www.instagram.com/candracandra1525/" className="hover:underline hover:text-blue-600" target="_blank" rel="noreferrer">
								<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
									<img src={ig} alt="instagram" className="w-5" />
								</div>
							</a>
							<a href="https://web.facebook.com/profile.php?id=100020838092239" className="hover:underline hover:text-blue-600" target="_blank" rel="noreferrer">
								<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
									<img src={fb} alt="facebook" className="w-5" />
								</div>
							</a>
							<a href="https://github.com/candracandra1525" className="hover:underline hover:text-blue-600" target="_blank" rel="noreferrer">
								<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
									<img src={ghb} alt="github" className="w-5" />
								</div>
							</a>
							<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
								<img src={wa} alt="whatsapp" className="w-5" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-5 shadow rounded-md">
				<div className="items-center grid md:grid-cols-2 grid-cols-1">
					<div className="w-full">
						<img src={kwc} alt="gambar" className="mx-auto my-auto w-[190px] h-[190px] rounded-full object-cover" />
					</div>
					<div className="p-5 w-full text-justify text-[#312455]">
						<h1 className="text-2xl font-bold mb-3 text-[#F6C66E]">Kelvin William Chandra [2125250027]</h1>
						<hr />
						<p className="mt-3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos, modi cum, blanditiis iste dolorem, neque iusto natus temporibus quasi quidem praesentium eligendi voluptatem dicta maxime velit est! Molestias animi ab officiis culpa sed minima illo cum? Eaque
						</p>
						<div className="mt-3 flex gap-4">
							<a href="https://www.instagram.com/kelvinw_c/" className="hover:underline hover:text-blue-600" target="_blank" rel="noreferrer">
								<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
									<img src={ig} alt="instagram" className="w-5" />
								</div>
							</a>
							<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
								<img src={fb} alt="facebook" className="w-5" />
							</div>
							<a href="https://github.com/KelvinChand" className="hover:underline hover:text-blue-600" target="_blank" rel="noreferrer">
								<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
									<img src={ghb} alt="github" className="w-5" />
								</div>
							</a>
							<div className="bg-[#EFF3F6] p-2 w-[35px] h-[35px] rounded-[10px] hover:cursor-pointer">
								<img src={wa} alt="whatsapp" className="w-5" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dev;
