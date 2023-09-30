// https://api.weatherapi.com/v1/current.json?key=d2a54b121f6748a786113745233009&q=london

// GIPHY: 2g10RmCdXHVvqH355KNluVTdiRtPu31Z
// weatherAPI: d2a54b121f6748a786113745233009
// https://api.weatherapi.com/v1/current.json
// https://developers.giphy.com/docs/api/endpoint/


let img = document.querySelector('img');
let button = document.querySelector('#new');
let searchInput = document.querySelector('#search');
let searchButton = document.querySelector('#search-button');

/*
// fetch based (promises):



let fetchCats = (val = 'cats') => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=2g10RmCdXHVvqH355KNluVTdiRtPu31Z&s=${val}`, { mode: 'cors' })
        .then(response => {
            return response.json();
        })
        .then(response => {
            img.src = response.data.images.original.url;
        })
}

button.addEventListener('click', fetchCats);
searchButton.addEventListener('click', () => {
    fetchCats(searchInput.value);
})



fetchCats();
*/

// async/await based:

getCats = async (val = 'cats') => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=2g10RmCdXHVvqH355KNluVTdiRtPu31Z&s=${val}`, { mode: 'cors' });
    const data = await response.json();
    img.src = data.data.images.original.url;
};

button.addEventListener('click', getCats);
searchButton.addEventListener('click', () => {
    getCats(searchInput.value);
})

getCats();