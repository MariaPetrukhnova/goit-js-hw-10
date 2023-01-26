const ENDPOINT = 'https://restcountries.com/v2/name/';

export function fetchCountries(name) {
    return new Promise((resolve, reject) => {
        fetch(`${ENDPOINT}${name}?fields=name,capital,population,languages,flags`)
            .then(response => {
                console.log(response);
                if (response.ok === false) {
                    throw new Error('Such a request has not been found');
                }
            return response.json();
        })
        .then(countries => {
            resolve(countries);
        })
        .catch(error => {
            reject(error)
        });
    })
}
