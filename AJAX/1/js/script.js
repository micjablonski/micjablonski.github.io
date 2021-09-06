console.log("AJAX - Pobierz dane programisty");

let btnGetData = document.getElementById('get-data');

const getData = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {

            let div = document.createElement('div');
            div.setAttribute('id','dane-programisty');


            let pFirma = document.createElement('p');
            let pImie = document.createElement('p');
            let pNazwisko = document.createElement('p');
            let pZawod = document.createElement('p');
            let hr = document.createElement('hr');

            pFirma.innerText = `Firma: ${data.firma}`;
            pImie.innerText = `Imie: ${data.imie}`;
            pNazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
            pZawod.innerText = `Zawod: ${data.zawod}`;

            div.appendChild(pFirma);
            div.appendChild(pImie);
            div.appendChild(pNazwisko);
            div.appendChild(pZawod);
            
            
            document.body.appendChild(div);
            document.body.appendChild(hr);

            //console.log(data);
        })

        .catch(error => {
            console.error(error);
        });

    //console.log('getData');

}

btnGetData.addEventListener('click', getData);