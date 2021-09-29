// elemendi loomine
const li = document.createElement('li');
const list = document.querySelector('ul');

// klassi määramine
li.className = 'collection-item';

// teksti lisamine
li.appendChild(document.createTextNode('Study element creation'));

const link = document.createElement('a');
link.className = 'secondary-content';
link.appendChild(document.createTextNode('X'));

// lisa atribuut väärtusega
link.setAttribute('href', '#');

li.appendChild(link);

// elemendi lisamine teise elemendi sisse
list.appendChild(li);

console.log(li);