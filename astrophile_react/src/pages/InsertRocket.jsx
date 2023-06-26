import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import back from '../images/arrow-small-left.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const InsertRocket = () => {
	const [previewImage, setPreviewImage] = useState(null);

	function refreshPage() {
		window.location.reload();
	}
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setPreviewImage(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Ambil nilai input dari elemen form
		let rocketName = document.getElementById('rocketName').value;
		let type = document.getElementById('type').value;
		let placeOfOrigin = document.getElementById('placeOfOrigin').value;
		let rocketMissions = document.getElementById('rocketMissions').value;
		let usedBy = document.getElementById('usedBy').value;
		let manufacture = document.getElementById('manufracture').value;
		let launchSites = document.getElementById('launchSites').value;
		let totalLaunch = document.getElementById('totalLaunch').value;
		let firstFlight = document.getElementById('firstFlight').value;
		let lastFlight = document.getElementById('lastFlight').value;
		let status = document.getElementById('status').value;
		let rocketDescription = document.getElementById('rocketDescription').value;
		let rocketImage = document.getElementById('file_input').files[0];

		// Buat objek FormData untuk mengirim data gambar dan data teks
		const formData = new FormData();
		formData.append('rocketName', rocketName);
		formData.append('type', type);
		formData.append('placeOfOrigin', placeOfOrigin);
		formData.append('rocketMissions', rocketMissions);
		formData.append('usedBy', usedBy);
		formData.append('manufracture', manufacture);
		formData.append('launchSites', launchSites);
		formData.append('totalLaunch', totalLaunch);
		formData.append('firstFlight', firstFlight);
		formData.append('lastFlight', lastFlight);
		formData.append('status', status);
		formData.append('rocketDescription', rocketDescription);
		formData.append('rocketImage', rocketImage);

		try {
			await axios.post('http://localhost:8000/api/addrocket', formData);
			Swal.fire({
				title: 'Good Job !',
				icon: 'success',
				text: 'Rocket data successfully saved !',
				confirmButtonText: 'OK',
			}).then((result) => {
				if (result.isConfirmed) {
					refreshPage();
				}
			});
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="p-[30px]">
			<div className=" hover:font-bold hover:underline w-[100px]">
				<Link to={'/rockets'} className="flex w-[100px]">
					<img src={back} alt="back" className="w-[25px] me-3" />
					<blockquote>Back</blockquote>
				</Link>
			</div>

			<div className="p-7 flex-1 ">
				<div className="flex justify-between items-center mb-10 ">
					<h1 className="text-2xl font-semibold ">Insert Data Rocket</h1>
				</div>

				<form className="flex lg:flex-row flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
					<div className="w-full px-[20px]">
						<div className="mb-6">
							<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
								Rocket Name <span className="text-red-700">*</span>
							</label>
							<input
								type="text"
								id="rocketName"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
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
							/>
						</div>
					</div>
					<div className="w-full px-[20px] ">
						<div className="mb-6">
							<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
								Total Launch <span className="text-red-700">*</span>
							</label>
							<input
								type="text"
								id="totalLaunch"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
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
								placeholder="Describe the astronaut here..."
							></textarea>
						</div>
						<div className="mb-6">
							<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
								Upload Image Rocket
							</label>
							<input
								className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								aria-describedby="file_input_help"
								id="file_input"
								type="file"
								name="rocketImage"
								onChange={handleImageChange} // Tambahkan event handler untuk pemilihan gambar
							/>
							<p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
								PNG, JPG, or JPEG
							</p>
						</div>
						{/* Preview Gambar */}
						{previewImage && (
							<div className="mb-6">
								<label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Preview Image</label>
								<img src={previewImage} alt="Preview" className="max-w-[200px] mb-2" />
							</div>
						)}

						<button
							type="submit"
							class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						>
							Save Data
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default InsertRocket;
