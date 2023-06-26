import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const DetailStar = () => {
	const { id } = useParams();
	const [d, setData] = React.useState({});

	React.useEffect(() => {
		axios.get(`http://localhost:8000/api/showstar/${id}`)
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
				<h1 className="text-center text-2xl font-bold">Detail Star</h1>
				<hr className="mt-[20px] mb-[20px]" />
				<div className="flex items-center md:flex-row flex-col">
					<div className="w-[40%]">
						<img src={`http://localhost:8000/storage/stars/${d.starImage}`} alt="astronaut" className="rounded-md shadow-md mx-auto" />
					</div>
					<div className="w-[60%] p-5">
						<blockquote className="text-2xl font-semibold">{d.starName}</blockquote>
						<hr className="my-[20px]" />
						<table>
							<tr>
								<td>Manufacture</td>
								<td className="p-3">:</td>
								<td>{d.starConstellation}</td>
							</tr>
							<tr>
								<td>Launch Sites</td>
								<td className="p-3">:</td>
								<td>{d.starDeclination}</td>
							</tr>
							<tr>
								<td>Total Launch</td>
								<td className="p-3">:</td>
								<td>{d.starArea}</td>
							</tr>
							<tr>
								<td>First Flight</td>
								<td className="p-3">:</td>
								<td>{d.starDegreeVisible}</td>
							</tr>
							<tr>
								<td>Last Flight</td>
								<td className="p-3">:</td>
								<td>{d.starDateVisible}</td>
							</tr>
							<tr>
								<td>Status</td>
								<td className="p-3">:</td>
								<td>{d.starTimeVisible}</td>
							</tr>
						</table>
					</div>
				</div>
				<div className="mt-[20px]">
					<blockquote className="text-xl font-semibold mb-[10px]">Star Description : </blockquote>
					<p>{d.starDescription}</p>
				</div>
			</div>
			<ScrollToTopButton />
			<Footer />
		</div>
	);
};

export default DetailStar;
