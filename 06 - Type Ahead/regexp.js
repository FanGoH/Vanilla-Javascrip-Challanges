const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

document.addEventListener("DOMContentLoaded", () => {
    const cities = [];
    let input = document.querySelector(".searchbox");
    let results = document.querySelector(".results");

    fetch(endpoint)
        .then((blob) => {
            return blob.json();
        })
        .then((data) => cities.push(...data));

    let displayResults = (resultsArray) => {
        let inner = resultsArray
            .map((resultado) => {
                return `<li> ${resultado.city}, ${resultado.state} </li>`;
            })
            .join("");

        results.innerHTML = inner;
    };

    let filterCities = (wordToSearch) => {
        let exp = new RegExp(wordToSearch, "gi");
        displayResults(
            (res = cities.filter((coso) => {
                return coso.city.match(exp) || coso.state.match(exp);
            }))
        );
    };

    input.addEventListener("change", (e) => filterCities(e.target.value));
    input.addEventListener("keyup", (e) => filterCities(e.target.value));
});