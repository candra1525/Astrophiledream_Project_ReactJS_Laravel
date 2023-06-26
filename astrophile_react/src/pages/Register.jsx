import React, { useEffect, useState } from 'react';
import astronaut from './../images/astronaut.png';
import videoBackground from './../video/ruang-angkasa-2381.mp4';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
	useEffect(() => {
		document.title = 'Astrophiledream - Register';
	}, []);

	const [nama, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');

	const role = 'user';

	// validasi
	const [validation, setValidation] = useState([]);

	// nav
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/dashboard');
		}
	}, []);

	function getValueGender() {
		const selectedOption = document.querySelector('input[name="gender"]:checked');
		const value = selectedOption ? selectedOption.value : null;
		return value;
	}

	// handle
	const registerHandler = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append('name', nama);
		formData.append('email', email);
		formData.append('gender', getValueGender());
		formData.append('phoneNumber', phoneNumber);
		formData.append('role', role);
		formData.append('password', password);
		formData.append('password_confirmation', passwordConfirmation);

		await axios
			.post('http://localhost:8000/api/auth/register', formData)
			.then(() => {
				Swal.fire({
					title: 'Register Success',
					text: 'Yeah, You have successfully registered, please login',
					icon: 'success',
				}).then((result) => {
					if (result.isConfirmed) {
						navigate('/auth/login');
					}
				});
			})
			.catch((error) => {
				setValidation(error.response.data);
			});
	};

	return (
		<>
			<div className="w-full h-screen flex items-center justify-center video-background">
				<video autoPlay loop muted>
					<source src={videoBackground} type="video/mp4" />
				</video>
				<div className="md:w-[1400px] md:h-[900px] rounded-lg w-[500px] h-[700px] flex z-40 bg_custom">
					<div className="w-full p-6  flex-col items-center justify-center lg:flex hidden">
						<img src={astronaut} alt="astro" className="w-[200px] animated-image" />
						<h1 className=" text-3xl font-bold text-white text-center mt-10">Astrophiledream</h1>
					</div>
					<div className="w-full p-6 flex flex-col items-center justify-center ">
						<section className="w-full">
							<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
								<div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 dark:border-gray-700">
									<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
										<h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">Register to your account</h1>
										<form className="space-y-4 md:space-y-6" onSubmit={registerHandler} method="post">
											<div>
												<label htmlFor="name" className="block mb-2 text-sm font-bold text-white">
													Your Name
												</label>
												<input
													type="text"
													name="text"
													id="name"
													value={nama}
													onChange={(e) => setName(e.target.value)}
													className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													placeholder="Full Name"
												/>
												{validation.name && <p className="text-red-600">{validation.name[0]}</p>}
											</div>
											<div>
												<label htmlFor="email" className="block mb-2 text-sm font-bold text-white">
													Your Gender
												</label>
												<div className="flex">
													<div className="flex items-center">
														<input
															type="radio"
															name="gender"
															id="L"
															value="Male"
															className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
														/>
														<label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-white">
															Male
														</label>
													</div>
													<div className="flex items-center ml-6">
														<input
															type="radio"
															name="gender"
															id="P"
															value="Female"
															className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
														/>
														<label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-white">
															Female
														</label>
													</div>
												</div>
												{validation.gender && <p className="text-red-600">{validation.gender[0]}</p>}
											</div>
											<div>
												<label htmlFor="phoneNumber" className="block mb-2 text-sm font-bold text-white">
													Your Phone Number
												</label>
												<input
													type="number"
													name="phoneNumber"
													id="phoneNumber"
													value={phoneNumber}
													onChange={(e) => setPhoneNumber(e.target.value)}
													className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													placeholder="0812XXXXXXXX"
												/>
												{validation.phoneNumber && <p className="text-red-600">{validation.phoneNumber[0]}</p>}
											</div>
											<div>
												<label htmlFor="email" className="block mb-2 text-sm font-bold text-white">
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
											<div>
												<label htmlFor="password" className="block mb-2 text-sm font-bold text-white">
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
											<div>
												<label htmlFor="konfirmasipassword" className="block mb-2 text-sm font-bold text-white">
													Password Confirm
												</label>
												<input
													type="password"
													name="password_confirmation"
													id="password_confirmation"
													placeholder="••••••••"
													value={passwordConfirmation}
													onChange={(e) => setPasswordConfirmation(e.target.value)}
													className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												/>
											</div>

											<button type="submit" className="bg-[#385be5] mt-5 p-4 text-white font-bold rounded-md w-full">
												Register
											</button>
											<p className="text-sm font-light text-gray-500 dark:text-gray-400">
												Do you have an account?{' '}
												<Link to="/auth/login" className="font-bold text-white text-primary-600 dark:text-primary-500 hover:underline">
													Login
												</Link>
												<br />
												<br />
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

export default Register;
