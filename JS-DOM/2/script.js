const addItem = () => {
    let list = document.getElementById('items');
    let count = list.children.length + 1;
    let newEl = document.createElement('li');
    
    newEl.setAttribute('class','item');
    
    newEl.innerText = "Item " + count;

    list.appendChild(newEl);
}

let buttonItem = document.querySelector('button');
buttonItem.addEventListener('click', addItem);