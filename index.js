// Enable use the arrow keys to navigate the focus and use tab to skip to the
// next section. Without it, tab will focus each element in the list.
document.querySelectorAll('.horizontal-media-scroller')
	.forEach(scroller => rovingUx.rovingIndex({
		element: scroller,
		target: 'a',
	}))

// register service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js')
		.then(function (reg) {

			if(reg.installing) {
			console.log('Service worker installing');
			} else if(reg.waiting) {
			console.log('Service worker installed');
			} else if(reg.active) {
			console.log('Service worker active');
			}

		}).catch(function(error) {
			// registration failed
			console.log('Registration failed with ' + error);
		});
}