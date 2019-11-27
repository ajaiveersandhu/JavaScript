const FloatLabel = (() => {

	// add active class and placeholder 
	const handleFocus = (event) => {
		const target = event.target;
		target.parentNode.classList.add('active');
	};

	// remove active class and placeholder
	const handleBlur = (event) => {
		const target = event.target;
		if (!target.value) {
			target.parentNode.classList.remove('active');
		}
	};

	// register events
	const bindEvents = (element) => {
		const floatField = element.querySelector('input');
		floatField.addEventListener('focus', handleFocus);
		floatField.addEventListener('blur', handleBlur);
	};

	// get DOM elements
	const init = () => {
		const floatContainers = document.querySelectorAll('.input-box');

		floatContainers.forEach((element) => {
			if (element.querySelector('input').value) {
				element.classList.add('active');
			}

			bindEvents(element);
		});
	};

	return {
		init: init
	};
})();

FloatLabel.init();