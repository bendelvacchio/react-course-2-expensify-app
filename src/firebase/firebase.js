import * as firebase from 'firebase';
import moment from 'moment';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
console.log(config.databaseURL);

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', snapshot => {
// 	console.log('child_removed');
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
// 	console.log('child_changed');
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot => {
// 	console.log('child_added');
// 	console.log(snapshot.key, snapshot.val());
// });

// const onChangeValue = database.ref('expenses').on('value', snapshot => {
// 	const expenses = [];
// 	snapshot.forEach(expense => {
// 		expenses.push({
// 			id: expense.key,
// 			...expense.val()
// 		});
// 	});
// 	// const val = snapshot.val();
// 	console.log(expenses);
// });

// database.ref('expenses').push({
// 	description: 'Thing one',
// 	note: 'First thing done',
// 	amount: 2000,
// 	createdAt: moment().valueOf()
// });

// database.ref('notes/-L8EoNzqyZjEgMGEefWL').update({
// 	body: 'Other'
// });

// database
// 	.ref('notes/-L8EoNzqyZjEgMGEefWL')
// 	.once('value')
// 	.then(snapshot => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch(error => {
// 		console.log('error: ' + error);
// 	});

// const getUserString = ({ name, job }) => `${name} is a ${job.title} at ${job.company}`;

// const onValueChange = database.ref().on(
// 	'value',
// 	snapshot => {
// 		const val = snapshot.val();
// 		console.log(getUserString(val));
// 	},
// 	e => {
// 		console.log('Error with data fetching', e);
// 	}
// );

// setTimeout(() => {
// 	database.ref('age').set(35);
// }, 3500);

// setTimeout(() => {
// 	// database.ref('age').set(40);
// 	database.ref().off();
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(45);
// }, 10500);

// .then(snapshot => {
// 	const val = snapshot.val();
// 	console.log(val);
// })
// .catch(error => {
// 	console.log('error: ' + error);
// });

// database
// 	.ref('location')
// 	.once('value')
// 	.then(snapshot => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch(error => {
// 		console.log('error: ' + error);
// 	});

// database
// 	.ref()
// 	.set({
// 		name: 'Ben',
// 		age: 34,
// 		stressLevel: 6,
// 		job: {
// 			title: 'Developer',
// 			company: 'Google'
// 		},
// 		location: {
// 			city: 'Boston',
// 			country: 'Russia'
// 		}
// 	})
// 	.then(() => {
// 		console.log('Data is saved');
// 	})
// 	.catch(error => {
// 		console.log('error: ' + error);
// 	});

// database
// 	.ref()
// 	.update({
// 		stressLevel: 9,
// 		'job/title': 'Secretary',
// 		'job/company': 'Yes Energy'
// 	})
// 	.then(() => {
// 		console.log('Data is updated');
// 	})
// 	.catch(error => {
// 		console.log('error: ' + error);
// 	});

// database
// 	.ref()
// 	.update({
// 		job: 'Manager',
// 		'location/city': 'Philly'
// 	})
// 	.then(() => {
// 		console.log('Data is updated');
// 	})
// 	.catch(error => {
// 		console.log('error: ' + error);
// 	});

// database
// 	.ref('pants')
// 	.remove()
// 	.then(() => {
// 		console.log('Data was removed');
// 	})
// 	.catch(error => {
// 		console.log('error: ' + error);
// 	});
