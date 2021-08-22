let jsonPracownicy= {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}
console.log(jsonPracownicy.pracownicy);
jsonPracownicy.pracownicy.forEach(function(element, index) {
 console.log(`Element z indeksem: ${index} ma wartość imie: ${element.firstName} i nazwisko: ${element.lastName}`);
});