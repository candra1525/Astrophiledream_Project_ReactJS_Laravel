import React, { useEffect, useState } from 'react';
import astronaut from './../images/astronaut.png';
import videoBackground from './../video/ruang-angkasa-2381.mp4';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Validasi
	const [validation, setValidation] = useState([]);

	// nav
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/dashboard');
		}
	}, []);

	// handle
	const loginHandle = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append('email', email);
		formData.append('password', password);

		await axios
			.post('http://localhost:8000/api/auth/login', formData)
			.then((response) => {
				Swal.fire({
					title: 'Login Success',
					text: 'Yeah, you have successfully logged in !',
					icon: 'success',
				});
				localStorage.setItem('token', response.data.access_token);
				localStorage.setItem('open', true);
				localStorage.setItem('manageData', false);
				navigate('/dashboard');
			})
			.catch((error) => {
				setValidation(error.response.data);
				Swal.fire({
					title: 'Login Failed',
					text: 'Email or password wrong !',
					icon: 'error',
				});
			});
	};

	return (
		<>
			<div className="w-full h-screen flex items-center justify-center video-background">
				<video autoPlay loop muted>
					<source src={videoBackground} type="video/mp4" />
				</video>
				<div className="md:w-[1200px] md:h-[700px] rounded-lg w-[500px] h-[700px] flex z-40 bg_custom">
					<div className="w-full p-6 flex-col items-center justify-center lg:flex hidden">
						<img src={astronaut} alt="astro" className="w-[200px] animated-image" />
						<h1 className=" text-3xl font-bold text-white text-center mt-10">Astrophiledream</h1>
					</div>
					<div className="w-full p-6 flex flex-col items-center justify-center">
						<section className="w-full">
							<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
								<Link to="/" className="flex items-center mb-10 text-2xl font-semibold text-white">
									<img className="w-8 h-8 mr-7 " src={astronaut} alt="logo" />
									Astrophiledream
								</Link>
								<div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
									<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
										<h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">Sign in to your account</h1>
										{validation.error && (
											<div className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
												<svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
												</svg>
												<span className="sr-only">Info</span>
												<div>{validation.error}</div>
											</div>
										)}

										<form className="space-y-4 md:space-y-6" onSubmit={loginHandle} method="post">
											<div className="flex flex-col">
												<div>
													<label htmlFor="email" className="block mb-2 text-sm text-white font-bold">
														Your email
													</label>
													<input
														type="email"
														name="email"
														id="email"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
														placeholder="name@company.com"
													/>
													{validation.email && <p className="text-red-600">{validation.email[0]}</p>}
												</div>
											</div>
											<div className="flex flex-col mt-5">
												<div>
													<label htmlFor="password" className="block mb-2 text-sm text-white font-bold">
														Password
													</label>
													<input
														type="password"
														name="password"
														id="password"
														value={password}
														onChange={(e) => setPassword(e.target.value)}
														placeholder="••••••••"
														className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													/>
													{validation.password && <p className="text-red-600">{validation.password[0]}</p>}
												</div>
											</div>

											<button type="submit" className="bg-[#385be5] mt-5 p-4 text-white font-bold rounded-md w-full">
												Login
											</button>
											<p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-5">
												Don’t have an account yet?{' '}
												<Link to="/auth/register" className="font-bold text-white text-primary-600 dark:text-primary-500 hover:underline">
													Sign up
												</Link>
											</p>
											<p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
												Return to{' '}
												<Link to="/" className="font-bold text-white text-primary-600 dark:text-primary-500 hover:underline">
													Home Page
												</Link>
											</p>
										</form>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
