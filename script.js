//1 
//a 
const jPDinos = [
    "Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"
];

//b 
function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
}
seeDinos(`Velociraptors`, `Tyrannosaurus Rex`, `Dilophosaurus`);


//2
//a 
const jPCharacters = {
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern", 
    ianMalcolm: "Jeff Goldblum"
}; 

//b 
seeCharacters = (lauraDern) => {
    console.log(lauraDern.ellieSattler);
};
seeCharacters(jPCharacters);


//BONUS 
//3 
//a
const jurassicParkMovies = [
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park", 
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Dominion"
    }
];

//b 
const seeJPMovies = function ([{one, two, three}, {four, five, six}]) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(jurassicParkMovies);
