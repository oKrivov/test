window.addEventListener('load', () => {
	let long;
	let lat;
	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	let locationTimezone = document.querySelector('.location-timezone');
	let temperatureSection = document.querySelector('.degree-section');
	const temperatureSpan = document.querySelector('.temperature span');

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			lat = position.coords.latitude;
			long = position.coords.longitude;
			
			const proxy = 'https://cors-anywhere.herokuapp.com/';
			const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

			fetch(api)
			.then(response => {
				return response.json();
			})
			.then(data => {
				const {temperature, summary, icon} = data.currently;
				// FORMULA FOR CELCIUS
				let celsius = ((temperature - 32) * (5 / 9)).toFixed(1);
				// Set DOM Elements from the API
				temperatureDegree.textContent = celsius;
				temperatureDescription.textContent = summary;
				locationTimezone.textContent = data.timezone;
				//Set Icon
				setIcons(icon, document.querySelector('.icon'));

				//  Change temperature to Celsius/Farenheit
				temperatureSection.addEventListener('click', () => {
					if(temperatureSpan.textContent === 'F'){
						temperatureSpan.textContent = 'C';
						temperatureDegree.textContent = celsius
					} else{
						temperatureSpan.textContent = 'F'
						temperatureDegree.textContent = temperature.toFixed(1);
					}
				})
			});
		});		
	}

	function setIcons(icon,iconID){
		const skycons = new Skycons({color: 'white'});
		const currentIcon = icon.replace(/-/g, "_").toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	};
});