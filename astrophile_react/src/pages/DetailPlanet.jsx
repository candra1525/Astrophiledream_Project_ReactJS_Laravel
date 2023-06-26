import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const DetailPlanet = () => {
	const { id } = useParams();
	const [d, setData] = React.useState({});

	React.useEffect(() => {
		axios.get(`http://localhost:8000/api/showplanet/${id}`)
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
						<img src={`http://localhost:8000/storage/planets/${d.planetImage}`} alt="planet" className="rounded-md shadow-md mx-auto" />
					</div>
					<div className="w-[60%] p-5">
						<blockquote className="text-2xl font-semibold">{d.planetName}</blockquote>
						<hr className="my-[20px]" />
						<table>
							<tr>
								<td>Planet Alternative Name</td>
								<td className="p-3">:</td>
								<td>{d.planetAlternativeName}</td>
							</tr>
							<tr>
								<td>Planet Surface Area</td>
								<td className="p-3">:</td>
								<td>{d.planetSurfaceArea}</td>
							</tr>
							<tr>
								<td>Planet Volume</td>
								<td className="p-3">:</td>
								<td>{d.planetVolume}</td>
							</tr>
							<tr>
								<td>Planet Mass</td>
								<td className="p-3">:</td>
								<td>{d.planetMass}</td>
							</tr>
							<tr>
								<td>Planet Gravity</td>
								<td className="p-3">:</td>
								<td>{d.planetGravity}</td>
							</tr>
						</table>
					</div>
				</div>
				<div className="mt-[20px]">
					<blockquote className="text-xl font-semibold mb-[10px]">Planet Description : </blockquote>
					<p>{d.planetDescription}</p>
				</div>
			</div>
			<ScrollToTopButton />
			<Footer />
		</div>
	);
};

export default DetailPlanet;
