import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import axios from 'axios';
import Loading from 'react-loading';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

const ManageDataUser = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		document.title = 'Astrophiledream - Manage Data User';
		loadData();
	}, []);

	const loadData = () => {
		axios.get('http://localhost:8000/api/users')
			.then((response) => {
				setUsers(response.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	function refreshPage() {
		window.location.reload();
	}

	const handleDelete = (iduser, namauser, e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Delete User',
			text: `Are you sure you want to delete user data ${namauser}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		}).then((result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:8000/api/deleteuser/${iduser}`)
					.then(() => {
						Swal.fire('Success!', `Data ${namauser} successfully deleted!`, 'success');
						loadData();
					})
					.catch((error) => {
						console.log(error);
						Swal.fire('Error!', 'There was an error deleting data!', 'error');
					});
			}
		});
	};

	const filteredUsers = users.filter((user) => {
		const userNameLower = user.name.toLowerCase();
		const searchValueLower = searchValue.toLowerCase();
		return userNameLower.startsWith(searchValueLower) || userNameLower.includes(searchValueLower);
	});

	return (
		<div className="flex ">
			<div className="relative">
				<SideBar />
			</div>
			<div className="p-7 flex-1">
				<div>
					<h1 className="text-2xl font-bold text-center mb-8">Manage Data All User</h1>
				</div>
				<div className="flex-1 ">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<div className="pb-4 bg-white dark:bg-gray-900">
							<label htmlFor="table-search" className="sr-only">
								Search
							</label>
							<div className="relative mt-1">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
									</svg>
								</div>
								<input
									type="search"
									id="table-search"
									className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search data user ..."
									value={searchValue}
									onChange={(e) => setSearchValue(e.target.value)}
								/>
							</div>
						</div>

						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										No
									</th>
									<th scope="col" className="px-6 py-3">
										Name
									</th>
									<th scope="col" className="px-6 py-3">
										Email
									</th>
									<th scope="col" className="px-6 py-3 text-center">
										Image
									</th>
									<th scope="col" className="px-6 py-3 text-center">
										Gender
									</th>
									<th scope="col" className="px-6 py-3 text-center">
										Phone Number
									</th>
									<th scope="col" className="px-6 py-3 text-center">
										Role
									</th>
									<th scope="col" className="px-6 py-3 text-center">
										Action
									</th>
								</tr>
							</thead>

							{isLoading ? (
								<tbody>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<div className="flex mx-auto w-full">
											<Loading className="mx-auto my-[100px]" type="spinningBubbles" color="#100b37" height={90} width={90} />
										</div>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							) : (
								<tbody>
									{filteredUsers.map((user, index) => (
										<tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
											<td className="px-6 py-4">{index + 1}</td>
											<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{user.name}
											</th>
											<td className="px-6 py-4">{user.email}</td>
											<td className="px-6 py-4">
												{user.image !== null ? <img src={`http://localhost:8000/storage/user/${user.image}`} alt="user" className="w-[100px] h-[100px] mx-auto rounded-full shadow-lg object-contain" /> : <blockquote className="text-center">No Image</blockquote>}
											</td>
											<td className="px-6 py-4 text-center">{user.gender}</td>
											<td className="px-6 py-4 text-center">{user.phoneNumber}</td>
											<td className="px-6 py-4 text-center">{user.role}</td>
											<td className="px-6 py-4 text-center">
												<Link to={`/editdatauser/${user.id}`}>
													<button
														type="button"
														className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
													>
														Edit
													</button>
												</Link>
												<button
													type="button"
													className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
													onClick={(e) => handleDelete(user.id, user.name, e)}
												>
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							)}
						</table>
					</div>
				</div>
			</div>
			<ScrollToTopButton />
		</div>
	);
};

export default ManageDataUser;
