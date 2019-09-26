if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('worked!');
	})
	.catch(function() {
		console.log('failed!');
	});
}