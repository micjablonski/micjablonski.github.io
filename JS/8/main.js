let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
const bubbleSort = (arr) => {
  for (let i = 0; i < tablica.length; i++) {
    for (let j = 0; j < tablica.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
return arr;
};
bubbleSort(arr);
console.log(arr);