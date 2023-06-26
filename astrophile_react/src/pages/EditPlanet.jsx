import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import back from '../images/arrow-small-left.png';

const EditPlanet = () => {
	const { id } = useParams();
	const [planet, setPlanet] = useState({
		planetId: '',
		planetName: '',
		planetAlternativeName: '',
		planetSurfaceArea: '',
		planetVolume: '',
		planetMass: '',
		planetGravity: '',
		planetImage: null,
		planetDescription: '',
	});

	function refreshPage() {
		window.location.reload();
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/showplanet/${id}`)
			.then((response) => {
				setPlanet(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	// API EDIT DATA
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('planetName', planet.planetName);
		formData.append('planetAlternativeName', planet.planetAlternativeName);
		formData.append('planetSurfaceArea', planet.planetSurfaceArea);
		formData.append('planetVolume', planet.planetVolume);
		formData.append('planetMass', planet.planetMass);
		formData.append('planetGravity', planet.planetGravity);
		formData.append('planetImage', planet.planetImage);
		formData.append('planetDescription', planet.planetDescription);

		axios.post(`http://localhost:8000/api/updateplanet/${id}`, formData)
			.then((response) => {
				Swal.fire({
					title: 'Good Job!',
					icon: 'success',
					text: 'Planet Data successfully changed',
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
					text: 'Planet Data failed to change !',
					confirmButtonText: 'OK',
				});
			});
	};

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setPlanet({ ...planet, [id]: value });
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file && file.type.startsWith('image/')) {
			setPlanet({ ...planet, planetImage: file });

			const reader = new FileReader();
			reader.onload = (e) => {
				const previewImage = document.getElementById('preview-image');
				previewImage.src = e.target.result;
			};
			reader.readAsDataURL(file);
		} else {
			setPlanet({ ...planet, planetImage: null });
		}
	};

	return (
		<div className="p-10">
			<Link to={'/planets'} className="flex items-center">
				<div className="flex hover:font-bold w-[300px] items-center hover:cursor-pointer">
					<img src={back} alt="kambeli" className="w-[30px]" />
					<h1 className="text-lg ml-4">Back To Planet</h1>
				</div>
			</Link>

			<div className="mt-[50px] max-w-[1000px] mx-auto">
				<h1 className="text-2xl font-bold mb-6 text-center">Edit Planet</h1>

				<form className="w-full" onSubmit={handleSubmit} encType="multipart/form-data">
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Planet Name <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="planetName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={planet.planetName}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Planet Alternative Name <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="planetAlternativeName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={planet.planetAlternativeName}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Planet Surface Area <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="planetSurfaceArea"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={planet.planetSurfaceArea}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Planet Volume <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="planetVolume"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={planet.planetVolume}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Planet Mass <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="planetMass"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={planet.planetMass}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Planet Gravity <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="planetGravity"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={planet.planetGravity}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Planet Description <span className="text-red-700">*</span>
						</label>
						<textarea
							id="planetDescription"
							rows="4"
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Describe the planet here..."
							value={planet.planetDescription}
							onChange={handleInputChange}
						></textarea>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Planet Image <span className="text-red-700">*</span>
						</label>
						<input
							type="file"
							id="planetImage"
							accept="image/*"
							onChange={handleImageChange}
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						/>
						<img id="preview-image" src={`http://localhost:8000/storage/planets/${planet.planetImage}` ? `http://localhost:8000/storage/planets/${planet.planetImage}` : 'Tidak ada foto'} alt="preview" className="mt-5 max-h-80 shadow-md mx-auto" />
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

export default EditPlanet;
