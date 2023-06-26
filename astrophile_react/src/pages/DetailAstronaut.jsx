import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import back from '../images/arrow-small-left.png';
import ScrollToTopButton from '../components/ScrollToTopButton';

const DetailAstronaut = () => {
	const { id } = useParams();
	const [d, setData] = React.useState({});

	React.useEffect(() => {
		axios.get(`http://localhost:8000/api/showastronaut/${id}`)
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
			<div className="mt-[120px] max-w-[1000px] mx-auto p-5 text-justify">
				<Link to={`/astronaut`}>
					<div className="flex items-center cursor-pointer hover:font-bold">
						<img src={back} alt="back" className="w-[35px] me-4" />
						<h2>Back To List Astronaut</h2>
					</div>
				</Link>
				<h1 className="text-center text-2xl font-bold">Detail Astronaut</h1>
				<hr className="mt-[20px] mb-[20px]" />
				<div className="flex items-center md:flex-row flex-col">
					<div className="w-[40%]">
						<img src={`http://localhost:8000/storage/astronauts/${d.astronautImage}`} alt="astronaut" className="rounded-md shadow-md mx-auto" />
					</div>
					<div className="w-[60%] p-5">
						<blockquote className="text-2xl font-semibold">
							{d.firstName} {d.lastName}
						</blockquote>
						<hr className="my-[20px]" />
						<table>
							<tr>
								<td>Position</td>
								<td className="p-3">:</td>
								<td>{d.position}</td>
							</tr>
							<tr>
								<td>Rank</td>
								<td className="p-3">:</td>
								<td>{d.rank}</td>
							</tr>
							<tr>
								<td>Time In Space</td>
								<td className="p-3">:</td>
								<td>{d.timeInSpace}</td>
							</tr>
							<tr>
								<td>Number Of Missions</td>
								<td className="p-3">:</td>
								<td>{d.numberOfMissions}</td>
							</tr>
							<tr>
								<td>Missions</td>
								<td className="p-3">:</td>
								<td>{d.missions}</td>
							</tr>
							<tr>
								<td>Education</td>
								<td className="p-3">:</td>
								<td>{d.education}</td>
							</tr>
							<tr>
								<td>Years Active</td>
								<td className="p-3">:</td>
								<td>{d.yearsActive}</td>
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
					<blockquote className="text-xl font-semibold mb-[10px]">Astronaut Description : </blockquote>
					<p>{d.astronautDescription}</p>
				</div>
			</div>
			<ScrollToTopButton />
			<Footer />
		</div>
	);
};

export default DetailAstronaut;
