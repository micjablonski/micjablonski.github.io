console.log('Warsztat – Walidacja formularza zapisu do Newsletter’a');

let newsLetterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {
    let txtName = document.getElementById('name');
    let emailName = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    let errors = document.getElementById('errors');

    errors.innerHTML='';

    if (txtName.value.trim() === "") {       //Funkcja trim() ucina białe znaki z lewej i prawej strony
       let liError = document.createElement('li');
       liError.innerText = "Wpisz Imię i nazwisko!";
       errors.appendChild(liError);
    }

    if (emailName.value.trim() === "") {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz Adres e-mail!";
        errors.appendChild(liError);
     }

     if (!emailName.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = "Adres e-mail musi zawierać @!";
        errors.appendChild(liError);
     }

     if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = "Nie wyraziłeś Zgody 1";
        errors.appendChild(liError);
     }
    
     if (errors.children.length > 0) {
         event.preventDefault();
     }
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    
    console.log(event.target.checked);
}
newsLetterForm.addEventListener('submit',validate);
allAgreeChx.addEventListener('change', allAgree);
