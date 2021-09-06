                                        //AJAX
/* const getUserData = () => {
 
// utworzenie obiektu
let httpReq = new XMLHttpRequest();
                     
// otwarcie połączenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
httpReq.open('GET', 'https://jsonplaceholder.typicode.com/users/1');   
                     
// jeśli status połączenia został zmieniony -> httpReq.readyState
// 0: połączenie nie nawiązane,
// 1: połączenie nawiązane,
// 2: żądanie odebrane,
// 3: przetwarzanie,
// 4: dane zwrócone i gotowe do użycia.

// https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
httpReq.onreadystatechange = () => {
                     
// console.log(httpReq.readyState);
                     
// jeśli 4: dane zwrócone i gotowe do użycia
    if (httpReq.readyState === 4) {
                     
// Kody statusu połączenia HTTP - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
    if (httpReq.status === 200) {
                 
    let data = httpReq.responseText;
    let dataJSON = JSON.parse(data); //Format JS, czyli obiektowy
    // console.log(data);
    // console.log(dataJSON);
    console.log(dataJSON.name);
    console.log(dataJSON.email);
                     
// zwolnij obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
    httpReq = null;
                }
            }
                     
        }
                     
    httpReq.send();
}

setInterval(getUserData, 10000); */

                                        //Fetch API
/* console.log('Fetch API');

// Fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - to nowy interfejs do pobierania i wysyłania danych za pomocą HTTP. Jest podobne do 'XMLHttpRequest', ale ma więcej możliwości. Pisanie zapytań przy użyciu Fetch API jest szybsze i przyjemniejsze niż za pomocą 'XMLHttpRequest'.

// Fetch API definiuje 2 główne obiekty:
// - Request - https://developer.mozilla.org/en-US/docs/Web/API/Request
// - Response - https://developer.mozilla.org/en-US/docs/Web/API/Response
// Oraz dostarcza globalnej funkcji 'fetch()', przy pomocy której programista dokonuje zapytań AJAX.

// Fetch API prowadzi także wsparcie dla CORS.

// CORS (ang. Cross-origin resource sharing ) - mechanizm bezpieczeństwa umożliwiający współdzielenie lub blokowanie zasobów pomiędzy serwerami. A ściślej rzecz biorąc chodzi o możliwość (lub jej brak) wykonywania zapytań AJAX. https://pl.wikipedia.org/wiki/Cross-Origin_Resource_Sharing

// Przykłady użycia 'Fetch API' - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


setInterval(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then((data) => {

        //console.log(data);
        console.log(data.name);
        console.log(data.email);
    });   
}, 10000); */

                                        //Metoda $.get()
//Biblioteka jQuery ułatwia tworzenie AJAX’owych zapytań – służy do tego metoda $.get()
//Pozwala na pobieranie danych w dowolnym formacie, np. JSON lub XML.
//Metoda $.get() przyjmuje przynajmniej jeden parametr – źródło, z którego pobierane mają być dane.

//Pierwszym sposobem jej użycia jest podanie drugiego parametru, którym jest funkcja anonimowa. Funkcja ta wykona się w chwili, kiedy dane zostaną prawidłowo pobrane.

/* $(function(){
    $.get('https://jsonplaceholder.typicode.com/users/1', function(data) {
    console.log(data);
    console.log(data.name);
    console.log(data.email);
    }); */

//W powyższym przykładzie wyświetlamy w konsoli dane pobierane ze źródła jako obiekt JavaScript.

// Innym sposobem użycia metody $.get() jest wywołanie jej z jednym parametrem, czyli źródłem danych:

    //console.log($.get('https://jsonplaceholder.typicode.com/users/1'));


// W ten sposób otrzymujemy obiekt jqXHR.
// Więcej na temat obiektu jqXHR: https://api.jquery.com/Types/#jqXHR

// Na tym obiekcie mamy możliwość wywołania kilku metod: .then(), .done(), .fail(), .pipe(), .progress(), .state(), .promise().
 
// Metoda .done() jest uruchamiana, kiedy dane zostają pobrane i są gotowe do użycia.
 
    /* $.get('https://jsonplaceholder.typicode.com/users/1')
        .done(function(data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);            
    }) */
 
// Metoda .fail() daje możliwość podpięcia obsługi błędów. Uruchamia się w momencie wystąpienia błędu, np. problemu z połączeniem.
 
    /* $.get('https://jsonplaceholder.typicode.com/users/1')
    .fail(function(error) {
        console.error(error);
    })
     */
// Więcej na temat $.get(): https://api.jquery.com/jQuery.get/


                                        //Metoda $.getJSON()' 

 /* $(document).ready(function() {

    // jQuery - $.getJSON() => https://api.jquery.com/jQuery.getJSON/
    // za pomocą tej metody można pobierać dane tylko w formacie JSON

    $.getJSON('https://jsonplaceholder.typicode.com/users/1', function(data) {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    });

    $.getJSON('https://jsonplaceholder.typicode.com/users/1')
        .done(function(data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);            
        })
        .fail(function(error) {
            console.error(error);
        })
});  */


                                        //Metoda $.ajax()
/* $(document).ready(function() {

    // jQuery - $.ajax() => https://api.jquery.com/jquery.ajax/
    // za pomocą tej metody można pobierać/wysyłać dane w jakimkolwiek formacie (np. JSON, XML) i za pomocą jakiejkolwiek metody (GET, POST, PUT, DELETE, OPTION)

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        statusCode: {
            200: function() {
                console.log(`OK - wszystko gra :)`);
            }
        },
        success: function(data) {

            console.log(data);
            console.log(data.name);
            console.log(data.email);
        },
        error: function(error) {
            console.error(error);
        },
    }); 

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        statusCode: {
            200: function() {
                console.log(`OK - wszystko gra :)`);
            }
        },
    })
    .done(function(data) {

        console.log(data);
        console.log(data.name);
        console.log(data.email);
    })
    .fail(function(error) {
        console.error(error);
    })

}); */


                                        // Opis metod protokołu HTTP (GET, POST, PUT, DELETE, OPTION) https://www.w3schools.com/tags/ref_httpmethods.asp


let formCreateUser = document.getElementById('create-user');
let btnGetRandomUser = document.getElementById('get-random-user');

// API do pobierania danych - https://akademia108.pl/api/ajax/get-random-user.php
// - method: GET


// wklejąjąc link do API w przeglądarce:
// - https://akademia108.pl/api/ajax/get-random-user.php
// dostaniemy JSON'a z użytkownikiem

// Receive JSON data => GET User
const getUser = () => {
    fetch(`https://akademia108.pl/api/ajax/get-random-user.php`, {

        // mode: 'no-cors', // ERRORS with no-cors, because only headers: HEAD, GET, POST are allowed - https://developer.mozilla.org/en-US/docs/Web/API/Request/mode
        mode: 'cors', // it is DEFAULT VALUE

        method: 'GET', // allowed
        // method: 'POST', // allowed by CORS, but NOT allowed by SERVER
        // method: 'PUT', // NOT allowed on server by CORS
      })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

btnGetRandomUser.addEventListener('click', getUser);

// API do wysyłania danych - https://akademia108.pl/api/ajax/post-user.php
// - method: POST
// - Content-type: application/json


// wklejąjąc link do API w przeglądarce:
// - https://akademia108.pl/api/ajax/post-user.php
// dostaniemy komunikat, że tylko zapytania POST są dozwolone pod tym adresem

// Send JSON data => POST User
const createUser = () => {
    
    let errors = [];

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let occupation = document.getElementById('occupation');
    let company = document.getElementById('company');

    let errorsUl = document.getElementById('errors');
    errorsUl.innerHTML = '';
    let pMsg = document.getElementById('msg');
    pMsg.innerHTML = '';

    if (firstName.value.trim() === '') {
        errors.push('Podaj imie')
    }

    if (lastName.value.trim() === '') {
        errors.push('Podaj nazwisko')
    }

    if (occupation.value.trim() === '') {
        errors.push('Podaj zawód')
    }

    if (company.value.trim() === '') {
        errors.push('Podaj firmę')
    }

    if (errors.length > 0) {
        for (const error of errors) {
            let errorLi = document.createElement('li');
            errorLi.innerText = error;
            errorsUl.appendChild(errorLi)
        }

        return false;
    }

    let user = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        occupation: occupation.value.trim(),
        company: company.value.trim(),
    };


    fetch(`https://akademia108.pl/api/ajax/post-user.php`, {
        headers: {
            'Content-Type': 'application/json', // allowed
            // 'Content-Type': 'application/xml', // NOT allowed by SERVER
        },

        // mode: 'no-cors', // ERRORS with no-cors, because only headers: HEAD, GET, POST are allowed - https://developer.mozilla.org/en-US/docs/Web/API/Request/mode
        mode: 'cors', // it is DEFAULT VALUE

        method: 'POST', // allowed
        // method: 'PUT', // allowed by CORS, but NOT allowed by SERVER
        // method: 'DELETE', // NOT allowed on server by CORS

        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);

            if (!resJSON.errors) {
                // formCreateUser.reset();
                pMsg.innerText = resJSON.messages[0];
            }

            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


formCreateUser.addEventListener('submit', createUser);

                                            //Serwisy do testowaia zapytań AJAX
//ReqRes – https://reqres.in/
//JSON Placeholder – https://jsonplaceholder.typicode.com/


