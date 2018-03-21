console.log('stuff is running');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your hands in the life of a computer',
	options: ['One', 'Two']
};
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
		{app.options.length > 0 && (
			<ol>
				<li>One</li>
				<li>Two</li>
			</ol>
		)}
	</div>
);
const user = {
	name: 'Ben',
	age: 45,
	location: 'Here'
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	} else {
		return undefined;
	}
}

const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{user.age && user.age >= 18 && <p>Age: {user.age}</p>}

		{getLocation(user.location)}
	</div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
