console.log("Lista miast");
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let olElement = document.createElement('ol');

for (i = 0; i < cities.length; i++) {
    let liElement = document.createElement('li');

    liElement.innerHTML = cities[i];
    liElement.setAttribute('class', 'city');

    olElement.appendChild(liElement);
    console.log(olElement);
    // newEl.innerText
}

document.body.appendChild(olElement);

    // let olElement = document.createElement('ol');
    // olElement.appendChild(liElement);

//     console.log(count);



//     let newEl = document.createElement('li'); 

//     newEl.innerText = "Item " + count;
//     console.log(newEl);

//     list.appendChild(newEl);
// }

// wypisz();
// olElement.setAttribute('class','city');
// let olSelector = document.querySelector('ol');

// olElement.innerHTML = cities;


// for (let list of cities) {
//     let liElement = document.createElement('li');
//     let cityElement=liElement.cities
//     console.log(cityElement);

    //Tworzę elementy li dla kazdego z miast 
    //Dodaje każdemu z tych elementów city 
    //Ustawiam każdemu elementowi atrybut value i tekst w elemencie jako miasto
    //Dopina element do listy ol 

//     console.log(cities);
// }

// let pSelector = document.querySelector('p');
// pSelector.innerHTML = cities;


//Dopinam element listy do body




/* ```
kod na Discord
``` */


