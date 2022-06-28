const btn = document.querySelectorAll('.tabs__nav-btn');

const fadeIn = (el) => {

	var opacity = 0.01;

	var timer = setInterval(function() {

		if(opacity >= 1) {

			clearInterval(timer);

		}

		document.querySelectorAll(el).forEach(el => el.style.opacity = opacity);

		opacity += opacity * 0.1;

	}, 10);

};

btn.forEach(el => el.addEventListener ('click', () => {
  fadeIn('.tabs__panel');
}));

