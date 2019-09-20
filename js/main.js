import Team from './modules/DataObject.js';
(function(){
	"use strict";

	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
	var bioButton = document.querySelectorAll(".bio-button");
	var bio = document.querySelector("#member-bio");
	var bioExit = document.querySelector(".bio-exit");

	const memberImage = document.querySelector('.u-image'),
		memberName = document.querySelector('.u-name'),
		memberRole = document.querySelector('.u-role'),
		memberDesc = document.querySelector('.u-bio');

	const bioData = [ // houseData[0][1]
	["mikka_thumb_01.jpg", `Mikka Azores`, `UI/UX, WebDev`, `Lorem Ipsummm`],
	["mikka_thumb_01.jpg", `Mikka Azores`, `UI/UX, WebDev`, `Lorem Ipsummm`],
	["mikka_thumb_01.jpg", `Mikka Azores`, `UI/UX, WebDev`, `Lorem Ipsummm`],
	["mikka_thumb_01.jpg", `Mikka Azores`, `UI/UX, WebDev`, `Lorem Ipsummm`] 
];

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	bioButton.forEach(bioBut => {
		bioBut.addEventListener("click", function() {
			console.log("Show bio!");
			bio.classList.toggle("slideToggle");
			
			let multiplier = this.dataset.offset; //this is the data-offset custom data attribute
			//on each of the sigils
			console.log(this.dataset.offset);

			memberImage.src = `images/about-photos/${bioData[multiplier][0]}`;
			memberName.textContent = `${bioData[multiplier][1]}`;
			memberRole.textContent = bioData[multiplier][2];
			memberDesc.textContent = bioData[multiplier][3]
		});
	});

	function hideBio() {
		console.log("Exit bio!");
		bio.classList.toggle("slideToggle");
	}


	button.addEventListener("click", hamburgerMenu, false);
	bioExit.addEventListener("click", hideBio)
})();
