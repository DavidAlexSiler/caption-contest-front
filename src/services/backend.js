export async function getComic(){
    const r = await fetch('https://www.newyorker.com/cartoons/random/randomAPI');
    return await r.json();
}