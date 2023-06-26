import React from 'react';
import gambar from './../images/about-me.png';

const About = () => {
	return (
		<div className="w-full bg-white py-16 px-4 flex flex-col mx-auto">
			<div className="text-[#312455] mb-[40px]">
				<h1 className="text-center md:text-3xl text-2xl font-extrabold">About Astrophiledream</h1>
			</div>

			<div className="text-center font-extrabold text-[#312455] mb-[30px]">
				<p>"Together with Us</p>
				<p>We Will Explore the Entire Universe in this World"</p>
			</div>
			<div className="max-w-[1240px] mx-auto">
				<div className="md:flex-col grid md:grid-cols-2 grid-cols-1">
					<div className="w-full">
						<img src={gambar} alt="gambar" className="mx-auto my-auto w-[300px] " />
					</div>
					<div className="p-5 w-full text-justify text-[#312455]">
						Welcome to the Astrophiledream website. Our mission is to educate and inspire individuals to learn more about the wonders of outer space, including planets, astronauts, rockets and stars. Through our platform, we strive to provide accurate and up-to-date information
						that is accessible to people of all ages and backgrounds. Whether you're a space enthusiast, a student, or just curious about space. We believe that understanding the complexities of space and the universe can help us appreciate our place in the world and cultivate a
						greater curiosity about the universe around us. We aim to share this passion with our visitors and encourage them to explore the mysteries of outer space.
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
