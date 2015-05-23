(function(){
	console.log('fired!');
	
	var textOptions = ["an image", "a video", "an email", "a decision", "a behaviour", "a conversation", "multichannel", "smart content", "ENGAGEMENT"];
	var heroText = document.querySelector('.animStrong'),
		tlAnim = new TimelineLite(),
		counter = 0,
		timer;

	function animateText() {
		console.log('animateText fired');
		tlAnim.to(heroText, .7, {opacity: 0, onComplete:switchText})
		.to(heroText, .7, {opacity: 1});
	}

	function switchText() {
		
		if (counter == textOptions.length -1) {
			//counter = 0;
			resetAnim();
		}
		heroText.innerHTML = textOptions[counter];

		counter++;
	}

	function resetAnim() {
		console.log('resetAnim fired');
		clearInterval(timer);
		timer = null;

		setTimeout(function() {
			counter = 0;
			//tlAnim.stop();
			timer = setInterval(animateText, 2500); }, 6000 );
	}

	$(document).ready(function() {
		animateText();
		timer = setInterval(animateText, 2500);
	});	
})();