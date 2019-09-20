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
		memberDesc = document.querySelector('.u-bio'),
		houseVideo = document.querySelector('.about-video'),
		playButton = document.querySelector('#play'),
		pauseButton = document.querySelector('#pause'),
		stopButton = document.querySelector('#stop'),
		volDownButton = document.querySelector('#voldown'),
		volUpButton = document.querySelector('#volup');

	const bioData = [ // houseData[0][1]
	[`Mikka Azores`, `UI/UX, WebDev`, `Mikka is a 22-year old Multimedia Designer who moved all the way from sunny Philippines to Canada eight months ago in order to further her skills and knowledge in design.

	In between the moments she spends on her laptop, you can find her reading a book, getting mad at the Philippines' drug war, crying about missing her dogs, eating ice cream, spending time with friends, and documenting her life through writing, photos, and videos. Videos most of all, which she loves compiling into one movie.`],
	[`Mikka Azores`, `UI/UX, WebDev`, `Lorem Ipsummm`],
	[`Mikka Azores`, `UI/UX, WebDev`, `Lorem Ipsummm`],
	[`Mikka Azores`, `UI/UX, WebDev`, `Lorem Ipsummm`] 
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

			memberImage.src = `images/about-photos/${multiplier}_thumb_04.jpg`;
			memberName.textContent = `${bioData[multiplier][0]}`;
			memberRole.textContent = bioData[multiplier][1];
			memberDesc.textContent = bioData[multiplier][2]
		});
	});

	function hideBio() {
		console.log("Exit bio!");
		bio.classList.toggle("slideToggle");
	}

	//pause video on click
	function pauseVideo() {
		houseVideo.pause();
	}

	function playVideo() {
		houseVideo.play();
	}

	function stopVideo() {
		houseVideo.pause();
		houseVideo.currentTime = 0;
		//console.log(forwardedTime);
	}

	function volumeUp() {
		let houseVideoVolUp = houseVideo.volume + 0.5;

		houseVideo.volume = houseVideoVolUp;
	}

	function volumeDown() {
		let houseVideoVolDown = houseVideo.volume - 0.5;

		houseVideo.volume = houseVideoVolDown;
	}

	button.addEventListener("click", hamburgerMenu, false);
	bioExit.addEventListener("click", hideBio);
	playButton.addEventListener("click", playVideo);
	pauseButton.addEventListener("click", pauseVideo);
	stopButton.addEventListener("click", stopVideo);
	volUpButton.addEventListener("click", volumeUp);
	volDownButton.addEventListener("click", volumeDown);
})();
