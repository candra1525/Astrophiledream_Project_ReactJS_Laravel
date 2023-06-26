import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from 'react-loading';
import add from '../images/add.png';
import edit from '../images/edit.png';
import hapus from '../images/delete.png';
import Swal from 'sweetalert2';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Stars = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [stars, setStars] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:8000/api/star');
			setStars(response.data.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSearch = () => {
		const filteredResults = stars.filter((star) => `${star.starName}`.toLowerCase().includes(searchValue.toLowerCase()));
		setSearchResults(filteredResults);
	};

	// Delete Data
	const deleteDataStar = (idStar, namaStar, e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Delete Star',
			text: `Are you sure you want to delete data ${namaStar} ?`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		}).then(async (result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:8000/api/deletestar/${idStar}`)
					.then(() => {
						Swal.fire('Success!', `Data ${namaStar} deleted successfully!`, 'success');
						fetchData(); // Memuat ulang data setelah berhasil menghapus pengguna
					})
					.catch((error) => {
						console.log(error);
						Swal.fire('Error!', 'There was an error deleting data!', 'error');
					});
			}
		});
	};

	const saveDataFavorite = async (idUser, idStar, e) => {
		e.preventDefault();
		try {
			await axios
				.post(
					'http://localhost:8000/api/addfavstar',
					{
						userId: idUser,
						starId: idStar,
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
							text: 'Data Star has been added before !',
							confirmButtonText: 'OK',
						});
					} else {
						Swal.fire({
							title: 'Good Job !',
							icon: 'success',
							text: 'Favorite Star data added successfully',
							confirmButtonText: 'OK',
						});
					}
				});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		document.title = 'Astrophiledream - Star';
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
					<h1 className="text-2xl font-semibold ">Star</h1>
					{localStorage.getItem('role') === 'admin' && (
						<Link to={'/insertstar'}>
							<div className="flex">
								<img src={add} alt="adddata" className="w-[25px]" />
								<blockquote className="ms-3 md:block hidden">Add Data Star</blockquote>
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
							placeholder="Search Star.."
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
					</div>
				</form>
				{isLoading ? (
					<Loading className="mx-auto my-[100px]" type="spinningBubbles" color="#100b37" height={90} width={90} />
				) : searchResults.length > 0 || searchValue === '' ? (
					<div className="flex flex-wrap gap-10 justify-around">
						{(searchResults.length > 0 ? searchResults : stars).map((star) => (
							<div className="shadow-lg p-5 rounded-md mb-7 flex flex-col items-center justify-center" key={star.starId}>
								<div className="p-5 mx-auto">
									<img src={`http://localhost:8000/storage/stars/${star.starImage}`} alt="starImage" className="shadow-md rounded-md mx-auto w-[240px] h-[240px]" />
								</div>
								<div className="ml-4 text-black text-justify">
									<div className="flex justify-between items-center">
										<h1 className="text-2xl mb-3 font-bold">{star.starName}</h1>

										{localStorage.getItem('role') === 'admin' && (
											<div className="flex gap-6">
												<Link to={`/editdatastar/${star.starId}`}>
													<img src={edit} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" />
												</Link>
												<img src={hapus} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" onClick={(e) => deleteDataStar(star.starId, star.starName, e)} />
											</div>
										)}
									</div>
									<hr className="mb-3" />
									<div className="flex flex-col justify-between w-[450px] h-[260px] mb-[30px]">
										<table>
											<tr>
												<td className="w-[200px]">Star Constellation</td>
												<td className="px-5">:</td>
												<td>{star.starConstellation}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Star Declination</td>
												<td className="px-5">:</td>
												<td>{star.starDeclination}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Star Area</td>
												<td className="px-5">:</td>
												<td>{star.starArea}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Star Degree Visible</td>
												<td className="px-5">:</td>
												<td>{star.starDegreeVisible}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Star Date Visible</td>
												<td className="px-5">:</td>
												<td>{star.starDateVisible}</td>
											</tr>
											<tr>
												<td className="w-[200px]">Star Time Visible</td>
												<td className="px-5">:</td>
												<td>{star.starTimeVisible}</td>
											</tr>
										</table>
										<div className="flex justify-between items-center mt-5">
											<div>
												<button className="bg-[#ffa600] text-white p-2 mt-[15px] rounded-md w-[150px]" onClick={(e) => saveDataFavorite(localStorage.getItem('idUser'), star.starId, e)}>
													Add Favorites
												</button>
											</div>
											<Link to={`/detailStarLogin/${star.starId}`}>
												<button className="bg-[#100b37] text-white p-2 mt-[15px] rounded-md w-[150px]">Detail</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="text-center text-gray-500 font-bold text-xl mt-[100px]">Star Data Not Found.</div>
				)}
			</div>
			<ScrollToTopButton />
		</div>
	);
};

export default Stars;
