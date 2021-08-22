console.log("To jest moje imię: Michał");

/* Komentarz blokowy - ALT + SHIFT + A */
// Komentarz liniowy - CTRL + / 

// Funkcja jest przenoszona na górę więc można ją wywołać wcześniej
function przedstawMnie () {
    console.log("Mam na imię Michał")
}
przedstawMnie();
przedstawMnie();

// Wyrażenie funkcji, nie można wywołać wcześniej funkcji przed jej zdefiniowaniem
const wypiszMojeImie = function () {
    console.log("Moje imię to Michał")
}
wypiszMojeImie();

function przedstaw(imie) {
    console.log(`Mam na imię ${imie}`);
}
przedstaw('Bartek');

function przedstawSie(imie="Monika") {
    console.log(`Mam na imię ${imie}`);
}
przedstawSie();

const dodajLiczby = function(liczba1= 0, liczba2=0) {
    let wynik = liczba1 + liczba2;
    console.log(wynik);
}
let liczbaMichala = 300;
let liczbaPierwsza = 10;

dodajLiczby();
dodajLiczby(100,3);
dodajLiczby(liczbaMichala,liczbaPierwsza);
dodajLiczby(liczbaMichala,7);

const mnozenieLiczb = function(liczba1 = 2, liczba2 = 2) {
    var wynik = liczba1 * liczba2;
    return wynik
}

console.log(mnozenieLiczb(0,3));

const mnozenie = function(liczba1 = 0, liczba2 = 0) {
    let wynik = liczba1 * liczba2;
    return wynik;
}
let wynikMnozenia = 0;
wynikMnozenia = mnozenie(4, 4);
console.log(wynikMnozenia);

//Postać funkcji standardowy
const doKwadratu = function (x=0) {
    return x * x;
}
let wynik = doKwadratu(3);
console.log(wynik);

// ['Krzysztof', 'Monika', 'Marcin'].forEach(function(el) {
//     console.log(el);
// })

['Edek','Ada','Mis'].forEach( el => console.log(el) );

//Zapis funkcji strzałkowej. Działa dla jednego parametru
const potegowanie = y => y * y;
let wynik1 = potegowanie(3);
console.log(wynik1);

                                        //ZASIĘG ZMIENNYCH
var imie2 = 'RENATA'
console.log(imie2);

function wyswietlimie2() {
    console.log(imie2);
}
wyswietlimie2();

// VAR ZASIĘG FUNKCYJNY - nie zadziała poza funkcją, zmienna brana na początku działania HOISTING
// LET ZASIĘG BLOKOWY- działa w obrębie bloku kodu, NIE DZIAŁĄ HOISTING, działa po inicjalizacji 

if (imie2=='RENATA') {
    var wiek2=30; // Z LET nie zadziała
}
console.log(wiek2);

imie = "Bozydar" //Przykład hoistingu, z let nie zadziała
console.log(imie)
var imie = "Iwanka"

                                    // TYPY DANYCH: PROSTE
// Liczbowe
let numer7 = 108;
let numer8 = 100;
console.log(numer7+numer8);

// Ciągi znaków, łańcuchy
let imie9="Dariusz ";
let imie10='Tomek';
console.log(imie9+imie10);

//Zmienne typu boolean czyli prawda/fausz (True/False)
let jestProgramista = true;
console.log(jestProgramista);

if (jestProgramista) {
    console.log(imie10 + "jest programistą!")
}
// Zmienna null - zmienna nie ma wartości oraz nie wskazuje na żaden obiekt wyzerowanie zmiennej
let obiekt = null;

// Typ undifined, czyli nie zdefiniowana (np. brak przypisanej wartości)
//Zmienną należy zainicjalizować!!!
let typuUndefined;

// Zmienna symbol, czyli dodajemy dodatkowy funkcjonalności do obiektu
let symbol = Symbol();
const osoba = { //zdefiniowany obiekt
    name: "Hans",
    occupation: "Programista",
    [symbol]: "Tajne haslo",
}

console.log(osoba);
symbol = Symbol();
osoba[symbol]="Tajne dane"

                                    // TYPY DANYCH: ZŁOŻONY (REFERENCYJNE)
//Tablica
let pierwszaTablica = [1,2,3];
let drugaTablica = pierwszaTablica
drugaTablica[2]=100;
console.log(drugaTablica);
console.log(pierwszaTablica); //Uwaga: również pierwsza tablica wskazuje 100, czyli przekazujemy wskaźnik a nie wartość

//Obiekty
let osobaA = {
    name: "Michał",
    age: 30,
};
let drugaOsoba = osobaA; //Przekazujemy wskaźnik, nie wartość
drugaOsoba.age=41;
console.log(osobaA); 

//Sprawdzanie typy zmiennych
console.log(typeof osoba);
console.log(typeof pierwszaTablica); //Uwaga tablica wyświetla się jak obiekt
console.log(typeof numer7);

let isArray = drugaTablica instanceof Array; //Uwaga - wartość true, czyli tablica
console.log(isArray);
console.log(typeof isArray);

                                        //TABLICE
let nameC = ['Michał','Renata','Adam'];
console.log(nameC);
nameC[1]='Basia';
console.log(nameC[0]);
console.log(nameC.length); //Sprawdzanie długości tablicy
let [imieKolegi, imieKolezanki, imieKierownika] = nameC; //Destruktoryzowanie zmiennych 
console.log(imieKolezanki); //Wyświetla imię Basia

let arrayLength = nameC.push('Monika'); //Dodawanie Moniki na końcu tablicy
console.log(nameC);
let strArray = nameC.join(' - '); //Tablica rozdzielona kreską i spacjami
console.log(strArray);
let reArray = nameC.reverse();//Odwracanie kolejności w tablicy
console.log(reArray);
//Sortowanie elemnetów tablicy
let sortArray = nameC.sort(); 
console.log(sortArray);

let nameD = ["Krystian", "Mikołaj", "Krystian"];
let nameE = new Array("Tomek", "Nikodem"); //Tworzenie tablicy
let concatArray = nameC.concat(nameD, nameE); //Łączenie tablic
console.log(concatArray);

let indexOfArray = concatArray.indexOf('Michał'); // Odpowiedź 2, -1 dla elementó którego nie ma w tablicy
console.log(indexOfArray);

//Metoda map, utworzenie nowej tablicy poprzez zmodyfikowanie nowych elementów
let mappedArray = nameC.map(function(element, index) {
    let newElement = element.toUpperCase() + '-' + index;
    return newElement;
});
console.log(mappedArray); //Wyświetli imiona z dużej litery i numer indexu, nie modyfikuje starej tablicy
console.log(nameC);

//Metoda filter, filtruje tablice i tworzy nową nablicę
let filterArray = nameC.filter((element, index) => {
return element.startsWith('M');
});

let filterArrayB = nameC.filter(element => element.startsWith('B')); //Skrócony zapis, bo jeden element
console.log(filterArrayB); //Nowa tablica zawiera imiona na M

                                        //OBIEKTY
// Obiekt jest to typ referencyjny, klucze tworzymy samodzielnie w tablicach mamy wartości liczbowy
var person = { //Person to instancja lub obiekt
    nameM: 'Michal',
    height: 180,
    print: function() {
        console.log(this.nameM);
    },
    printThis: function() {
        console.log('Jestem wewnetrzna metodą printThis i uruchomię wewnętrzną metodę print');
        this.print();
    }
};
console.log(person.height); //Wyświetli wzrost
person.print(); //Uruchomienie metody


console.log(person["height"]); //Inny zapis wyświetlania wzrostu
person['print'](); //Inny zapis wyświetlania metody
person.printThis(); //Uruchoienie wewnetrznej metody

person.height = 190; //Zmiana wzrostu
person.weight = 75; //Dodanie  pola
console.log(person);

var womenA = {
    nameG: 'Ilona',
    height: 165,
}
let {name, height} = womenA; //Destruktoryzowanie
console.log(height);

                                    //Różnica w zapisie między ES5 i ES6
var personX = { //ES5
    nameM: 'Maciek',
    height: 201,
    print: function() {
        console.log(this.nameM);
    },
    printThis: function() {
        console.log('Jestem wewnetrzna metodą printThis i uruchomię wewnętrzną metodę print');
        this.print();
    }
};
personX.printThis(); //Uruchomi

var personY = { //ES6
    nameM: 'Maciek',
    height: 201,
    print() { //TU JEST RÓŻNICA
        console.log(this.nameM);
    },
    printThis() {
        console.log('Jestem wewnetrzna metodą printThis i uruchomię wewnętrzną metodę print');
        this.print();
    }
};
personX.printThis(); //Uruchomi

                                        //KLASY-szablon w jaki sposób będą wyglądały obiekty
class Person { //Klasy nazywamy z dużej litery
    constructor(nameI, lastName) { //Uruchomiony konstruktor, metoda
        this.nameI = nameI;
        this.lastName = lastName;
    } 
    printInfo() { //Tworzenie metody
        console.log(`Imie: ${this.nameI}, Nazwisko: ${this.lastName}`);
    }
}
let personI = new Person("Hans", "Kowlski"); //Tworzymy obiekt bo słowo new
console.log(personI);
personI.printInfo();

//Tworzenie więcej obiektów odwołujących się do tej samej klasy
let personII = new Person("Monika", "Nowak");
personII.printInfo();

                                    //DZIEDZICZENIE KLAS
class Line {
    constructor(length = 0) { //konstruktor
        this.length=length;
    }
    setLength(length=0)  {//metoda
        this.length = length;
    }
}
let linia = new Line(108);
linia.setLength(110); //Zmiana długości 
console.log(linia);

class Rectangle extends Line { //Rozszezenie klasy
    constructor(width = 0, length =0) {
    super(length); //Wywolyjemy konstruktor w klasie z ktorej dziedziczymy
        this.width = width;
    }
    setWidth(width = 0) {
        this.width = width;
    }
}

let prostokat = new Rectangle(10, 20);
prostokat.setWidth(100);
prostokat.setLength(200);
console.log(prostokat);

class Cuboid extends Rectangle {
    constructor(height=0, width = 0, length=0) {
        super(width, length); //To będzie dziedziczone z poprzednich klas
        this.height=height; //To ustawiamy
    }
    setHeight(height=0) { //Ustawianie metody
        this.height=height;
    }
}
let prostopadloscian = new Cuboid(40,50,60);
console.log(prostopadloscian);

prostopadloscian.setHeight(400); //Zmiana wartości
prostopadloscian.setWidth(500);
prostopadloscian.setLength(600);
console.log(prostopadloscian);

                                    //Obiekt MATH
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.sin(Math.PI/2));
console.log(Math.pow(2,3));
console.log(Math.sqrt(9));
console.log(Math.random()); //Losowa liczba z zakresu od 0 do 1
console.log(Math.floor(45.98)); //Zaokrąglenie liczby w dół
console.log(Math.floor(Math.random()*100) +1);//Losowanie liczby od 1 do 100
console.log(Math.round(108.49)); //Zaokrąglanie liczby do 108
console.log(Math.round(108.5)); //Zaokrąglanie liczby do 109

                                        //OPERATORY ARYTMETYCZNE
let resultD = 3 + 6;
let resultO = 6 - 3; // - , + , /, 
console.log(resultD);
console.log(resultO);
resultD = 7 % 3; //Modulo czyli reszta z dzielenia
console.log(resultD);
let i = 108;
console.log(++i); //PRE Inkrementacja, najpierw zwiększamy 
let j = 108;
console.log(j++); //POST Inkrementacja, najpierw wyświetla zmienną, a później ją nadpisujezwiększamy
console.log(j);

let k = 100;
console.log(--k); //PRE Dekrementacja, najpierw zwiększamy 
let l = 100;
console.log(l--); //POST Dekrementacja, najpierw wyświetla zmienną, a później ją nadpisujezwiększamy
console.log(l);
                                        //Operatory przypisania
let numberV = 100;
numberV +=2; //wyświetli 102
console.log(numberV);
numberV -=2; //Czyli numberV = numberV - 2
console.log(numberV); //Wyświetli 100
numberV *=2; //Czyli numberV = numberV * 2
console.log(numberV); //Wyświetli 200
numberV /=2; //Czyli numberV = numberV / 2
console.log(numberV); //Wyświetli 100
numberV %=50; //Czyli numberV = numberV % 50
console.log(numberV); //Wyświetli 0

                                        //OPERATORY PORÓWNANIA
// ==  – równe wartości
// !=  – różne wartości
// ===  – równe wartości i typ danych
// !==  – różne wartości lub/i typ danych
// >  – większe od
// <  – mniejsze od
// >=  – większe lub równe
// <=  – mniejsze lub równe

                                        //OPERATORY LOGICZNE
console.log( !(2>1)); //! Operator negacji - FALSE
console.log(2>1 && 3>1);//Operator iloczynu logicznego - Dwa warunki spełnione- and - TRUE
console.log(2>1 || 3<1);//Operator sumy logicznej - Jeden warunek spełniony - lub - TRUE

                                    //OPERATOR WARUNKOWY - TERNATY (warunek ? wartoscTrue : wartoscFalse)
let numberT = (3>1) ? 100:200;
console.log(numberT);
(true) ? console.log("TRUE") : console.log("False");

                                        //INSTRUKCJA IF, IF ELSE, ELSE
//If (warunek) {instrukcja JS, gdy spełnony warunek 1}
//else if (warunek2) {instrukcja JS, gdy spełnony warunek 2}
//else {instrukcja JS, w każdym innym przypadku}
let cenaPizzy = 27;
if (cenaPizzy < 20) {console.log("Pizza jest tani!");
} else if ((cenaPizzy>=20) && (cenaPizzy<25)) {
    console.log("Pizza jest w dobrej cenie");
}   else {console.log("Pizza jest droga!");
}

                                        //INSTRUKCJA SWITCH
//Sprawdza poszczególne warunki
// switch (wyrażenie) {
//   case wartość1: instrukcja JS
//    [break;]
//case wartość2: instrukcja JS
//    [break;]
//[default: instrukcja Js, gdy żadne z powyższych wartości nie pasuje do wyrażenia]
let miast="Kraków";
switch (miast) {
    case "Szczecin":
        console.log("Wybrano Szczecin");
        break;
    case "Kraków":
        console.log("Wybrano Kraków");
        break;
    case "Warszawa":
        console.log("Wybrano Warszawę");
        break;
     default:
         console.log("Default-nie wybrano miasta.");
         break;    
}

                                        //PĘTLA FOR
//for ([inicjalizacja]; [warunek]; [(in/de)krementacja]) {
//    instrukcja JS }
let arrayStudent = ['Ania','Kasia','Marek','Darek'];
for (let i=0; i<arrayStudent.length; i++) {
    console.log(arrayStudent[i]); //Wypisuje wzystkie imiona
}

                                    //PĘTLA FOR IN
//Pętla, która służy do iteracji po polach obiektu
//let obiekt = {
//    pole1: 'wartość1';
//    pole2:='wartość2';
// }
// for (let nazwaPola in obiekt) {
//    console.log(`${nazwaPola}) --> ${obiekt[nazwaPola])}`);
// }
let car = {
    marka: "Toyota",
    model: "Corolla",
    rok: "2020",
}
for (let key in car) {
    console.log('Nazwa pola: '+key+ ', Wartość pola: '+car[key]); //Odwołanie do wartości, [key] - odwołanie do wartości
    console.log(`Nazwa pola: ${key}, Wartość pola: ${car[key]}`); //inny zapis
}

                                        //PĘTLA FOR OF
//Pętla, która służy do iteracji po tablicach lub po stringach
// let array = [1,2,3,4] 
//for (let variable of array) {
//    instrukcje JS
// }
let arrStudent = ['Ania', 'Kasia','MArek','Darek'];
for (let elementY of arrayStudent) {
    console.log(elementY);
}
let nameString = 'Akademia108';
for (let elementZ of nameString) {
    console.log(elementZ);
}

                                        //PĘTLA FOR EACH
//Służy do iteracji tablicy
// let array = [1,2,3];
//arrayStudent.forEach(function(element, index) {
//    instrukcja JS
//}
arrayStudent.forEach(function(element, index) { //lub zapis arrStudent.forEach(arrIteration-nazwa funkcji)
    console.log(`Element z indeksem: ${index} ma wartość ${element}`);
})

                                        //PĘTLA WHILE (najpierw jest sprawdzany warunek)
//while (warunek) {
//    instrukcje JS
//}
//let pass = null;
//while (pass !== 'secret') {
//    pass = prompt('Podaj haslo');
//}
//alert("Zalogowany pierwszy raz, zaraz zobaczysz treść strony");

                                        //PĘTLA DO WHILE (wykonuje się przynajmniej raz)
//do {
//    instrukcje JS
//}    while (warunek) 
//let isLoggedIn = false; //Po zalogowaniu warunek zmienia się na true 
//while (!isLoggedIn) {
//    pass = prompt('Podaj haslo');
//    if (pass==='secret')
//    isLoggedIn=true;
//}
//alert("Zalogowany drugi raz");

//let isLoggedInn = true; //W przypadku gdy ktoś się wcześniej zalogował
//do {
//    pass = prompt('Podaj haslo');
//    if (pass==='secret')
//    isLoggedInn=true;
//} while (!isLoggedInn) 
//alert("Zalogowany trzeci raz- do while");

                                   //INSTRUKCJA BREAK (przerywa działanie każdej pętli)
let arrayT=[1,2,3,108,4,5,6];
for (let i=0; i<arrayT.length; i++) {
    if (arrayT[i]===108) {
        break;
    }
    console.log(arrayT[i]);
}
for (const elementV of arrayT) {
    if (elementV===108) {
        break;
    }
    console.log(elementV);
}
                                    //INSTRUKCJA CONTINUE (Przerywa dziąłanie aktualnej iteracji i przechodzi do następnej)
for (let i=0; i<arrayT.length; i++) {
    if (arrayT[i]===108) {
        continue; //Nie pokaże wartości 108
    }
    console.log(arrayT[i]);
}

                                        //JSON – Jest formatem do przechowywania i wymiany danych (łańcuch znaków)
let listaPracownikow = {
"employees": [ //To całość to obiekt
    {"firstName": "Hans", "lastName": "Schmidt"}, 
    {"firstName": "Jan", "lastName": "Nowak"},
    {"firstName": "Marek", "lastName": "Kowalski"}
    ]
};
console.log(listaPracownikow.employees[0]);
console.log(listaPracownikow.employees[0].firstName);

for (let pracownik of listaPracownikow.employees) {
    console.log(pracownik);
    console.log(pracownik.lastName);
}
//Trzeba zamienić z tablicy na stringa aby wysłać na serwer
console.log(JSON.stringify(listaPracownikow));

//Tekst zamieniamy na tablicę JS
let listaPrac = `{
    "employees": [
        {"firstName": "Hans", "lastName": "Schmidt"}, 
        {"firstName": "Jan", "lastName": "Nowak"},
        {"firstName": "Marek", "lastName": "Kowalski"}
        ]
    }`; //To jest cały string
    console.log(listaPrac); //String
console.log(JSON.parse(listaPrac));