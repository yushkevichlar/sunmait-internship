"use strict";

window.addEventListener("DOMContentLoaded", () => {
	// adding projects section items
	class projectsBlock {
		constructor(name, about, icon) {
			this.name = name;
			this.about = about;
			this.icon = icon;
		}
	}

	let addBlock = (name, about, icon) => blocks.push(new projectsBlock(name, about, icon));

	let blocks = new Array();

	addBlock("Spring Boot", "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.", "./icons/spring-boot.svg");
	addBlock("Spring Framework", "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.", "./icons/spring-framework.svg");
	addBlock("Spring Data", "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.", "./icons/spring-data.svg");
	addBlock("Spring Cloud", "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.", "./icons/spring-cloud.svg");
	addBlock("Spring Cloud Data Flow", "Provides an orchestration service for composable data microservice applications on modern runtimes.", "./icons/spring-data-flow.svg");
	addBlock("Spring Security", "Protects your application with comprehensive and extensible authentication and authorization support.", "./icons/spring-security.svg");

	let projectsContent = document.querySelector(".projects__wrapper");

	(function (blocksArray) {
		if (blocksArray.length === 0) {
			projectsContent.innerHTML = "<div class='projects__no-results'>No results</div>";
			return;
		}

		blocksArray.map(block => {
			let projectsItem = document.createElement("a");
			projectsItem.href = "#";
			projectsItem.className = "projects__item";

			let projectIcon = document.createElement("div");
			projectIcon.className = "project__icon";

			let img = document.createElement("img");
			img.src = block.icon;
			img.alt = "project";
			img.className = "project__icon-img";

			let projectText = document.createElement("div");
			projectText.className = "project__text";

			let h3 = document.createElement("h4");
			h3.innerHTML = block.name;

			let p = document.createElement("p");
			p.innerHTML = block.about;

			projectsItem.append(projectIcon);
			projectIcon.append(img);
			projectsItem.append(projectText);
			projectText.append(h3);
			projectText.append(p);
			projectsContent.append(projectsItem);
		});
	})(blocks);
});
