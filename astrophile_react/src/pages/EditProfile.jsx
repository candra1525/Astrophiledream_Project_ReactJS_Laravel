import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Swal from 'sweetalert2';
import back from '../images/arrow-small-left.png';
import key from '../images/key.png';

const EditProfile = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
		image: null,
		gender: '',
		phoneNumber: '',
		role: '',
	});
	const [emailTaken, setEmailTaken] = useState(false);

	function refreshPage() {
		window.location.reload();
	}

	const fetchData = async () => {
		try {
			const response = await axios.post('http://localhost:8000/api/auth/me');
			setUser(response.data);
		} catch (error) {
			localStorage.removeItem('token');
		}
	};

	useEffect(() => {
		if (!token) {
			navigate('/auth/login');
		} else {
			fetchData();
		}
	}, [navigate, token]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('name', user.name);
		formData.append('email', user.email);
		formData.append('image', user.image);
		formData.append('gender', user.gender);
		formData.append('phoneNumber', user.phoneNumber);
		formData.append('role', user.role);
		axios.post(`http://localhost:8000/api/updateuser/${localStorage.getItem('idUser')}`, formData)
			.then((response) => {
				Swal.fire({
					title: 'Good Job!',
					icon: 'success',
					text: 'Data Profile berhasil di Ubah',
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						refreshPage();
					}
				});
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const errors = error.response.data.errors;
					if (errors.email && errors.email.includes('already taken')) {
						setEmailTaken(true);
					}
				}
			});
	};

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setUser({ ...user, [id]: value });
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file && file.type.startsWith('image/')) {
			setUser({ ...user, image: file });

			const reader = new FileReader();
			reader.onload = (e) => {
				const previewImage = document.getElementById('preview-image');
				previewImage.src = e.target.result;
			};
			reader.readAsDataURL(file);
		} else {
			setUser({ ...user, image: null });
		}
	};

	// Password
	const handleChangePassword = async () => {
		const { value: password } = await Swal.fire({
			title: 'Enter your password',
			input: 'password',
			inputLabel: 'Please enter your password',
			inputPlaceholder: 'Enter your password',
			inputAttributes: {
				autocapitalize: 'off',
				autocorrect: 'off',
			},
		});

		if (password) {
			axios.post(`http://localhost:8000/api/comparepassworduser/${localStorage.getItem('idUser')}`, { password })
				.then((response) => {
					Swal.fire({
						title: 'Change Password',
						html: `<input type="password" id="password" class="swal2-input" placeholder="Password" >
							   <input type="password" id="confirmPassword" class="swal2-input" placeholder="Confirm Password" >`,
						confirmButtonText: 'Change',
						focusConfirm: false,
						preConfirm: () => {
							const passwordInput = Swal.getPopup().querySelector('#password');
							const confirmPasswordInput = Swal.getPopup().querySelector('#confirmPassword');

							if (!confirmPasswordInput.value || !passwordInput.value) {
								Swal.showValidationMessage(`Please enter both password and confirmPassword`);
							}

							return {
								password: passwordInput.value,
								confirmPassword: confirmPasswordInput.value,
							};
						},
					}).then((result) => {
						if (result.isConfirmed) {
							const { password, confirmPassword } = result.value;
							if (password === confirmPassword) {
								const formData = new FormData();
								formData.append('name', user.name);
								formData.append('email', user.email);
								formData.append('image', user.image);
								formData.append('gender', user.gender);
								formData.append('phoneNumber', user.phoneNumber);
								formData.append('role', user.role);
								formData.append('password', confirmPassword);
								axios.post(`http://localhost:8000/api/updateuser/${localStorage.getItem('idUser')}`, formData)
									.then((response) => {
										Swal.fire({
											title: 'Good Job!',
											icon: 'success',
											text: 'Your password successfully changes, Please re-login !',
											confirmButtonText: 'OK',
										}).then((result) => {
											localStorage.removeItem('token');
											refreshPage();
										});
									})
									.catch((error) => {
										if (error.response && error.response.status === 422) {
											const errors = error.response.data.errors;
											if (errors.email && errors.email.includes('already taken')) {
												setEmailTaken(true);
											}
										}
									});
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Oops...',
									text: 'Password and password confirmation are not the same !',
								});
							}
						}
					});
				})
				.catch((error) => {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Your password is wrong!',
					});
				});
		}
	};

	return (
		<div className="flex">
			<div className="relative">
				<SideBar />
			</div>
			<div className="p-7 flex-1">
				<Link to="/profiles" className="flex w-[200px] items-center hover:font-bold hover:underline ease-out duration-300 ">
					<img src={back} alt="back" className="w-[30px] mr-5" />
					<p>Back to My Profile</p>
				</Link>

				<div className="flex justify-between items-center mt-10 mb-10 w-full">
					<div className="flex justify-between items-center w-full">
						<h1 className="text-2xl mx-auto font-semibold">Edit My Profile</h1>
					</div>
				</div>
				{Object.keys(user).length !== 0 ? (
					<div key={user.id} className="max-w-[1000px] mx-auto">
						<div className="w-full flex flex-col justify-center">
							<form className="w-full" onSubmit={handleSubmit} encType="multipart/form-data">
								<div className="mb-6">
									<img id="preview-image" src={`http://localhost:8000/storage/user/${user.image}` ? `http://localhost:8000/storage/user/${user.image}` : 'Tidak ada foto'} alt="preview" className="mt-5 h-[300px] w-[300px] shadow-lg mx-auto rounded-full " />
									<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white mt-10">
										Change User Image
									</label>
									<input
										type="file"
										id="image"
										accept="image/*"
										onChange={handleImageChange}
										placeholder={user.image}
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
									/>
								</div>

								<div className="mb-6">
									<label htmlFor="fullname" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
										Fullname <span className="text-red-700">*</span>
									</label>
									<input
										type="text"
										id="name"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
										required
										value={user.name}
										onChange={handleInputChange}
									/>
								</div>

								<div className="mb-6">
									<label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
										Email <span className="text-red-700">*</span>
									</label>
									<input
										type="text"
										id="email"
										className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${
											emailTaken ? 'border-red-500' : ''
										}`}
										required
										value={user.email}
										onChange={handleInputChange}
									/>
									{emailTaken && <p className="text-red-500 text-sm mt-1">Email already taken.</p>}
								</div>

								<div className="mb-6">
									<label htmlFor="gender" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
										Gender<span className="text-red-700">*</span>
									</label>
									<select
										name="gender"
										id="gender"
										value={user.gender}
										onChange={handleInputChange}
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
										required
									>
										<option value="">== Select ==</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
								</div>

								<div className="mb-6">
									<label htmlFor="phoneNumber" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
										Phone Number <span className="text-red-700">*</span>
									</label>
									<input
										type="text"
										id="phoneNumber"
										value={user.phoneNumber}
										onChange={handleInputChange}
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
										required
									/>
								</div>

								<div className="mb-6 flex justify-end">
									<button type="button" className="w-[250px] bg-green-500 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-around" onClick={handleChangePassword}>
										<img src={key} alt="key" className="w-5 h-5 rotate-[180deg] " />
										<blockquote className="mr-[15px]">Change Password</blockquote>
									</button>
								</div>

								<button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded focus:outline-none focus:shadow-outline" disabled={emailTaken}>
									Update
								</button>
							</form>
						</div>
						<div className="mt-[100px] flex justify-around"></div>
					</div>
				) : (
					<p>No user data available.</p>
				)}
			</div>
		</div>
	);
};

export default EditProfile;
