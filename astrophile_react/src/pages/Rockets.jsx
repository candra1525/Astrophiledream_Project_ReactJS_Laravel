import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from 'react-loading';
import add from '../images/add.png';
import edit from '../images/edit.png';
import hapus from '../images/delete.png';
import fav from '../images/fav.png';
import Swal from 'sweetalert2';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Rockets = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [rockets, setRockets] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:8000/api/rocket');
			setRockets(response.data.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSearch = () => {
		const filteredResults = rockets.filter((rocket) => `${rocket.rocketName}`.toLowerCase().includes(searchValue.toLowerCase()));
		setSearchResults(filteredResults);
	};

	// Delete Data
	const deleteDataRocket = (idRocket, namaRocket, e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Delete Rocket',
			text: `Are you sure you want to delete data ${namaRocket} ?`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		}).then(async (result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:8000/api/deleterocket/${idRocket}`)
					.then(() => {
						Swal.fire('Success!', `Data ${namaRocket} successfully deleted!`, 'success');
						fetchData();
					})
					.catch((error) => {
						console.log(error);
						Swal.fire('Error!', 'There was an error deleting data!', 'error');
					});
			}
		});
	};

	// Simpan ke Favorite
	const saveDataFavorite = async (idUser, idRocket, e) => {
		e.preventDefault();
		try {
			await axios
				.post(
					'http://localhost:8000/api/addfavrocket',
					{
						userId: idUser,
						rocketId: idRocket,
					},
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then((response) => {
					if (response.data.code === '0') {
						Swal.fire({
							title: 'Fail !',
							icon: 'warning',
							text: 'Data Rocket has been added before!',
							confirmButtonText: 'OK',
						});
					} else {
						Swal.fire({
							title: 'Good Job !',
							icon: 'success',
							text: 'Favorite Rocket data added successfully',
							confirmButtonText: 'OK',
						});
					}
				});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		document.title = 'Astrophiledream - Rocket';
		fetchData();
		handleSearch(); // Panggil handleSearch setiap kali searchValue berubah
	}, [searchValue]);

	return (
		<div className="flex">
			<div className="relative">
				<SideBar />
			</div>
			<div className="p-7 flex flex-col w-full">
				<div className="flex justify-between items-center mb-10 ">
					<h1 className="text-2xl font-semibold ">Rocket</h1>
					{localStorage.getItem('role') === 'admin' && (
						<Link to={'/insertrocket'}>
							<div className="flex">
								<img src={add} alt="adddata" className="w-[25px]" />
								<blockquote className="ms-3 md:block hidden">Add Data Rocket</blockquote>
							</div>
						</Link>
					)}
				</div>
				<form className="mb-10">
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
				{isLoading ? (
					<Loading className="mx-auto my-[100px]" type="spinningBubbles" color="#100b37" height={90} width={90} />
				) : searchResults.length > 0 || searchValue === '' ? (
					<div className="flex flex-wrap gap-10 justify-around">
						{(searchResults.length > 0 ? searchResults : rockets).map((rocket) => (
							<div className="shadow-lg p-5 rounded-md mb-7 flex flex-col items-center justify-center" key={rocket.rocketId}>
								<div className="p-5 mx-auto">
									<img src={`http://localhost:8000/storage/rockets/${rocket.rocketImage}`} alt="rocketImage" className="shadow-md rounded-md mx-auto w-[250px] h-[300px]" />
								</div>
								<div className="ml-4 text-black text-justify">
									<div className="flex justify-between items-center">
										<h1 className="text-2xl mb-3 font-bold">{rocket.rocketName}</h1>

										{localStorage.getItem('role') === 'admin' && (
											<div className="flex gap-6">
												<Link to={`/editdatarocket/${rocket.rocketId}`}>
													<img src={edit} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" />
												</Link>
												<img src={hapus} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" onClick={(e) => deleteDataRocket(rocket.rocketId, rocket.rocketName, e)} />
											</div>
										)}
									</div>
									<hr className="mb-3" />
									<div className="flex flex-col justify-between w-[500px] h-[380px] mb-[30px]">
										<table>
											<tr>
												<td className="w-[200px]">Type</td>
												<td className="px-5">:</td>
												<td>{rocket.type}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Place Of Origin</td>
												<td className="px-5">:</td>
												<td>{rocket.placeOfOrigin}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Rocket Mission</td>
												<td className="px-5">:</td>
												<td>{rocket.rocketMissions}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Used By</td>
												<td className="px-5">:</td>
												<td>{rocket.usedBy}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Manufracture</td>
												<td className="px-5">:</td>
												<td>{rocket.manufracture}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Launch Sites</td>
												<td className="px-5">:</td>
												<td>{rocket.launchSites}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Total Launch</td>
												<td className="px-5">:</td>
												<td>{rocket.totalLaunch}</td>
											</tr>
											<tr>
												<td className="w-[200px]">First Flight / Last Flight</td>
												<td className="px-5">:</td>
												<td>
													{rocket.firstFlight} / {rocket.lastFlight}
												</td>
											</tr>
											<tr>
												<td className="w-[200px]">Status</td>
												<td className="px-5">:</td>
												<td>{rocket.status}</td>
											</tr>
										</table>
										<div className="flex justify-between items-center mt-5">
											<div>
												<button className="bg-[#ffa600] text-white p-2 mt-[15px] rounded-md w-[150px]" onClick={(e) => saveDataFavorite(localStorage.getItem('idUser'), rocket.rocketId, e)}>
													Add Favorites
												</button>
											</div>
											<Link to={`/detailRocketLogin/${rocket.rocketId}`}>
												<button className="bg-[#100b37] text-white p-2 mt-[15px] rounded-md w-[150px]">Detail</button>
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
		</div>
	);
};

export default Rockets;
