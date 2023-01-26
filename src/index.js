import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createMarkupForCountry, createListMarkup } from './createMarkup';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const searchCountryInput = document.querySelector('#search-box');
const resultBlock = document.querySelector('#result');


function onCountryChange(event) {
    const country = event.target.value.trim();
    console.log(country)
    if (country) {
        fetchCountries(country)
            .then(countries => {
                let markup = '';

                if (countries.length > 10) {
                    Notify.info('Too many matches found. Please enter a more specific name');
                } else if (countries.length >= 2) {
                    markup = createListMarkup(countries)
                } else {
                    markup = createMarkupForCountry(countries[0])
                }

                document.querySelector('#result').innerHTML = markup
            })
            .catch(error => {
                Notify.failure(`Oops, there is no country with that name`);
                console.log(error);
                resultBlock.innerHTML = '';
            })
    }
} 

searchCountryInput.addEventListener('input', debounce(onCountryChange, DEBOUNCE_DELAY));
