import React, { useState, useEffect } from 'react';
import arrowToTop from '../images/arrow-to-top.png';
const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Show or hide the button based on scroll position
		const toggleVisibility = () => {
			if (window.pageYOffset > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div>
			{isVisible && (
				<button className="scroll-to-top flex flex-col justify-center items-center" onClick={scrollToTop}>
					<img src={arrowToTop} alt="arrow" className="w-7" />
					{/* <blockquote>Scroll To Top</blockquote> */}
				</button>
			)}
		</div>
	);
};

export default ScrollToTopButton;
