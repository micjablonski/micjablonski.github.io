let n = prompt("Ktory wyraz ciagu Fibonacciego mam wyznaczyc?"), a = 0, b = 1, result;
const ciag = function () {
    if (n<0) {
        console.log('Wartosc niepoprawna. Wyraz ciagu musi byc wiekszy lub rowny 0');
    } else if (n==0) {
        console.log('Wyraz ' + n + ' ciagu Fibonacciego wynosi: 0');
    } else if (n==1) {
        console.log('Wyraz ' + n + ' ciagu Fibonacciego wynosi: 1');
    } else {
        for (let i = 1; i < n; i++) {
                result = a + b;
                a = b;
                b = result;
        }
        console.log('Wyraz ' + n + ' ciagu Fibonacciego wynosi: ' + result);
    }
}
ciag(n); 
alert('Wyraz ' + n + ' ciagu Fibonacciego wynosi: ' + result);   