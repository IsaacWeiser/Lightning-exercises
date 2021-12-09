const foods = ["pancakes", "fish", "pickles", "pan fried dumplings"]

const newMap =foods.map(food => {
    if (food !== "pickles")
    {
        return "I like to eat " + food + "!"
    }
    else
    {
        return `I don't like to eat ${food}`
    }
});

console.log(newMap);
