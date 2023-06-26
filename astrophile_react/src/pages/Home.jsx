import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer';
import Dev from '../components/Dev';
import { useNavigate } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
	const navigate = useNavigate();
	useEffect(() => {
		document.title = 'Astrophiledream - Build your dreams';
		if (localStorage.getItem('token')) {
			navigate('/dashboard');
		}
	}, []);

	return (
		<div>
			<Navbar />
			<Hero2 />
			<About />
			<Dev />
			<ScrollToTopButton />
			<Footer />
		</div>
	);
};

export default Home;
