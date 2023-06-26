import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const DetailRocket = () => {
	const { id } = useParams();
	const [d, setData] = React.useState({});

	React.useEffect(() => {
		axios.get(`http://localhost:8000/api/showrocket/${id}`)
			.then((response) => {
				setData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	return (
		<div>
			<Navbar />
			<div className="mt-[100px] max-w-[1000px] mx-auto p-5 text-justify">
				<h1 className="text-center text-2xl font-bold">Detail Planet</h1>
				<hr className="mt-[20px] mb-[20px]" />
				<div className="flex items-center md:flex-row flex-col">
					<div className="w-[40%]">
						<img src={`http://localhost:8000/storage/rockets/${d.rocketImage}`} alt="astronaut" className="rounded-md shadow-md mx-auto" />
					</div>
					<div className="w-[60%] p-5">
						<blockquote className="text-2xl font-semibold">{d.rocketName}</blockquote>
						<hr className="my-[20px]" />
						<table>
							<tr>
								<td>Type</td>
								<td className="p-3">:</td>
								<td>{d.type}</td>
							</tr>
							<tr>
								<td>Place Of Origin</td>
								<td className="p-3">:</td>
								<td>{d.placeOfOrigin}</td>
							</tr>
							<tr>
								<td>Rocket Missions</td>
								<td className="p-3">:</td>
								<td>{d.rocketMissions}</td>
							</tr>
							<tr>
								<td>Used By</td>
								<td className="p-3">:</td>
								<td>{d.usedBy}</td>
							</tr>
							<tr>
								<td>Manufacture</td>
								<td className="p-3">:</td>
								<td>{d.manufracture}</td>
							</tr>
							<tr>
								<td>Launch Sites</td>
								<td className="p-3">:</td>
								<td>{d.launchSites}</td>
							</tr>
							<tr>
								<td>Total Launch</td>
								<td className="p-3">:</td>
								<td>{d.totalLaunch}</td>
							</tr>
							<tr>
								<td>First Flight</td>
								<td className="p-3">:</td>
								<td>{d.firstFlight}</td>
							</tr>
							<tr>
								<td>Last Flight</td>
								<td className="p-3">:</td>
								<td>{d.lastFlight}</td>
							</tr>
							<tr>
								<td>Status</td>
								<td className="p-3">:</td>
								<td>{d.status}</td>
							</tr>
						</table>
					</div>
				</div>
				<div className="mt-[20px]">
					<blockquote className="text-xl font-semibold mb-[10px]">Rocket Description : </blockquote>
					<p>{d.rocketDescription}</p>
				</div>
			</div>
			<ScrollToTopButton />
			<Footer />
		</div>
	);
};

export default DetailRocket;
