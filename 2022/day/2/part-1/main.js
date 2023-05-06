import {readFile} from "../../../constants.js";

const RockPaperScissorsCalculatePoints = (me, opponent) => {

    let points = 0

    switch(me) {
        case 'X':
            points += 1;
            switch (opponent) {
                case 'A':
                    // draw
                    points += 3;
                    break;
                case 'B':
                    // loss
                    points += 0;
                    break;
                case 'C':
                    // win
                    points += 6;
                    break;
            }

            break;
        case 'Y':
            points += 2;
            switch (opponent) {
                case 'A':
                    // win
                    points += 6;
                    break;
                case 'B':
                    // draw
                    points += 3;
                    break;
                case 'C':
                    // loss
                    points += 0;
                    break;
            }

            break;
        case 'Z':
            points += 3;
            switch (opponent) {
                case 'A':
                    // loss
                    points += 0;
                    break;
                case 'B':
                    // win
                    points += 6;
                    break;
                case 'C':
                    // draw
                    points += 3;
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
    const me = match.split(' ')[1]

    totalPoints += RockPaperScissorsCalculatePoints(me, opponent);
    console.log(`Match between opponent (${opponent}) and me (${me}) and the score is ${RockPaperScissorsCalculatePoints(me, opponent)}`)
})


console.log(`Total points ${totalPoints}`)