// const person = {
// 	name: 'Ben',
// 	age: 43,
// 	location: {
// 		city: 'Boulder',
// 		temp: 30
// 	}
// };

// const { name: firstName = 'Timmy', age } = person;

// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;

// console.log(`It is ${temperature} in ${city}`);

// Array destructuring
const address = ['123 S. Juniper Street', 'Boston', '', '80203'];

const [, , state = 'Minn'] = address;

console.log(`${state}`);
