import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import back from '../images/arrow-small-left.png';

const EditAstronaut = () => {
	const { id } = useParams();
	const [astro, setAstro] = useState({
		astronautId: '',
		firstName: '',
		lastName: '',
		position: '',
		rank: '',
		timeInSpace: '',
		numberOfMissions: '',
		missions: '',
		education: '',
		yearsActive: '',
		status: '',
		astronautImage: null,
		astronautDescription: '',
	});

	function refreshPage() {
		window.location.reload();
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/showastronaut/${id}`)
			.then((response) => {
				setAstro(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	// API EDIT DATA
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('firstName', astro.firstName);
		formData.append('lastName', astro.lastName);
		formData.append('position', astro.position);
		formData.append('rank', astro.rank);
		formData.append('timeInSpace', astro.timeInSpace);
		formData.append('numberOfMissions', astro.numberOfMissions);
		formData.append('missions', astro.missions);
		formData.append('education', astro.education);
		formData.append('yearsActive', astro.yearsActive);
		formData.append('status', astro.status);
		formData.append('astronautImage', astro.astronautImage);
		formData.append('astronautDescription', astro.astronautDescription);

		axios.post(`http://localhost:8000/api/updateastronaut/${id}`, formData)
			.then((response) => {
				Swal.fire({
					title: 'Good Job!',
					icon: 'success',
					text: 'Astronaut Data successfully changed !',
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
					text: 'Astronaut Data failed to change !',
					confirmButtonText: 'OK',
				});
			});
	};

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setAstro({ ...astro, [id]: value });
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file && file.type.startsWith('image/')) {
			setAstro({ ...astro, astronautImage: file });

			const reader = new FileReader();
			reader.onload = (e) => {
				const previewImage = document.getElementById('preview-image');
				previewImage.src = e.target.result;
			};
			reader.readAsDataURL(file);
		} else {
			setAstro({ ...astro, astronautImage: null });
		}
	};

	return (
		<div className="p-10">
			<Link to={'/astronauts'} className="flex items-center">
				<div className="flex hover:font-bold w-[300px] items-center hover:cursor-pointer">
					<img src={back} alt="kambeli" className="w-[30px]" />
					<h1 className="text-lg ml-4">Back To Astronaut</h1>
				</div>
			</Link>

			<div className="mt-[50px] max-w-[1000px] mx-auto">
				<h1 className="text-2xl font-bold mb-6 text-center">Edit Astronaut</h1>

				<form className="w-full" onSubmit={handleSubmit} encType="multipart/form-data">
					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							First Name <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="firstName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.firstName}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Last Name <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="lastName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.lastName}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Position <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="position"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.position}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Rank <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="rank"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.rank}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Time In Space<span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="timeInSpace"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.timeInSpace}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Number Of Missions <span className="text-red-700">*</span>
						</label>
						<input
							type="number"
							id="numberOfMissions"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.numberOfMissions}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Missions <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="missions"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.missions}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Education <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="education"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.education}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Years Active <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="yearsActive"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.yearsActive}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Status <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="status"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.status}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Astronaut Image <span className="text-red-700">*</span>
						</label>
						<input
							type="file"
							id="astronautImage"
							accept="image/*"
							onChange={handleImageChange}
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						/>
						<img id="preview-image" src={`http://localhost:8000/storage/astronauts/${astro.astronautImage}` ? `http://localhost:8000/storage/astronauts/${astro.astronautImage}` : 'Tidak ada foto'} alt="preview" className="mt-5 max-h-80 shadow-md mx-auto" />
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Astronaut Description <span className="text-red-700">*</span>
						</label>
						<textarea
							id="astronautDescription"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							value={astro.astronautDescription}
							onChange={handleInputChange}
							required
						/>
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

export default EditAstronaut;
