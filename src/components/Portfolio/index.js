import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Ecommerce (Project 2)',
			description:
				'Ecommerce website made alongside 3 teammates allowing users to buy multiple items from a webstore ',
			image: 'ecommerce.png',
			technologies: ["HTML/CSS","Javascript"],
			github: 'https://github.com/rTonyCloud/music-world-ecommerce',
			deployed: 'https://music-world-e-commerce.herokuapp.com/products',
		},
		{
			name: 'Weather events API (project 1)',
			description:
				'First project allowing the user to find events given a specific date and location which also renders the weather for said events and dadte',
			image: 'project 1.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/gfernandez25/Project-1',
			deployed: 'https://gfernandez25.github.io/Project-1/',
		},
		{
			name: 'Run Buddy',
			description:
				'Clean simple website made using only css and html',
			image: 'run buddy.PNG',
			technologies: ['HTML/CSS'],
			github: 'https://github.com/lretana1/lretana1.github.io',
			deployed: 'https://lretana1.github.io/',
		},
		{
			name: 'Code quiz',
			description:
				'Simple code quiz with timer and highscore function',
			image: 'quiz-screen-shot.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/lretana1/TestYourKnowledge',
			deployed: 'https://lretana1.github.io/TestYourKnowledge/',
		},
		{
			name: 'Daily planner',
			description:
				'App that allows you add and remove events from a specific time slot daily',
			image: 'schedule.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/lretana1/DayPlanner',
			deployed: 'https://lretana1.github.io/DayPlanner/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'screenshot-note-taker.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/lretana1/TakingNotes',
			deployed: 'https://luis-note-taker.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
