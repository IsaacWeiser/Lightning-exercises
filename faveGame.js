
//4 different ways to create this arrow function
const printFaveGame = (game) => {return `My favorite game is ${game}`}

const printFaveGame2 = game => {return `My favorite game is ${game}`}

const printFaveGame3 = (game) =>  `My favorite game is ${game}`;

const printFaveGame4 = game => `My favorite game is ${game}`;

for (let i=1; i<5;i++) {
    console.log(printFaveGame+i);
}