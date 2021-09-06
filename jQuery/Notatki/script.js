//$(document).ready(function() { //Uruchamiamy skryptu w momencie załadowania całego pliku
//    $('h1').css('color','red').hide(1000).show(3000);
//});

//$(function(){
//    console.log('Skrócony zapis document ready w jQuery');

//});
//Zapis $(); to znaczy to samo co jQuery();, tylko, żę długi zapis 
//console.log($) - wywołuje funkcję, tłumaczy DOM na jQuery

                                            //Odwołania do elementów za pomocą selektorów
/* $(function () {
    const section = $('#about');
    console.log(section);

    const listItem = $('.list-item');
    console.log(listItem);

    const paragraph = $('p');
    console.log(paragraph);

    const secondItem = $('.list-item:nth-of-type(2)'); //Pseudoklasy
    console.log(secondItem);

    const link = $('a[title="See more"]');
    console.log(link);

    const headingsInSection = $('section h2');
    console.log(headingsInSection);

    const documentObj = $(document);//Tłumaczenie już istniejące obiekty DOM na jQuery
    console.log(documentObj);
}); */


                                                        //Odwołania elementów za pomocą metod jQuery
/* $(function(){
    const fifthElement = $('.list-item').eq(4);
    console.log(fifthElement);

    const firstElement = $('.list-item').first();
    console.log(firstElement);

    const lastElement = $('.list-item').last();
    console.log(lastElement);

    const paragraphNotDescription = $('p').not('.description'); //Wukluczył paragraf z klasą description
    console.log(paragraphNotDescription);

    const linksInSection = $('section').find('a') //Znalezienie linków a w sekcji
    console.log(linksInSection);
}) */


                                        //Poruszanie się po drzewie DOM
/* $(function(){

    const linkParents = $('a').parent();
    console.log(linkParents);

    const linkChildren = $('section').children();
    console.log(linkChildren);

    const elementAfterDescription = $('.description').next(); //Zwraca kolekcję elementów po klasie description
    console.log(elementAfterDescription);

    const elementBeforeDescription = $('.description').prev(); //Zwraca kolekcję elementow przed klasą description
    console.log(elementBeforeDescription);
});
 */

                                        //Tworzenie elementów, dodawanie oraz usuwanie elementów i ich zawartości
/* $(function(){
    const newLi = $('<li class="list-item">New item</li>'); //Stworzenie nowego elementu
    console.log(newLi);
    $('ul').prepend(newLi);//Stworzenie li na początku listy
    $('ul').append('<li class="list-item">Last item</li>');//Stworzenie na końcu poprzez podanie stringa
    $('ul').before('<h3>Lista na poczatku</h3'); //Wstawianie elementu przed ul
    $('ul').after('<h3>Lista na końcu</h3'); //Wstawianie elementu po ul

    $('h2').empty(); //Usunięcie h2
    $('.content').remove(); //Usunięcie elementów z drzewa DOM
});    */

                                        //Dodawanie i usuwanie atrybutów
/* $(function(){

$('#about h2').attr('id','main-heading'); //dodanie atrybutu do elementu h2

let titleValue = $('a').attr('title'); //Zwracanie atrybutu
console.log(titleValue);

let titleValue2 = $('a').eq(2).attr('title');
console.log(titleValue2);

$('section').removeAttr('id');//Usunięci atrybutu abaut w sekcji
$('section').addClass('new-class');//Dodanie klasy do elementu sekcji
$('.description').removeClass('description');//Ususnięcie klasy

console.log($('section').hasClass('new-class'));//Sprawdzanie istnienie klasy-true
$('p').toggleClass('content');//Przełanczeanie klasy jak ma to usunie, jak nie ma to doda
$('li').addClass('item ul-item'); //Dodaje nową klasę do wszystkich elementów

}); */

                                            //Manipulacja stylami
/* $(function(){

    $('p').css('background-color','pink'); //Ustawia kolor parametru p

    $('a').css({
        'text-decoration': 'none', //Brak podkreślenia dla linków a
        'color': 'red',
        'font-size': '1.5em'
    }); 
}); */

                                            //Manipulacja treścią i wartością znaczników             
/* $(function(){
    
    let headingText = $('h2').text();
    console.log(headingText);

    let parText = $('p').eq(0).html(); //Zwraca nam tekst ze znacznikkami html
    console.log(parText);

    $('h2').text('New heading text'); //Podmiana tekstu w h2
    
    $('p').eq(0).html('Lorem <span>ipsun</span>'); //Przetworzenie na znacznik (konwertorowanie) tylko pierwszego paragrafu

    $('#name').val('Michał'); //Zmienia zawartość pola imię z Adama na Michał
    
    $('#contact-form').submit(function(e){ //Pobieranie wartości z pola przycisku
        e.preventDefault();
        console.log($('#name').val());
        console.log($('#sname').val());
    });
}); */

                                        //Pętla na kolekcji elementów
/* $(function(){
    $('.list-item').css('margin-left', '20px');

    $('.list-item').each(function(index){ //Odwołanie do elementu li
        $(this).css('margin-left', index * 10 + 'px');  //this obiekt DOM, robi wcięcia dla każdego elementu z osobna (schodki)
    });
});
 */

                                        //Dodawanie i usuwanie nasłuchu zdarzeń oraz ich obsługa
/* $(function(){
    $('#click-button').click(function(){
        $('h2').toggleClass('color-orange'); //Po kliknięciu zmienia nam klasę dla h2
        $(this).css('background-color', 'green'); //Zmienia kolor przycisku na zielony
    });

    function changeFontSize(e) {
        e.preventDefault();
        $(this).css('font-size', '2em');
    };
    $('a').on('click', changeFontSize);

    $('#click-button').on({
        focus: function(){
            $(this).css('border','5px solid red'); //Ustawianie ramki gdy jest focus
        },
        blur: function(){
            $(this).css('border','0px solid red'); //Usuwanie ramki gdy nie jest focus
        }   
    });

    $('#remove-event').click(function(){
        $('a').off('click', changeFontSize); //usuwamy zdarzenie

        $('#click-button').off('click');

        $('#click-button').off(); //Odpipna działanie przyciisku zdarzenie po kliknięciu
    });
}); */

                                                //Predefiniowane metody do animacji
/* $(function(){
    const heading = $('h1');

    $('#hide').click(function(){
        heading.hide(2000); //Płynne krywa animowany nagłówek
    });

    $('#show').click(function(){
        heading.show(2000); //Płynne pokazanie anonimowanego nagłówka
    });

    $('#show-toggle').click(function(){
        heading.toggle(1000); //Płynne krywa i odsłanianie animowanego nagłówka
    });

    $('#fade-out').click(function(){
        heading.fadeOut(1000); //Płynne ukrywanie animowanego nagłówka, zmiana opasity
    });
    
    $('#fade-in').click(function(){
        heading.fadeIn(1000); //Płynne pojawienie animowanego nagłówka, zmiana opasity
    });

    $('#fade-toggle').click(function(){
        heading.fadeToggle(1000);
    });
    
    $('#slide-up').click(function(){
        heading.slideUp(1000); //Animacja - nagłówek zjeżdza na dół
    });

    $('#slide-down').click(function(){
        heading.slideDown(1000); //Animacja - nagłówek zjeżdza na dół
    });

    $('#slide-toggle').click(function(){
        heading.slideToggle(1000, function(){ //Można dodać funkcję
        alert('Element ukryty');
        });
    });
}); */

                                                //Animacje niestandardowe
/* $(function(){
    const heading = $('h1');
    $('#animate').click(function(){
        heading.animate({opacity: 0.3, fontSize: '3em'}, 2000, function(){
            $(this).after('<p>Animacja zakończona</p>'); //this wskazuje obiekt na którym zostanie wywołana metoda czyli heading
        });
    });
}); */

                                                //This i funkcje strzałkowe
/* $(function () {
    $('#animate').click(function () {
        console.log(this); //this wskazuje na DOM, który nie jest przetłumaczony na jQuery
        console.log($(this)); //Zwracany obiekt jQuery - zobacz w console 
        //this.style.backgroundColor = 'green'; //DOM
        $(this).css('background-color', 'red'); //Zapis jQuery
    });

    $('#animate').click((e) => {
        console.log('Jestem w funkcji strzałkowej');
        console.log(this); //Odwołanie do całego dokumentu i nie działa color blue w funkcji strzałkowej ale obchodzimy to parametrem w funkcji i e.target
        $(this).css('color','blue');
        $(e.target).css('color','yellow');
    });
}); */