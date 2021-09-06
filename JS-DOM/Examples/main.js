                                        //? DOCUMENT OBJECT MODEL - DOM

                                        //! OBJECT WINDOW
//*DOM jest interfejsem, czyli łącznikiem pomiędzy HTML a programistą.

// window.alert("Michał");
// alert('Michał');  //Działa tak samo jak u góry

// let age = window.prompt('Podaj swój wiek');
// console.log(`Masz ${age} lat`);

// let accept = window.confirm('Akceptuję umowę');
//         if (accept) {
//                 console.log('Umowa zaakceptowana');
//         } else {
//                 console.log('Umowa nie zaakceptowana');
//         }

// console.log(window); //Zobaczenie właściwości */

// console.log(`Wewnętrzna wysokość okna przęglądarki wynosi ${window.innerHeight}`);
// console.log(`Wewnętrzna szerokość okna przęglądarki wynosi ${window.innerWidth}`);

// window.document.write('Dopisze słow na stronie internetowej');

// let number=100; //Dopisze jako zmienną globalną
// console.log(window);

                                        //! OBJECT DOCUMENT
// console.log(window.document);
// console.log(document); //Znaczy to samo wczytuje objekt dokumentu HTML

// console.log(document.location);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.getElementsByTagName('body'));
// console.log(document.documentElement);
// console.log(document);

                                        //! DOSTĘP DO ELEMENTÓW DOM
//* Metoody zwracajace pojedyńczy Element;

// let articles = document.getElementById('articles'); //Zwraca obiekt 
// console.log(articles);

// let paragraph = document.querySelector('.content'); // Zwraca pierwszy selector
// console.log(paragraph);

                                        //! Metody zwracające grupę HTMLCollections

// let paragraphs = document.getElementsByClassName('content');
// console.log(paragraphs);
// console.log(paragraphs[0]); //Wyświetla pierwszy element

// let allParagraphs = document.getElementsByTagName('p');
// console.log(allParagraphs); //Nazwa tagu HTML, zwraca obiekt

// let paragraphContent = document.querySelectorAll('p.content');
// console.log(paragraphContent); //Zwraca obiekt w formacie Nodelist

                                        //! DRZEWA WĘZŁÓW DOM
//let node = document;

                                        //! ELEMENT-NODE
// node = document.documentElement;  
// node = document.head;
// node = document.body;
// console.log(node);

                                        //! ATTRIBUTE-NODE
// node= document.getElementById('articles').childNodes[3].attributes[0]; //0 - to atrybut, 1 - to klasa
// console.log(node);

                                        //! TEXT-NODE
// node = document.getElementsByClassName('content')[0].childNodes[0];
// console.log(node);

                                        //! COMMENT-NODE
// node = document.getElementById('articles').childNodes[1];
// console.log(node);

                                        //! DOCUMENT-NODE
// console.log(node);

                                        //! DOCUMENT_TYPE_NODE
// node = document.doctype;
// console.log(node);   

                                        //! DOCUMENT_FRAGMENT_NODE
// let documentFragment = new DocumentFragment();
// node = documentFragment;
// console.log();

                                        //! childNodes vs children        
// let list = document.getElementById('list');                            
// console.log(list.childNodes);
// console.log(list.children);

                                        //! PORUSZANIE SIĘ PO DOM
// let list = document.getElementById('list');
// console.log(list);
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(list.lastChild);
// console.log(list.lastElementChild);

// let firstElementChild = list.firstElementChild;
// let lastElementChild = list.lastElementChild;
// console.log(firstElementChild.parentNode.parentNode);
// console.log(firstElementChild.parentElement);
// console.log(firstElementChild.nextElementSibling); //Pobieranie rodzeństwa
// console.log(lastElementChild.previousSibling); 
// console.log(lastElementChild.previousElementSibling); 
// console.log(firstElementChild.hasChildNodes()); //Sprawdza czy istnieją nods
// console.log(firstElementChild.closest('#list')); //Zwraca najbliższy element
                                                
                                        //! TWORZENIE NOWYCH WĘZŁÓW - DOM
// let liElemnet = document.createElement('li');
// let textNode = document.createTextNode('Seventh (7)');
// let attrNode = document.createAttribute('class');
// attrNode.value='last';

// liElemnet.appendChild(textNode); //Wstrzyknięci tekstu Seventh (7) do li
// liElemnet.setAttributeNode(attrNode); //Wstrzyknięcie klasy

// let list = document.getElementById('list');
// list.appendChild(liElemnet);
// console.log(liElemnet);
// console.log(textNode);
// console.log(attrNode);
// console.log(list);

                                        //! DODAWANIE WĘZŁÓW DO DRZEWA DOM
// let liElement = document.createElement('li'); // Tworzy element <button>
// let txtNode = document.createTextNode('Seventh (7)'); // Tworzy tekst
// let attrNode = document.createAttribute('class'); // Tworzy atrybut class
 
// attrNode.value = 'last'; // ustawia wartość dla atrybutu class
 
// liElement.appendChild(txtNode);
// liElement.setAttributeNode(attrNode);

// let list = document.getElementById('list');

// let documentFragment = new DocumentFragment();
// documentFragment.appendChild(liElement);
// list.appendChild(documentFragment);

//list.insertBefore(liElement, list.lastElementChild) //Wstawianie elementu
//list.replaceChild(liElement, list.firstElementChild);
//list.lastElementChild.insertAdjacentElement('afterend',liElement);

//list.firstElementChild.insertAdjacentHTML('beforebegin','<li>Zero (0)</li>');
//list.lastElementChild.insertAdjacentText('beforeend', ' :)'); // dodaj ':)' za ostatnim

// console.log(liElement);
// console.log(txtNode);
// console.log(attrNode);
// console.log(list);
// console.log(documentFragment);
 
// list.insertBefore(liElement, list.firstElementChild); // Dodaje element liElement przed element będący pierwszym dzieckiem elementu list
// list.replaceChild(liElement, list.firstElementChild); // Dodaje element liElement zastępując pierwsze dziecko elementu list
// list.lastElementChild.insertAdjacentElement('afterend', liElement); //Dodaje element liElement za ostatnim dzieckiem elementu list
// list.firstElementChild.insertAdjacentHTML('beforebegin', '<li>Zero (0)</li>') // Dodaje element <li>Zero (0)</li> przed pierwszym dzieckiem elementu list
//list.lastElementChild.insertAdjacentText('beforeend', ' :)'); // Dodaje ':)' za ostatnim dzieckiem elementu listy  

                                        //! USUWANIE WĘZŁÓW Z DRZEWA DOM
// let list = document.getElementById('list');
// console.log(list);
// list.removeAttribute('id');
// list.removeChild(list.lastElementChild);
// list.lastElementChild.remove();

                                        //! ZMiANA TEKSTU I ZNACZNIKÓW HTML/CSS
// let h1 = document.querySelector('h1');
// console.log(h1.innerText);  //Pobranie tekstu
// console.log(h1.innerHTML);  //Pobranie tekstu wraz ze znacznikami
// console.log(h1.outerHTML);  //Pobranie tekstu wraz ze znacznikami h1
// h1.innerHTML = 'Dodanie nowego tekstu do znacznika';

// let list = document.getElementById('list');
// list.setAttribute('role', 'LIST');

// for (let listItem of list.children) {
//         listItem.setAttribute('role','NOWE'); //Ustawianie w liście atrybutu NOWE
// }
// console.log(list);

// let list = document.getElementById('list');
// let firstEl = list.firstElementChild;
// let lastEl = list.lastElementChild;

// firstEl.setAttribute('class', 'blue');
// lastEl.setAttribute('class', 'red');

// firstEl.className = firstEl.className + ' first'; //Połączenie klas blue i first
// lastEl.classList.add('last'); //Połączenie klas red i last
// lastEl.classList.remove('last') //Usuwanie klasy
// lastEl.classList.toggle('super-special') //Przełączenie klasy
// lastEl.classList.toggle('super-special') //Sprawdza czy istnieje klasa, jeżeli tak to ją usunie i w tym przypadku ją usunie bo istnieje

// console.log(list);
// console.log(firstEl);
// console.log(lastEl);
// console.log(firstEl.className); //Pokazuje nazwę klasy
// console.log(lastEl.classList); //Pokazuje nazwę klasy

// let list = document.getElementById('list');
// let firstEl = list.firstElementChild;
// let lastEl = list.lastElementChild;

// firstEl.style.color = 'red'; //Styl wstrzyknięty w lini
// lastEl.style.display = 'none'; //Zniknięcie ostatniego elementu

// console.log(list);
// console.log(firstEl);
// console.log(lastEl);

                                        //! WYWOŁYWANIE I OBSŁUGA ZDARZEŃ (EVENT)
//* Rejestrowanie zdarzenia bezpośrednio w kodzie HTML
// const sumUp = () => {
//         console.log('Suming up1');
// }

//*Przypisywanie zdarzeń przy użyciu HTML DOM
// let butSumUp = document.getElementById('sum-up2');
// butSumUp.onclick = sumUp; //Nie dodajemy nawiasów CALBACK - nazwa, a nie wywoływanie
// console.log(butSumUp);

//*Rejestrowanie zdarzeń za pomocą metody addEventListener()
// const sumUp = () => {
//         console.log('Suming up1');
// }
// let butSumUp = document.getElementById('sum-up2');
// butSumUp.addEventListener('click', sumUp); //Podajemy tylko nazwę sumUp bez nawiasów
// butSumUp.addEventListener('click', () => {
//         console.log('Suming up22222');
// }); //Można i w ten sposób wpisując ciało funkcji

//*Usuwanie zdarzeń
// let butSumUp = document.getElementById('sum-up2');
// butSumUp.removeAttribute('onclick');
// butSumUp.removeEventListener('click', sumUp); //Funkcja getEvensLisener używana tylko w konsoli

                                        //! WŁAŚCIWOŚCI OBIEKTU EVENT
// const sumUp = (event) => {
//         console.log(event);
//         console.log(`Target: ${event.target.outerHTML}`);
//         console.log(`Event type: ${event.type}`);
// }

// let butSumUp = document.getElementById('sum-up2');
// butSumUp.addEventListener('click', sumUp);
// butSumUp.addEventListener('dbclick', sumUp); //Podwójne kliknięcie

// let link = document.getElementById('link');
// link.addEventListener('click', (event1) => {
//         event1.preventDefault();                //Blokuje przechodzenia do strony i zapisuje tylko w konsoli
//         console.log('Default action stopped');
// });

// for (let btn of document.querySelectorAll('button.edit')) {
//         btn.addEventListener('click',(event)=> {
//                 alert('Edit user');
//                 event.stopPropagation(); //Nie ma propagacji zdarzeń, bo została wstrzymana
//         });
//         btn.closest('div.row').addEventListener('click',(event)=>{
//                 alert('About user');
//         });
// }