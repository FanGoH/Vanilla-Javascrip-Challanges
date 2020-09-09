const lista = document.querySelector(".lista");
const addItems = document.querySelector(".add");
const items = JSON.parse(localStorage.getItem("items")) || []

const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


const formCallback = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.querySelector("[name=item]").value;
    
    const item = {
        name: itemName,
        checked: false,
    }    

    items.push(item);
    fillList(items, lista);

    updateLocalStorage("items", items);

    form.reset();    
}

const fillList = (list, whereTo) => {
    whereTo.innerHTML = list.map((item, i) => {
        return `<li>
                    <input type="checkbox" data-id="${i}" id="${i}" ${item.checked ? 'checked' : ''}>
                    <label for="${i}"> ${item.name} </label>
                </li>`

    }).join('');
}

const toggleChecked = (e) => {
    if(!e.target.matches('input'))
        return;

    items[e.target.dataset.id].checked = !items[e.target.dataset.id].checked;
    updateLocalStorage("items", items);
}

addItems.addEventListener("submit", formCallback);
lista.addEventListener("click", toggleChecked);

fillList(items, lista);