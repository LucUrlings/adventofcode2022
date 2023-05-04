import {readFile} from "../../../constants.js";

const data = readFile('src/days/1/data.txt')

let highestNumberOfCalories = 0;

data.split('\n\n').forEach(caloriesSequence => {
    const caloriesSplitUp = caloriesSequence.split('\n').map(Number);

    const resultCalories = caloriesSplitUp.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    if (resultCalories > highestNumberOfCalories) highestNumberOfCalories = resultCalories
})

console.log(`Highest number of calories: ${highestNumberOfCalories}`)