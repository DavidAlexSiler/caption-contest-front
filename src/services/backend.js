export function getComic(){
    return fetch('https://www.newyorker.com/cartoons/random/randomAPI')
        .then(r => r.json());
}