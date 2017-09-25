document.addEventListener('DOMContentLoaded', function() {
	const ball = document.getElementById('ball');

	console.log(ball)
	setInterval(() => {
		axios.get('/play')
			.then(function (response) {
				console.log(response.data);
				const coord = response.data;
				ball.style.top = coord.y;
				ball.style.left = coord.x;
			})
			.catch(function (error) {
				console.log(error);
			});
	}, 10)
});