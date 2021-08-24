const addItem = () => {
    let list = document.getElementById('items');
    let count = list.children.length + 1;
    let newEl = document.createElement('li'); 
    
    newEl.innerText = "Item " + count;
    console.log(newEl);

    list.appendChild(newEl);
}

let buttonItem = document.querySelector('button');
buttonItem.addEventListener('click', addItem);