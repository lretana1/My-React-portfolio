import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				Hello, My name is Luis Retana-Gaitan I studied at Florida International University and currently hold a Bachelors Degree in Civil Engineering. I have a love of all things Science, Math and logic. I would describe myself as someone who is hardworking and curious and above all not afraid to take chances and fail while learning in the process. Currently my time is divided between my electrician job, my coding bootcamp and whatever scraps remain become my free time. My main ambition currently is to graduate from my bootcamp and establish a career in programming. My main drive to achieve my goals has always been for the well-being of my friends and family and myself ofcourse.
You might be asking yourself how I ended up in programming with a degree in civil engineering and established career as an electrician. Through the years I have often questioned whether or not I would be in a career that felt fulfilling. Coding always seemed fun, but I never pulled the trigger because it never seemed like a good fit. A good friend said I could possibly have a future in the industry. Given that he was working within the industry, I gave it a shot and never looked back. I enjoy every aspect it, the challenge, the debugging and mostly the freedom to create.
I've put all of my heart and time into learning to program these last few months. In the future I hope to be able to make good use of my learned skills and add more to my repertoire as time goes on. Although, I currently have knowledge of CSS, HTML and Javascript, I plan to pick up other languages through work experience, coworkers, and self study ofcourse. I have aspirations of working at a reputable company that values my time, talents and efforts. My greatest wish is to be able to make an impact in the industry and to work at it often and for as long as I can.
				</p>
			</div>
		</section>
	);
}

export default About;
