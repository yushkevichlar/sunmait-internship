"use strict";

window.addEventListener("DOMContentLoaded", () => {
	//====================== rendering projects section items ======================
	class projectsBlock {
		constructor(name, description, icon) {
			this.name = name;
			this.description = description;
			this.icon = icon;
		}
	}

	let addBlock = (name, description, icon) => projectsBlocks.push(new projectsBlock(name, description, icon));

	let projectsBlocks = new Array();

	addBlock("Spring Boot", "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.", "./icons/spring-boot.svg");
	addBlock("Spring Framework", "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.", "./icons/spring-framework.svg");
	addBlock("Spring Data", "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.", "./icons/spring-data.svg");
	addBlock("Spring Cloud", "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.", "./icons/spring-cloud.svg");
	addBlock("Spring Cloud Data Flow", "Provides an orchestration service for composable data microservice applications on modern runtimes.", "./icons/spring-data-flow.svg");
	addBlock("Spring Security", "Protects your application with comprehensive and extensible authentication and authorization support.", "./icons/spring-security.svg");

	let projectsContent = document.querySelector(".projects__wrapper");

	/**
	 *
	 * @param {array} blocksArray
	 * @returns
	 */
	function renderProjectsSection(blocksArray) {
		while (projectsContent.firstChild) projectsContent.firstChild.remove();

		if (blocksArray.length === 0) {
			projectsContent.innerHTML = "<div class='projects__no-results'>No results</div>";
			return;
		}

		blocksArray.map(block => {
			projectsContent.innerHTML += `
				<a class="projects__item" href="#">
					<div class="project__icon">
						<img class="project__icon-img" src="${block.icon}" alt="project">
					</div>
					<div class="project__text">
						<h3>${block.name}</h3>
						<p>${block.description}</p>
					</div>
				</a>
			`;
		});
	}

	renderProjectsSection(projectsBlocks);

	//====================== mobile menu listeners ======================

	const mobileNav = document.querySelector(".nav__mobile-items"),
		mobileNavContainer = document.querySelector(".nav__mobile-container"),
		hamburger = document.querySelector(".nav__mobile-hamburger"),
		mobileNavClose = document.querySelector(".nav__mobile-close");

	hamburger.addEventListener("click", () => {
		mobileNav.classList.toggle("js-display-block");
		hamburger.classList.add("js-display-none");
		mobileNavClose.classList.toggle("js-display-block");
	});

	mobileNavClose.addEventListener("click", () => {
		mobileNav.classList.toggle("js-display-block");
		hamburger.classList.remove("js-display-none");
		hamburger.classList.add("js-display-block");
		mobileNavClose.classList.toggle("js-display-block");

		let mobWhy = document.getElementById("mobile-why-items");
		mobWhy.classList.add("js-display-none");

		let mobLearn = document.getElementById("mobile-learn-items");
		mobLearn.classList.add("js-display-none");

		let mobProject = document.getElementById("mobile-project-items");
		mobProject.classList.add("js-display-none");

		let mobCommunity = document.getElementById("mobile-community-items");
		mobCommunity.classList.add("js-display-none");

		for (let elem of document.getElementsByClassName("mobile-nav-arrow")) {
			if (elem.classList.contains("flipped")) {
				elem.classList.remove("flipped");
			}
		}
	});

	mobileNavContainer.onclick = e => {
		let target = e.target;
		let parent = target.closest(".mobile-category");
		parent.querySelector(".mobile-nav-arrow").classList.toggle("flipped");

		switch (target.id) {
			case "mobile-why":
				let mobWhy = document.getElementById("mobile-why-items");
				mobWhy.classList.toggle("js-display-none");
				break;
			case "mobile-learn":
				let mobLearn = document.getElementById("mobile-learn-items");
				mobLearn.classList.toggle("js-display-none");
				break;
			case "mobile-projects":
				let mobProject = document.getElementById("mobile-project-items");
				mobProject.classList.toggle("js-display-none");
				break;
			case "mobile-community":
				let mobCommunity = document.getElementById("mobile-community-items");
				mobCommunity.classList.toggle("js-display-none");
				break;
			default:
				break;
		}
	};

	//====================== rendering menus ======================

	let nav = [
		{
			title: "Why Spring",
			items: ["Overview", "Microservices", "Reactive", "Event Driven", "Cloud", "Web Applications", "Serverless", "Batch"],
		},
		{
			title: "Learn",
			items: ["Overview", "Quickstart", "Guides", "Blog"],
		},
		{
			title: "Projects",
			items: [
				"Overview",
				"Spring Boot",
				"Spring",
				"Spring Framework",
				"Spring Cloud",
				"Spring Cloud Data Flow",
				"Spring Data",
				"Spring Integration",
				"Spring Batch",
				"Spring Security",
				"View all projects",
				"Development Tools",
				"Spring Tools 4",
				"Spring Initializr",
			],
		},
		{
			title: "Training",
			items: [],
		},
		{
			title: "Support",
			items: [],
		},
		{
			title: "Community",
			items: ["Overview", "Events", "Team"],
		},
	];

	let mobWhy = document.getElementById("mobile-why"),
		mobLearn = document.getElementById("mobile-learn"),
		mobProject = document.getElementById("mobile-projects"),
		mobTraining = document.getElementById("mobile-training"),
		mobSupport = document.getElementById("mobile-support"),
		mobCommunity = document.getElementById("mobile-community"),
		mobTitles = [];

	mobTitles.push(mobWhy, mobLearn, mobProject, mobTraining, mobSupport, mobCommunity);

	let mobWhyItems = document.getElementById("mobile-why-items"),
		mobLearnItems = document.getElementById("mobile-learn-items"),
		mobProjectItems = document.getElementById("mobile-project-items"),
		mobCommunityItems = document.getElementById("mobile-community-items"),
		mobItems = [];

	mobItems.push(mobWhyItems, mobLearnItems, mobProjectItems, null, null, mobCommunityItems);

	let menuTitles = document.querySelectorAll(".nav__items .nav__dropdown");
	let menuItems = document.querySelectorAll(".nav__dropdown-content-list");

	/**
	 *
	 * @param {object} elements
	 */
	function renderMenu(elements) {
		for (let i = 0; i < elements.length; i++) {
			if (elements[i].title === "Training" || elements[i].title === "Support") {
				mobTitles[i].innerHTML += `
				    <div class="mobile-title">${elements[i].title}</div>
			    `;
			} else {
				mobTitles[i].innerHTML += `
                    <div class="mobile-title">${elements[i].title}</div>
                    <div class="mobile-nav-arrow"></div>
			    `;
			}
		}

		for (let i = 0; i < elements.length; i++) {
			if (elements[i].title === "Training" || elements[i].title === "Support") {
				menuTitles[i].insertAdjacentHTML(
					"afterbegin",
					`
					<a class="nav__items-link" href="#">${elements[i].title}</a>
			    `
				);
			} else {
				menuTitles[i].insertAdjacentHTML(
					"afterbegin",
					`
				    <span>${elements[i].title}</span>
			    `
				);
			}
		}
	}

	/**
	 *
	 * @param {object} elements
	 */
	function renderDropdownMenu(elements) {
		for (let i = 0; i < elements.length; i++) {
			let itemsArr = elements[i].items;

			for (let j = 0; j < itemsArr.length; j++) {
				menuItems[i].innerHTML += `
					<li><a href='#'>${itemsArr[j]}</a></li>
				`;
				mobItems[i].innerHTML += `
					<li><a href='#'>${itemsArr[j]}</a></li>
				`;
				mobItems[i].classList.add("js-display-none");
			}
		}
	}

	renderMenu(nav);
	renderDropdownMenu(nav);

	document.querySelector("#mobile-project-items li:nth-child(12)").classList.add("mobile-nav-uppercase");
	document.querySelector("#mobile-project-items li:nth-child(14) a").innerHTML += `<svg class='external-link-icon'
		xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
		<polyline points="15 10.94 15 15 1 15 1 1 5.06 1" fill="none" stroke="currentColor"
			stroke-miterlimit="10" stroke-width="2" />
		<polyline points="8.93 1 15 1 15 7.07" fill="none" stroke="currentColor"
			stroke-miterlimit="10" stroke-width="2" />
		<line x1="15" y1="1" x2="8" y2="8" fill="none" stroke="currentColor"
			stroke-miterlimit="10" stroke-width="2" />
	</svg>`;

	document.querySelector("#nav__dropdown-content-list-projects li:nth-child(11) a").classList.add("nav__dropdown-content_blue");
	document.querySelector("#nav__dropdown-content-list-projects li:nth-child(12)").classList.add("nav__dropdown-content-subtitle");
	document.querySelector("#nav__dropdown-content-list-projects li:nth-child(14) a").innerHTML += `
	<svg class="nav__dropdown-link-icon" xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16">
		<polyline points="15 10.94 15 15 1 15 1 1 5.06 1" fill="none"
			stroke="currentColor" stroke-miterlimit="10" stroke-width="2" />
		<polyline points="8.93 1 15 1 15 7.07" fill="none" stroke="currentColor"
			stroke-miterlimit="10" stroke-width="2" />
		<line x1="15" y1="1" x2="8" y2="8" fill="none" stroke="currentColor"
			stroke-miterlimit="10" stroke-width="2" />
	</svg>`;

	//====================== search bar projects ======================
	/**
	 *
	 * @param {string} text
	 */
	function searchProjects(text) {
		let inputValue = text;

		if (inputValue.trim() !== "") {
			let newProjects = projectsBlocks.filter(elem => elem.name.toLowerCase().includes(inputValue.toLowerCase()) || elem.description.toString().includes(inputValue));
			console.log(newProjects);
			renderProjectsSection(newProjects);
		} else {
			renderProjectsSection(projectsBlocks);
		}
	}

	/**
	 *
	 * @param {object} e
	 */
	function handleSearchInputChange(e) {
		let inputValue = e.currentTarget.value;
		if (e.key === "Enter") {
			searchProjects(inputValue);
		} else if (inputValue === "") {
			document.querySelector("#resetButton").classList.add("js-visibility-hidden");
		} else if (inputValue !== "") {
			document.querySelector("#resetButton").classList.remove("js-visibility-hidden");
		}
	}

	let timer;
	document.querySelector("#input").addEventListener("keyup", e => {
		let inputValue = e.currentTarget.value;
		clearTimeout(timer);

		timer = setTimeout(() => {
			searchProjects(inputValue);
		}, 3000);
	});

	document.querySelector("#searchIcon").addEventListener("click", e => {
		let inputValue = document.querySelector("#input").value;
		console.log(inputValue);
		searchProjects(inputValue);
	});

	document.querySelector("#resetButton").addEventListener("click", () => {
		document.querySelector("#input").value = "";
		document.querySelector("#resetButton").classList.add("js-visibility-hidden");
		renderProjectsSection(projectsBlocks);
	});

	document.querySelector("#input").addEventListener("keydown", event => handleSearchInputChange(event));
	document.querySelector("#input").addEventListener("change", event => handleSearchInputChange(event));
});
