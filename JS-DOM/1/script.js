console.log("Lista miast");
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let olElement = document.createElement('ol');

for (i = 0; i < cities.length; i++) {
    let liElement = document.createElement('li');

    liElement.innerHTML = cities[i];
    liElement.setAttribute('class', 'city');

    olElement.appendChild(liElement);
    console.log(olElement);
}

document.body.appendChild(olElement);