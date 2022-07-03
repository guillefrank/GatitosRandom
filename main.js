const URL= 'https://api.thecatapi.com/v1/images/search';

document.getElementById('random').onclick= imgrandom;
function imgrandom(){
    fetch(URL)
    .then (res => res.json())
    .then(data => {
        const img= document.querySelector('img');
        img.src= data[0].url;
    })

}