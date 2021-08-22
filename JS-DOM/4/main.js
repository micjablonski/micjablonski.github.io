console.log('Obsługa warsztatów');

const submitForm = (event) => {
    event.preventDefault(); //Formularz się nie wysyła
    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');
    console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
}
let form = document.getElementById('form');
form.addEventListener('submit', submitForm);
