const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const lista = document.querySelector("ul.list");

const trimBandName = (name) => {
    return name.replace(/^(a |the |an )/i, '').trim();
}

const sortArrayWithoutArticles = (array) => {

    const sortedArray = array.slice().sort((a, b) => trimBandName(a) > trimBandName(b) ? 1 : -1);

    return sortedArray;
}

const fillList = (array, ul) => {

    ul.innerHTML = array.map((item) => {
        return `<li> ${item} </li>`
    }).join('');

}

fillList(sortArrayWithoutArticles(bands), lista);