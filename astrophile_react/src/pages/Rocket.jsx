import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import search from './../images/search.png';

import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from 'react-loading';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Rocket = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [rocket, setRocket] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:8000/api/rocket');
			setRocket(response.data.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSearch = () => {
		const filteredResults = rocket.filter((rocket) => `${rocket.rocketName}`.toLowerCase().includes(searchValue.toLowerCase()));
		setSearchResults(filteredResults);
	};

	useEffect(() => {
		document.title = 'Astrophiledream - Rocket';
		fetchData();
		handleSearch(); // Panggil handleSearch setiap kali searchValue berubah
	}, [searchValue]);

	return (
		<div>
			<Navbar />
			<div className="mt-[150px] lg:w-[1000px] w-[700px] mx-auto p-5">
				{/* Pencarian */}
				<div className="mb-10 flex flex-col items-center justify-center flex-wrap">
					<h1 className="font-bold text-3xl">Search Rocket</h1>
					<div className="mt-8 flex flex-wrap w-full">
						<form className="mb-10 w-full">
							<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
								Search
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
									</svg>
								</div>
								{/* Input Search */}
								<input
									type="search"
									id="default-search"
									className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search Rocket.."
									value={searchValue}
									onChange={(e) => setSearchValue(e.target.value)}
								/>
							</div>
						</form>
					</div>
				</div>

				{isLoading ? (
					<Loading className="mx-auto my-[100px]" type="spinningBubbles" color="#100b37" height={90} width={90} />
				) : searchResults.length > 0 || searchValue === '' ? (
					<div>
						{(searchResults.length > 0 ? searchResults : rocket).map((rockets) => (
							<div className="flex md:flex-row flex-col justify-center items-center shadow-md p-5 rounded-md mb-7 lg:w-[1000px] w-[650px] mx-auto" key={rockets.rocketId}>
								<div className="flex justify-center items-center w-[20%] mr-4 p-5">
									<img src={`http://localhost:8000/storage/rockets/${rockets.rocketImage}`} alt="rocketImage" />
								</div>
								<div className="w-[80%] ml-4 text-black text-justify">
									<h1 className="text-2xl mb-3">{rockets.rocketName}</h1>
									<hr className="mb-3" />
									<div>
										<table>
											<tr>
												<td className="w-[200px]">Type</td>
												<td className="px-5">:</td>
												<td>{rockets.type}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Place Of Origin</td>
												<td className="px-5">:</td>
												<td>{rockets.placeOfOrigin}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Rocket Mission</td>
												<td className="px-5">:</td>
												<td>{rockets.rocketMissions}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Used By</td>
												<td className="px-5">:</td>
												<td>{rockets.usedBy}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Manufracture</td>
												<td className="px-5">:</td>
												<td>{rockets.manufracture}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Launch Sites</td>
												<td className="px-5">:</td>
												<td>{rockets.launchSites}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Total Launch </td>
												<td className="px-5">:</td>
												<td>{rockets.totalLaunch}</td>
											</tr>
											<tr>
												<td className="w-[200px]">First Flight / Last Flight </td>
												<td className="px-5">:</td>
												<td>
													{rockets.firstFlight} / {rockets.lastFlight}
												</td>
											</tr>
											<tr>
												<td className="w-[200px]">Status </td>
												<td className="px-5">:</td>
												<td>{rockets.status}</td>
											</tr>
										</table>

										<div>
											<Link to={`/detailRocket/${rockets.rocketId}`}>
												<button className="bg-[#100b37] text-white p-2 mt-[15px] rounded-md w-[100px]">Detail</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="text-center text-gray-500 font-bold text-xl mt-[100px]">Rocket Data Not Found.</div>
				)}
			</div>
			<ScrollToTopButton />
			<Footer />
		</div>
	);
};

export default Rocket;
