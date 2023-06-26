import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import dashboard from './../images/dashboard.png';
import astronaut from './../images/astronaut2.png';
import rocket from './../images/shuttle.png';
import planet from './../images/planets.png';
import star from './../images/stars.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from 'react-loading';
import Footer from '../components/Footer';
import About from '../components/About';
import fav from '../images/fav.png';
import ScrollToTopButton from '../components/ScrollToTopButton';
import settings from '../images/settings.png';

const Dashboard = () => {
	const [user, setUser] = useState({});
	const [showAlert, setShowAlert] = useState(true);

	// Ambil Token
	const token = localStorage.getItem('token');

	//loading
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			await axios.post('http://localhost:8000/api/auth/me').then((response) => {
				setUser(response.data);
				localStorage.setItem('idUser', response.data.id);
			});
		} catch (error) {
			localStorage.removeItem('token');
		} finally {
			setIsLoading(false);
		}
	};

	const handleCloseAlert = () => {
		setShowAlert(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex latar-belakang">
			<div className="sticky">
				<SideBar />
			</div>
			<div className="w-full">
				<div className="p-8 mt-5 font-semibold flex-1 ">
					<div className="flex justify-between">
						<div className="flex items-center gap-4">
							<img src={dashboard} alt="dashboard" className="w-7" />
							<h1 className="text-xl font-extrabold text-white">Dashboard</h1>
						</div>
						<Link to={'/profiles'}>
							<div className="flex items-center gap-4 mr-10 hover:underline">
								<img src={settings} alt="dashboard" className="w-7" />
								<h1 className="font-extrabold text-white md:flex hidden">Settings</h1>
							</div>
						</Link>
					</div>
					<div className="mt-10">
						<h1 className="text-xl text-white">Welcome, {user.name}👋🏻</h1>
						<hr className="mt-3 mb-3 w-[200px]" />
						<h2 className="text-white">
							Email :{' '}
							<a href={`mailto:${user.email}`} className="underline text-white">
								{user.email}
							</a>
						</h2>
					</div>
					{user.image === null && showAlert && (
						<div id="alert-4" class="flex p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 mt-6" role="alert">
							<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
							</svg>
							<span class="sr-only">Info</span>
							<div class="ml-3 text-sm font-medium">
								Your account doesn't have a profile photo yet. Please complete your profile photo in the{' '}
								<Link to={'/profiles'} className="font-semibold underline hover:no-underline">
									profile section
								</Link>
							</div>
							<button
								type="button"
								className="ml-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
								onClick={handleCloseAlert}
								aria-label="Close"
							>
								<span class="sr-only">Close</span>
								<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</button>
						</div>
					)}

					<div className="mt-10 flex flex-col mx-auto">
						<div className="max-w-[1500px] mx-auto mb-7 ">
							<h1 className=" text-center text-3xl text-white">Quick Action</h1>
							<hr className="mt-3 max-w-[500px] mx-auto h-2" />
						</div>
						<div className=" flex lg:flex-row flex-wrap justify-center flex-col lg:gap-28 gap-10 mx-auto max-w-[1500px] p-10">
							<div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="p-5">
									<img src={astronaut} alt="astronaut" className="w-32 mx-auto animated-image" />
									<h2 className="text-[#141824] text-center mt-8 mb-5">Astronaut</h2>
									<div className="w-full flex justify-center">
										<Link
											to={'/astronauts'}
											className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Go
											<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="p-5">
									<img src={rocket} alt="rocket" className="w-32 mx-auto animated-image" />
									<h2 className="text-[#141824] text-center mt-8 mb-5">Rocket</h2>
									<div className="w-full flex justify-center">
										<Link
											to={'/rockets'}
											className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Go
											<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="p-5">
									<img src={planet} alt="planet" className="w-32 mx-auto animated-image" />
									<h2 className="text-[#141824] text-center mt-8 mb-5">Planet</h2>
									<div className="w-full flex justify-center">
										<Link
											to={'/planets'}
											className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Go
											<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="p-5">
									<img src={star} alt="star" className="w-32 mx-auto animated-image" />
									<h2 className="text-[#141824] text-center mt-8 mb-5">Star</h2>
									<div className="w-full flex justify-center">
										<Link
											to={'/stars'}
											className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Go
											<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<div className="p-5">
									<img src={fav} alt="fav" className="w-32 mx-auto animated-image" />
									<h2 className="text-[#141824] text-center mt-8 mb-5">Favorite</h2>
									<div className="w-full flex justify-center">
										<Link
											to={'/favorites'}
											className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Go
											<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<About />
				<Footer />
				<ScrollToTopButton />
			</div>
		</div>
	);
};

export default Dashboard;
