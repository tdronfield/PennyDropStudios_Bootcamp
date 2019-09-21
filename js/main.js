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
		memberNameD = document.querySelector('.u-nameD'),
		memberRoleD = document.querySelector('.u-roleD'),
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
	
	[`Kateh Mayman`, `Graphic Design`, `Kateh is a 27-year-old graphic designer and illustrator whose formative years were spent living in Brussels, Belgium. Kateh graduated with a diploma in Graphic Design from Fanshawe College in 2015 and promptly moved to Vancouver where she worked as a freelance game artist and graphic designer in the independent game development industry.
	
	Now back in London, she can frequently be found playing video games, splashing around in some messy creative project, or habitually picking up her sketchbook to map out her current design gig. She lives with a very good cat and frustrates all landlords by tacking up her artwork all over her apartment walls.`],

	[`Taylor Dronfield`, `Web Development`, `Taylor Dronfield is a 22-year-old Designer and Developer. She grew up in a small town and is now exploring her dreams in a bigger city.
	
	Taylor spends her free time drawing, both digitally and traditionally, long boarding, eating all of the best food, spending time with her amazing friends, or studying to improve her design and development skills.`],
	[`Megan Nguyen`, `Graphic and Motion designer`, `Megan Nguyen is a Grapgic and Motion designer who was a former law student. She love making pretty things and decided to pursue her dream of being a creative designer.
	
	Beside struggling to learn new things for her professional career, Megan enjoy being distracted by good food and good food youtube chanels. If she were not in love with designing, she would make a pretty decent chef.`],
	
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
			memberNameD.textContent = `${bioData[multiplier][0]}`;
			memberRoleD.textContent = bioData[multiplier][1];
			memberDesc.textContent = bioData[multiplier][2];
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
