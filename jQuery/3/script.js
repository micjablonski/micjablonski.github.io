$(function () {

    const salaryPerson = $('.salary');

    $('#count-sum').click(function () {

        let sum = 0;

        $('.salary').each(function (index, element) {

            let salary = +element.innerText; //konwersja stringa do liczby parseFloate

            sum = sum + salary;
        });
        
        $('#sum').text(sum);
    });
});