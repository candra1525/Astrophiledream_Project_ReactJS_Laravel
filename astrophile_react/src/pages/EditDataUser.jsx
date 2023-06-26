import React, { useEffect, useState } from 'react';
import back from '../images/arrow-small-left.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditDataUser = () => {
	const { id } = useParams();
	const [user, setUser] = useState({
		name: '',
		email: '',
		gender: '',
		phoneNumber: '',
		role: '',
		image: null,
	});

	function refreshPage() {
		window.location.reload();
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/showuser/${id}`)
			.then((response) => {
				setUser(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('name', user.name);
		formData.append('email', user.email);
		formData.append('gender', user.gender);
		formData.append('phoneNumber', user.phoneNumber);
		formData.append('role', user.role);
		formData.append('image', user.image);

		axios.post(`http://localhost:8000/api/updateuser/${id}`, formData)
			.then((response) => {
				Swal.fire({
					title: 'Good Job!',
					icon: 'success',
					text: 'The user role has been successfully changed',
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						refreshPage();
					}
				});
			})
			.catch((error) => {
				Swal.fire({
					title: 'Opps..!',
					icon: 'error',
					text: 'The user role failed to change !',
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						refreshPage();
					}
				});
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

	return (
		<div className="p-[67px] ">
			<Link to={`/managedata`}>
				<div className="flex hover:font-bold w-[300px] items-center hover:cursor-pointer">
					<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1 rotate-180 text-black font-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
					<h1 className="text-lg ml-4 text-black font-semibold">Back To Manage Data User</h1>
				</div>
			</Link>
			<div className="mt-[50px] bg_custom max-w-[1200px] mx-auto p-10 rounded-md ">
				<h1 className="text-center font-bold text-3xl text-black">Edit Role User</h1>
				<form className="flex max-w-[1000px] mx-auto" onSubmit={handleSubmit} encType="multipart/form-data">
					<div className="w-full px-[20px]">
						<div className="flex justify-center my-20 animated-image">
							<img id="preview-image" src={`http://localhost:8000/storage/user/${user.image}`} alt="Preview" className="mt-2 w-[200px] h-[200px] object-cover rounded-full shadow-md" />
						</div>
						<div className="mb-6">
							<label htmlFor="name" className="block mb-2 text-sm font-bold text-black">
								Fullname <span className="text-red-700">*</span>
							</label>
							<input
								type="text"
								id="name"
								value={user.name}
								onChange={handleInputChange}
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
								disabled
							/>
						</div>
						<div className="mb-6">
							<label htmlFor="email" className="block mb-2 text-sm font-bold text-black">
								Email <span className="text-red-700">*</span>
							</label>
							<input
								type="text"
								id="email"
								value={user.email}
								onChange={handleInputChange}
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
								disabled
							/>
						</div>
						<div className="mb-6">
							<label htmlFor="gender" className="block mb-2 text-sm font-bold text-black">
								Gender <span className="text-red-700">*</span>
							</label>
							<input
								type="text"
								id="gender"
								value={user.gender}
								onChange={handleInputChange}
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
								disabled
							/>
						</div>
						<div className="mb-6">
							<label htmlFor="phoneNumber" className="block mb-2 text-sm font-bold text-black">
								Phone Number <span className="text-red-700">*</span>
							</label>
							<input
								type="text"
								id="phoneNumber"
								value={user.phoneNumber}
								onChange={handleInputChange}
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
								disabled
							/>
						</div>
						<div className="mb-6">
							<label htmlFor="role" className="block mb-2 text-sm font-bold text-black">
								Role<span className="text-red-700">*</span>
							</label>
							<select
								name="role"
								id="role"
								value={user.role}
								onChange={handleInputChange}
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
							>
								<option value="">== Select ==</option>
								<option value="admin">Admin</option>
								<option value="user">User</option>
							</select>
						</div>
						<div className="mb-6 hidden">
							<label htmlFor="image" className="block mb-2 text-sm font-bold text-black">
								Image
							</label>
							<input
								type="file"
								id="image"
								accept="image/*"
								onChange={handleImageChange}
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							/>
						</div>

						<div className="flex justify-end w-full">
							<button type="submit" className="w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded focus:outline-none focus:shadow-outline">
								Update
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditDataUser;
