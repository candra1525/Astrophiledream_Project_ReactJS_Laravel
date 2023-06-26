import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import back from '../images/arrow-small-left.png';

const EditRocket = () => {
	const { id } = useParams();
	const [rocket, setRocket] = useState({
		rocketId: '',
		rocketName: '',
		type: '',
		placeOfOrigin: '',
		rocketMissions: '',
		usedBy: '',
		manufracture: '',
		launchSites: '',
		totalLaunch: '',
		firstFlight: '',
		lastFlight: '',
		status: '',
		rocketImage: null,
		rocketDescription: '',
	});

	function refreshPage() {
		window.location.reload();
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/showrocket/${id}`)
			.then((response) => {
				setRocket(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	// API EDIT DATA
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('rocketName', rocket.rocketName);
		formData.append('type', rocket.type);
		formData.append('placeOfOrigin', rocket.placeOfOrigin);
		formData.append('rocketMissions', rocket.rocketMissions);
		formData.append('usedBy', rocket.usedBy);
		formData.append('manufracture', rocket.manufracture);
		formData.append('launchSites', rocket.launchSites);
		formData.append('totalLaunch', rocket.totalLaunch);
		formData.append('firstFlight', rocket.firstFlight);
		formData.append('lastFlight', rocket.lastFlight);
		formData.append('status', rocket.status);
		formData.append('rocketImage', rocket.rocketImage);
		formData.append('rocketDescription', rocket.rocketDescription);

		axios.post(`http://localhost:8000/api/updaterocket/${id}`, formData)
			.then((response) => {
				Swal.fire({
					title: 'Good Job!',
					icon: 'success',
					text: 'Rocket data successfully changed',
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						refreshPage();
					}
				});
			})
			.catch((error) => {
				Swal.fire({
					title: 'Opps !',
					icon: 'error',
					text: 'Rocket data failed to change !',
					confirmButtonText: 'OK',
				});
			});
	};

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setRocket({ ...rocket, [id]: value });
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file && file.type.startsWith('image/')) {
			setRocket({ ...rocket, rocketImage: file });

			const reader = new FileReader();
			reader.onload = (e) => {
				const previewImage = document.getElementById('preview-image');
				previewImage.src = e.target.result;
			};
			reader.readAsDataURL(file);
		} else {
			setRocket({ ...rocket, rocketImage: null });
		}
	};

	return (
		<div className="p-10">
			<Link to={'/rockets'} className="flex items-center">
				<div className="flex hover:font-bold w-[300px] items-center hover:cursor-pointer">
					<img src={back} alt="kambeli" className="w-[30px]" />
					<h1 className="text-lg ml-4">Back To Rocket</h1>
				</div>
			</Link>

			<div className="mt-[50px] max-w-[1000px] mx-auto">
				<h1 className="text-2xl font-bold mb-6 text-center">Edit Rocket</h1>

				<form className="w-full" onSubmit={handleSubmit} encType="multipart/form-data">
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Rocket Name <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="rocketName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.rocketName}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Type <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="type"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.type}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Place Of Origin <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="placeOfOrigin"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.placeOfOrigin}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Rocket Missions <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="rocketMissions"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.rocketMissions}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Used By <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="usedBy"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.usedBy}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Manufacture <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="manufracture"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.manufracture}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Launch Sites <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="launchSites"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.launchSites}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Total Launch <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="totalLaunch"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.totalLaunch}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							First Flight <span className="text-red-700">*</span>
						</label>
						<input
							type="date"
							id="firstFlight"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.firstFlight}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Last Flight <span className="text-red-700">*</span>
						</label>
						<input
							type="date"
							id="lastFlight"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.lastFlight}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Status <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="status"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={rocket.status}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Rocket Description <span className="text-red-700">*</span>
						</label>
						<textarea
							id="rocketDescription"
							rows="4"
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Describe the rocket here..."
							value={rocket.rocketDescription}
							onChange={handleInputChange}
						></textarea>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Rocket Image <span className="text-red-700">*</span>
						</label>
						<input
							type="file"
							id="planetImage"
							accept="image/*"
							onChange={handleImageChange}
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						/>
						<img id="preview-image" src={`http://localhost:8000/storage/rockets/${rocket.rocketImage}` ? `http://localhost:8000/storage/rockets/${rocket.rocketImage}` : 'Tidak ada foto'} alt="preview" className="mt-5 max-h-80 shadow-md mx-auto" />
					</div>
					<div className="flex justify-end">
						<button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditRocket;
