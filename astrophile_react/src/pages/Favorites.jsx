import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from 'react-loading';
import edit from '../images/edit.png';
import hapus from '../images/delete.png';
import Swal from 'sweetalert2';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Favorite = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [astronauts, setAstronauts] = useState([]);
	const [rockets, setRockets] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [stars, setStars] = useState([]);

	React.useEffect(() => {
		axios.get(`http://localhost:8000/api/userastronaut/${localStorage.getItem('idUser')}`)
			.then((response) => {
				setAstronauts(response.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	React.useEffect(() => {
		axios.get(`http://localhost:8000/api/userrocket/${localStorage.getItem('idUser')}`)
			.then((response) => {
				setRockets(response.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	React.useEffect(() => {
		axios.get(`http://localhost:8000/api/userplanet/${localStorage.getItem('idUser')}`)
			.then((response) => {
				setPlanets(response.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	React.useEffect(() => {
		axios.get(`http://localhost:8000/api/userstar/${localStorage.getItem('idUser')}`)
			.then((response) => {
				setStars(response.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// Delete Data
	const deleteDataAstonaut = (idFav, firstname, lastname, e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Delete User',
			text: `Are you sure you want to remove ${firstname} ${lastname} on your favorite list ?`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		}).then(async (result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:8000/api/deletefavastronaut/${idFav}`)
					.then(() => {
						Swal.fire({
							title: 'Success!',
							text: `Data ${firstname} ${lastname} has been successfully removed from your favourites !`,
							icon: 'success',
						}).then((result) => {
							if (result.isConfirmed) {
								axios.get(`http://localhost:8000/api/userastronaut/${localStorage.getItem('idUser')}`)
									.then((response) => {
										setAstronauts(response.data.data);
										setIsLoading(false);
									})
									.catch((error) => {
										console.log(error);
									});
							}
						});
					})
					.catch((error) => {
						console.log(error);
						Swal.fire('Error!', 'There was an error deleting data!', 'error');
					});
			}
		});
	};

	const deleteDataRocket = (idFavRocket, namaRoket, e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Delete Favorite',
			text: `Are you sure you want to remove ${namaRoket} on your favorite list ?`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		}).then(async (result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:8000/api/deletefavrocket/${idFavRocket}`)
					.then(() => {
						Swal.fire({
							title: 'Success!',
							text: `Data ${namaRoket} has been successfully removed from your favourites !`,
							icon: 'success',
						}).then((result) => {
							if (result.isConfirmed) {
								axios.get(`http://localhost:8000/api/userrocket/${localStorage.getItem('idUser')}`)
									.then((response) => {
										setRockets(response.data.data);
										setIsLoading(false);
									})
									.catch((error) => {
										console.log(error);
									});
							}
						});
					})
					.catch((error) => {
						console.log(error);
						Swal.fire('Error!', 'There was an error deleting data!', 'error');
					});
			}
		});
	};

	const deleteDataPlanet = (idFavPlanet, planetName, e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Delete User',
			text: `Are you sure you want to remove ${planetName} from your favorites list ?`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		}).then(async (result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:8000/api/deletefavplanet/${idFavPlanet}`)
					.then(() => {
						Swal.fire({
							title: 'Success!',
							text: `Data ${planetName} has been successfully removed from your favourites !`,
							icon: 'success',
						}).then((result) => {
							if (result.isConfirmed) {
								axios.get(`http://localhost:8000/api/userplanet/${localStorage.getItem('idUser')}`)
									.then((response) => {
										setPlanets(response.data.data);
										setIsLoading(false);
									})
									.catch((error) => {
										console.log(error);
									});
							}
						});
					})
					.catch((error) => {
						console.log(error);
						Swal.fire('Error!', 'There was an error deleting data!', 'error');
					});
			}
		});
	};

	const deleteDataStar = (idFavStar, starName, e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Delete User',
			text: `Are you sure you want to remove ${starName} from your favorites list?`,
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		}).then(async (result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:8000/api/deletefavstar/${idFavStar}`)
					.then(() => {
						Swal.fire({
							title: 'Success!',
							text: `Data ${starName} has been successfully removed from your favourites !`,
							icon: 'success',
						}).then((result) => {
							if (result.isConfirmed) {
								axios.get(`http://localhost:8000/api/userstar/${localStorage.getItem('idUser')}`)
									.then((response) => {
										setStars(response.data.data);
										setIsLoading(false);
									})
									.catch((error) => {
										console.log(error);
									});
							}
						});
					})
					.catch((error) => {
						console.log(error);
						Swal.fire('Error!', 'There was an error deleting data!', 'error');
					});
			}
		});
	};

	return (
		<div className="flex">
			<div className="sticky">
				<SideBar />
			</div>
			<div className="p-7 flex flex-col w-full">
				<div className="flex justify-between items-center mb-10 ">
					<h1 className="text-2xl font-semibold ">My Favorite</h1>
				</div>
				{isLoading ? (
					<Loading className="mx-auto my-[100px]" type="spinningBubbles" color="#100b37" height={90} width={90} />
				) : (
					<div>
						<div>
							<h1 className="text-2xl font-semibold text-center my-6">Favorite Astronaut</h1>

							<div className="flex flex-wrap gap-10 justify-around">
								{astronauts.map((astronaut2) => (
									<div className="shadow-lg p-5 rounded-md mb-7 flex flex-col items-center justify-center" key={astronaut2.astronautId}>
										<div className="p-5 mx-auto">
											<img src={`http://localhost:8000/storage/astronauts/${astronaut2.astronautImage}`} alt="astronautImage" className="shadow-md rounded-md mx-auto w-[250px] h-[300px]" />
										</div>
										<div className="ml-4 text-black text-justify">
											<div className="flex justify-between items-center">
												<h1 className="text-2xl mb-3 font-bold">
													{astronaut2.firstName} {astronaut2.lastName}
												</h1>

												<div className="flex">
													<img src={hapus} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" onClick={(e) => deleteDataAstonaut(astronaut2.favid, astronaut2.firstName, astronaut2.lastName, e)} />
												</div>
											</div>
											<hr className="mb-3" />
											<div className="flex flex-col justify-between w-[450px] h-[260px] mb-[30px]">
												<table>
													<tr>
														<td className="w-[150px]">Position</td>
														<td className="px-5">:</td>
														<td>{astronaut2.position}</td>
													</tr>
													<tr>
														<td className="w-[150px]">Rank</td>
														<td className="px-5">:</td>
														<td>{astronaut2.rank}</td>
													</tr>
													<tr>
														<td className="w-[150px]">Time In Space</td>
														<td className="px-5">:</td>
														<td>{astronaut2.timeInSpace}</td>
													</tr>
													<tr>
														<td className="w-[150px]">Number Of Mission</td>
														<td className="px-5">:</td>
														<td>{astronaut2.numberOfMissions}</td>
													</tr>
													<tr>
														<td className="w-[150px]">Mission</td>
														<td className="px-5">:</td>
														<td>{astronaut2.missions}</td>
													</tr>
													<tr>
														<td className="w-[150px]">Education</td>
														<td className="px-5">:</td>
														<td>{astronaut2.education}</td>
													</tr>
												</table>
												<div>
													<Link to={`/detailAstronautLogin/${astronaut2.astronautId}`}>
														<button className="bg-[#100b37] text-white p-2 mt-[15px] rounded-md w-[150px]">Detail</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div>
							<h1 className="text-2xl font-semibold text-center my-6">Favorite Rocket</h1>

							<div className="flex flex-wrap gap-10 justify-around">
								{rockets.map((rocket) => (
									<div className="shadow-lg p-5 rounded-md mb-7 flex flex-col items-center justify-center" key={rocket.rocketId}>
										<div className="p-5 mx-auto">
											<img src={`http://localhost:8000/storage/rockets/${rocket.rocketImage}`} alt="astronautImage" className="shadow-md rounded-md mx-auto w-[250px] h-[300px]" />
										</div>
										<div className="ml-4 text-black text-justify">
											<div className="flex justify-between items-center">
												<h1 className="text-2xl mb-3 font-bold">{rocket.rocketName}</h1>

												<div className="flex">
													<img src={hapus} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" onClick={(e) => deleteDataRocket(rocket.favIdRocket, rocket.rocketName, e)} />
												</div>
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
												<div>
													<Link to={`/detailRocketLogin/${rocket.rocketId}`}>
														<button className="bg-[#100b37] text-white p-2 mt-[15px] rounded-md w-[150px]">Detail</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div>
							<h1 className="text-2xl font-semibold text-center my-6">Favorite Planet</h1>

							<div className="flex flex-wrap gap-10 justify-around">
								{planets.map((planet) => (
									<div className="shadow-lg p-5 rounded-md mb-7 flex flex-col items-center justify-center" key={planet.planetId}>
										<div className="p-5 mx-auto">
											<img src={`http://localhost:8000/storage/planets/${planet.planetImage}`} alt="astronautImage" className="shadow-md rounded-md mx-auto w-[240px] h-[240px]" />
										</div>
										<div className="ml-4 text-black text-justify">
											<div className="flex justify-between items-center">
												<h1 className="text-2xl mb-3 font-bold">{planet.planetName}</h1>

												<div className="flex">
													<img src={hapus} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" onClick={(e) => deleteDataPlanet(planet.favIdPlanet, planet.planetName, e)} />
												</div>
											</div>
											<hr className="mb-3" />
											<div className="flex flex-col justify-between w-[450px] h-[260px] mb-[30px]">
												<table>
													<tr>
														<td className="w-[200px]">Alternative Name</td>
														<td className="px-5">:</td>
														<td>{planet.planetAlternativeName}</td>
													</tr>
													<tr>
														<td className="w-[200px]">Surface Area</td>
														<td className="px-5">:</td>
														<td>{planet.planetSurfaceArea}</td>
													</tr>
													<tr>
														<td className="w-[200px]">Volume</td>
														<td className="px-5">:</td>
														<td>{planet.planetVolume}</td>
													</tr>
													<tr>
														<td className="w-[200px]">Mass</td>
														<td className="px-5">:</td>
														<td>{planet.planetMass}</td>
													</tr>
													<tr>
														<td className="w-[200px]">Gravity</td>
														<td className="px-5">:</td>
														<td>{planet.planetGravity}</td>
													</tr>
												</table>
												<div>
													<Link to={`/detailPlanetLogin/${planet.planetId}`}>
														<button className="bg-[#100b37] text-white p-2 mt-[15px] rounded-md w-[150px]">Detail</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div>
							<h1 className="text-2xl font-semibold text-center my-6">Favorite Star</h1>

							<div className="flex flex-wrap gap-10 justify-around">
								{stars.map((star) => (
									<div className="shadow-lg p-5 rounded-md mb-7 flex flex-col items-center justify-center" key={star.starId}>
										<div className="p-5 mx-auto">
											<img src={`http://localhost:8000/storage/stars/${star.starImage}`} alt="astronautImage" className="shadow-md rounded-md mx-auto  w-[240px] h-[240px]" />
										</div>
										<div className="ml-4 text-black text-justify">
											<div className="flex justify-between items-center">
												<h1 className="text-2xl mb-3 font-bold">{star.starName}</h1>

												<div className="flex">
													<img src={hapus} alt="edit" className="w-[20px] h-[20px] hover:cursor-pointer" onClick={(e) => deleteDataStar(star.favIdStar, star.starName, e)} />
												</div>
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
												<div>
													<Link to={`/detailStarLogin/${star.starId}`}>
														<button className="bg-[#100b37] text-white p-2 mt-[15px] rounded-md w-[150px]">Detail</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
			<ScrollToTopButton />
		</div>
	);
};

export default Favorite;
