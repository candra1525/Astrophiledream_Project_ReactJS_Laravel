import { useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Astronout from './pages/Astronaut';
import Rocket from './pages/Rocket';
import Planet from './pages/Planet';
import Star from './pages/Star';
import Login from './pages/Login';
import Register from './pages/Register';
import Error404 from './pages/Error404';
import Dashboard from './pages/Dashboard';
import Astronauts from './pages/Astronauts';
import Rockets from './pages/Rockets';
import Planets from './pages/Planets';
import Stars from './pages/Stars';
import Favorites from './pages/Favorites';
import Profiles from './pages/Profiles';
import DetailAstronaut from './pages/DetailAstronaut';
import DetailAstronaut2 from './pages/DetailAstronaut2';
import DetailRocket from './pages/DetailRocket';
import DetailPlanet from './pages/DetailPlanet';
import DetailStar from './pages/DetailStar';
import ProtectedRoute from './components/ProtectedRoute';
import ManageDataUser from './pages/ManageDataUser';
import InsertAstronaut from './pages/InsertAstronaut';
import InsertPlanet from './pages/InsertPlanet';
import InsertStar from './pages/InsertStar';
import InsertRocket from './pages/InsertRocket';
import DetailPlanet2 from './pages/DetailPlanet2';
import DetailRocket2 from './pages/DetailRocket2';
import DetailStar2 from './pages/DetailStar2';
import EditDataUser from './pages/EditDataUser';
import EditAstronaut from './pages/EditAstronaut';
import EditPlanet from './pages/EditPlanet';
import EditStar from './pages/EditStar';
import EditRocket from './pages/EditRocket';
import EditProfile from './pages/EditProfile';
import AboutDev from './pages/AboutDev';

function App() {
	const navigate = useNavigate();
	// Ambil Token
	const token = localStorage.getItem('token');

	const fetchLogin = async () => {
		try {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		} catch (error) {
			localStorage.removeItem('token');
		}
	};

	useEffect(() => {
		if (!token || token === 'undefined') {
			navigate('/home');
		} else {
			fetchLogin();
		}
	}, [token]);

	return (
		<div>
			<Routes>
				{/* Route No Auth */}
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/astronaut" element={<Astronout />} />
				<Route path="/rocket" element={<Rocket />} />
				<Route path="/planet" element={<Planet />} />
				<Route path="/star" element={<Star />} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/register" element={<Register />} />
				<Route path="*" element={<Error404 />} />
				<Route path="/detailAstronaut/:id" element={<DetailAstronaut />} />
				<Route path="/detailRocket/:id" element={<DetailRocket />} />
				<Route path="/detailPlanet/:id" element={<DetailPlanet />} />
				<Route path="/detailStar/:id" element={<DetailStar />} />

				{/* Route Required Auth */}
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/astronauts"
					element={
						<ProtectedRoute>
							<Astronauts />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/rockets"
					element={
						<ProtectedRoute>
							<Rockets />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/profiles"
					element={
						<ProtectedRoute>
							<Profiles />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/planets"
					element={
						<ProtectedRoute>
							<Planets />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/stars"
					element={
						<ProtectedRoute>
							<Stars />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/favorites"
					element={
						<ProtectedRoute>
							<Favorites />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/managedata"
					element={
						<ProtectedRoute>
							<ManageDataUser />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/detailAstronautLogin/:id"
					element={
						<ProtectedRoute>
							<DetailAstronaut2 />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/detailPlanetLogin/:id"
					element={
						<ProtectedRoute>
							<DetailPlanet2 />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/detailRocketLogin/:id"
					element={
						<ProtectedRoute>
							<DetailRocket2 />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/detailStarLogin/:id"
					element={
						<ProtectedRoute>
							<DetailStar2 />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/editdatauser/:id"
					element={
						<ProtectedRoute>
							<EditDataUser />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/editdataastronaut/:id"
					element={
						<ProtectedRoute>
							<EditAstronaut />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/editdatarocket/:id"
					element={
						<ProtectedRoute>
							<EditRocket />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/editdataplanet/:id"
					element={
						<ProtectedRoute>
							<EditPlanet />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/editdatastar/:id"
					element={
						<ProtectedRoute>
							<EditStar />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/editdataprofileuser"
					element={
						<ProtectedRoute>
							<EditProfile />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/insertastronaut"
					element={
						<ProtectedRoute>
							<InsertAstronaut />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/insertplanet"
					element={
						<ProtectedRoute>
							<InsertPlanet />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/insertrocket"
					element={
						<ProtectedRoute>
							<InsertRocket />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/aboutdev"
					element={
						<ProtectedRoute>
							<AboutDev />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/insertstar"
					element={
						<ProtectedRoute>
							<InsertStar />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
