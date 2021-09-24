const name = "Gardo Kirsipuu";
const age = 21;
const job = "õpilane";
const city = "Mustvee";

let html;

// es5 standard

html = "<ul>" +
			"<li>" + name + "</lI>" +
			"<li>" + age + "</lI>" +
			"<li>" + job + "</lI>" +
			"<li>" + city + "</lI>" +
		"</ul>";

// es6 - template strings

html = `
		<ul>
			<li>Name: ${name}</li>
			<li>Age: ${age}</li>
			<li>Job: ${job}</li>
			<li>City: ${city}</li>
		</ul>
`;

console.log(html);

document.body.innerHTML = html;