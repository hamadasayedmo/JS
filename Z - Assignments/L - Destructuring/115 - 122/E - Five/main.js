const game = {
    title: "YS",
    developer: "Falcon",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Nap": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};

// Write Your Destructuring Assignment/s Here
let {title: t, developer: d} = game;
let [o, a] = Object.keys(game.releases);
let [u, j] = Object.values(game.releases);
let {us: u_price, j: j_price} = game.releases;;
let {Origin: or} = game.releases;;

console.log(`My Favorite Games Style Is ${t} Style`);
// My Favorite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcon Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Nap

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Nap Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Nap Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD