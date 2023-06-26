import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import search from './../images/search.png';
import Loading from 'react-loading';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Astronout = (astronaut) => {
	useEffect(() => {
		document.title = 'Astrophiledream - Astronaut';
	}, []);

	const [astronauts, setAstronauts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		try {
			setIsLoading(true);
			axios.get('http://localhost:8000/api/astronaut')
				.then((response) => {
					// console.log(response.data.data);
					setAstronauts(response.data.data);
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return (
		<div>
			<Navbar />

			<div className="mt-[100px] w-[1000px] mx-auto p-5">
				{/* Pencarian */}
				<div className="mb-10 flex flex-col items-center justify-center">
					<h1 className="font-bold text-3xl">Search Astronaut</h1>
					<div className="mt-8 flex w-full">
						<form className="w-full">
							<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
								Search
							</label>
							<div class="relative">
								<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
									</svg>
								</div>
								<input
									type="search"
									id="default-search"
									class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search Astronaut..."
									required
								/>
								<button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Search
								</button>
							</div>
						</form>
					</div>
				</div>
				{/* Content */}
				{isLoading ? (
					<Loading className="mx-auto my-[100px]" type="spinningBubbles" color="#100b37" height={80} width={80} />
				) : (
					<div>
						{Array.isArray(astronauts) &&
							astronauts.map((astronauts2) => (
								<div className="flex shadow-md p-5 rounded-md mb-7" key={astronauts2.astronautId}>
									<div className="flex justify-center items-center w-[20%] mr-4 p-5">
										<img src={astronauts2.astronautImage} alt="astronautImage" />
									</div>
									<div className="w-[80%] ml-4 text-black text-justify">
										<h1 className="text-2xl mb-3">
											{astronauts2.firstName} {astronauts2.lastName}
										</h1>
										<hr className="mb-3" />
										<div>
											<table>
												<tr>
													<td className="w-[200px]">Position</td>
													<td className="px-5">:</td>
													<td>{astronauts2.position}</td>
												</tr>
												<tr>
													<td className="w-[200px]">Rank</td>
													<td className="px-5">:</td>
													<td>{astronauts2.rank}</td>
												</tr>
												<tr>
													<td className="w-[200px]">Time In Space</td>
													<td className="px-5">:</td>
													<td>{astronauts2.timeInSpace}</td>
												</tr>
												<tr>
													<td className="w-[200px]">Number Of Mission</td>
													<td className="px-5">:</td>
													<td>{astronauts2.numberOfMissions}</td>
												</tr>
												<tr>
													<td className="w-[200px]">Mission</td>
													<td className="px-5">:</td>
													<td>{astronauts2.missions}</td>
												</tr>
												<tr>
													<td className="w-[200px]">Education</td>
													<td className="px-5">:</td>
													<td>{astronauts2.education}</td>
												</tr>
											</table>

											<div>
												<Link to={`/detailAstronaut/${astronauts2.astronautId}`}>
													<button className="bg-[#100b37] text-white p-2 mt-[15px] rounded-md w-[100px]">Detail</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Astronout;
