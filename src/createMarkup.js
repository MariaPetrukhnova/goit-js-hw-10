
export { createMarkupForCountry, createListMarkup };
    
function createMarkupForCountry({ name, capital, population, languages, flags }) {
    const listOfLang = languages.map(lang => lang.name).join(", ");
    return `
    <div class="country-card">
        <img class="flag" src="${flags.svg}" alt="flag of ${name}">
        <h1 class="country">${name}</h1>
        <p class="country-info">Capital: <span class="country-data">${capital}</span></p>
        <p class="country-info">Population: <span class="country-data">${population}</span></p>
        <p class="country-info">Languages: <span class="country-data">${listOfLang}</span></p>
    </div> `
}

function createListMarkup(countries) {
    let result = '<ul class="country-list">';

    for (let i = 0; i < countries.length; i++) {
        result += createListItemMarkup(countries[i])
    }

    result += '</ul>'

    return result
}

function createListItemMarkup({ name, flags }) {
    return`
    <li class="country-item">
        <img class="item-flag" src="${flags.svg}" alt="flag of ${name}">
        <span class="item-name">${name}</span>
    </li>`
}

