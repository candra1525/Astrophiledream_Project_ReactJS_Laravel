import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SideBar from '../components/SideBar';
import back from '../images/arrow-small-left.png';
import ScrollToTopButton from '../components/ScrollToTopButton';

const DetailStar2 = () => {
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
		<div className="flex">
			<div className="relative">
				<SideBar />
			</div>
			<div className="p-7 flex-1">
				<div className="max-w-[1000px] mx-auto p-5 text-justify">
					<Link to="/rockets" className="flex w-[200px] items-center hover:font-bold">
						<img src={back} alt="back" className="w-[30px] mr-5" />
						<p>Back to Star</p>
					</Link>

					<div className="flex items-center md:flex-row flex-col">
						<div className="w-[40%]">
							<img src={`http://localhost:8000/storage/stars/${d.starImage}`} alt="astronaut" className="rounded-md shadow-md mx-auto" />
						</div>
						<div className="w-[60%] p-10">
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
			</div>
			<ScrollToTopButton />
		</div>
	);
};

export default DetailStar2;
