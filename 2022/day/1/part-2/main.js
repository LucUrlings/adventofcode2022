import {readFile} from "../../../constants.js";

const data = readFile('2022/day/1/data.txt')

const totalNumberOfCalories = [];

data.split('\n\n').forEach(caloriesSequence => {
    const caloriesSplitUp = caloriesSequence.split('\n').map(Number);
    totalNumberOfCalories.push(caloriesSplitUp.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
})

const topThreeHighestCalories = totalNumberOfCalories.sort((a, b) => b - a).slice(0, 3).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Highest number of calories: ${topThreeHighestCalories}`)