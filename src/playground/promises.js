const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('this is my resolved data');
		// reject('Something went wrong');
	}, 1500);
});

console.log('before');

promise
	.then(data => {
		console.log('1', data);
		return 'testing';
	})
	.then(data => {
		console.log('does this run?', data);
	})
	.catch(error => {
		console.log('error: ' + error);
	});

console.log('after');
