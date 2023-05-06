import {readFile} from "../../../constants.js";

const RockPaperScissorsCalculatePoints = (opponent, outcome) => {

    let points = 0

    switch(opponent) {
        case 'A': // Rock
            switch (outcome) {
                case 'X':
                    // Lose - Scissors
                    points += (0 + 3);
                    break;
                case 'Y':
                    // Draw - Rock
                    points += (3 + 1);
                    break;
                case 'Z':
                    // Win - Paper
                    points += (6 + 2);
                    break;
            }

            break;
        case 'B': // Paper
            switch (outcome) {
                case 'X':
                    // Lose - Rock
                    points += (0 + 1);
                    break;
                case 'Y':
                    // Draw - Paper
                    points += (3 + 2);
                    break;
                case 'Z':
                    // Win - Scissors
                    points += (6 + 3);
                    break;
            }

            break;
        case 'C': // Scissors
            switch (outcome) {
                case 'X':
                    // Lose - Paper
                    points += (0 + 2);
                    break;
                case 'Y':
                    // Draw - Scissors
                    points += (3 + 3);
                    break;
                case 'Z':
                    // Win - Rock
                    points += (6 + 1);
                    break;
            }

            break;
        default:
        // code block
    }

    return points
}

const data = readFile('2022/day/2/data.txt')

let totalPoints = 0

data.split('\n').forEach(match => {
    if (match === '') return;
    const opponent = match.split(' ')[0]
    const outcome = match.split(' ')[1]

    totalPoints += RockPaperScissorsCalculatePoints(opponent, outcome);
    console.log(`Opponent (${opponent}) and outcome (${outcome}) and the score is ${RockPaperScissorsCalculatePoints(opponent, outcome)}`)
})


console.log(`Total points ${totalPoints}`)