import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import back from '../images/arrow-small-left.png';

const EditStar = () => {
	const { id } = useParams();
	const [star, setStar] = useState({
		starId: '',
		starName: '',
		starConstellation: '',
		starDeclination: '',
		starArea: '',
		starDegreeVisible: '',
		starDateVisible: '',
		starTimeVisible: '',
		starImage: null,
		starDescription: '',
	});

	function refreshPage() {
		window.location.reload();
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/showstar/${id}`)
			.then((response) => {
				setStar(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('starName', star.starName);
		formData.append('starConstellation', star.starConstellation);
		formData.append('starDeclination', star.starDeclination);
		formData.append('starArea', star.starArea);
		formData.append('starDegreeVisible', star.starDegreeVisible);
		formData.append('starDateVisible', star.starDateVisible);
		formData.append('starTimeVisible', star.starTimeVisible);
		formData.append('starImage', star.starImage);
		formData.append('starDescription', star.starDescription);

		axios.post(`http://localhost:8000/api/updatestar/${id}`, formData)
			.then((response) => {
				Swal.fire({
					title: 'Good Job!',
					icon: 'success',
					text: 'Data Star successfully changed !',
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
					text: 'Data Star failed to change !',
					confirmButtonText: 'OK',
				});
			});
	};

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setStar({ ...star, [id]: value });
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file && file.type.startsWith('image/')) {
			setStar({ ...star, starImage: file });

			const reader = new FileReader();
			reader.onload = (e) => {
				const previewImage = document.getElementById('preview-image');
				previewImage.src = e.target.result;
			};
			reader.readAsDataURL(file);
		} else {
			setStar({ ...star, starImage: null });
		}
	};

	return (
		<div className="p-10">
			<Link to={'/stars'} className="flex items-center">
				<div className="flex hover:font-bold w-[300px] items-center hover:cursor-pointer">
					<img src={back} alt="kambeli" className="w-[30px]" />
					<h1 className="text-lg ml-4">Back To Star</h1>
				</div>
			</Link>

			<div className="mt-[50px] max-w-[1000px] mx-auto">
				<h1 className="text-2xl font-bold mb-6 text-center">Edit Star</h1>

				<form className="w-full" onSubmit={handleSubmit} encType="multipart/form-data">
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Name <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="starName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={star.starName}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Constellation <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="starConstellation"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={star.starConstellation}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Declination <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="starDeclination"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={star.starDeclination}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Area <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="starArea"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={star.starArea}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Degree Visible <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="starDegreeVisible"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={star.starDegreeVisible}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Date Visible <span className="text-red-700">*</span>
						</label>
						<input
							type="date"
							id="starDateVisible"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={star.starDateVisible}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Time Visible <span className="text-red-700">*</span>
						</label>
						<input
							type="text"
							id="starTimeVisible"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							value={star.starTimeVisible}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-6">
						<label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Description <span className="text-red-700">*</span>
						</label>
						<textarea
							id="starDescription"
							rows="4"
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Describe the star here..."
							value={star.starDescription}
							onChange={handleInputChange}
						></textarea>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
							Star Image <span className="text-red-700">*</span>
						</label>
						<input
							type="file"
							id="planetImage"
							accept="image/*"
							onChange={handleImageChange}
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						/>
						<img id="preview-image" src={`http://localhost:8000/storage/stars/${star.starImage}` ? `http://localhost:8000/storage/stars/${star.starImage}` : 'Tidak ada foto'} alt="preview" className="mt-5 max-h-80 shadow-md mx-auto" />
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

export default EditStar;
