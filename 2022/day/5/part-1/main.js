import {readFile} from "../../../constants.js";

const data = readFile('2022/day/5/data.txt');
const dataProcessed = [[], [], [], [], [], [], [], [], []];
data.split('\n').forEach((line, index) => {
    if (index < 8) {
        let lineChopped = line.match(/.{1,4}/g) ?? [];
        lineChopped.forEach((text, index) => {
            if (!text.includes('  ')) {
                const item = text.replace('[', '').replace(']', '').replace(' ', '')
                dataProcessed[index].push(item)
            }
        })
    } else if (index >= 10) {
        const amount = parseInt(line.split(' from ')[0].replace('move ', ''))
        const from = parseInt(line.split(' from ')[1].split(' to ')[0])
        const to = parseInt(line.split(' to ')[1])
        // console.log(`${amount}, ${from}, ${to}, ${line}`)

        for (let i = 1; i <= amount; i++) {
            const item = dataProcessed[from - 1].shift();
            dataProcessed[to - 1].unshift(item);
        }
    }


})

console.log(dataProcessed[0][0], dataProcessed[1][0], dataProcessed[2][0], dataProcessed[3][0], dataProcessed[4][0], dataProcessed[5][0], dataProcessed[6][0], dataProcessed[7][0], dataProcessed[8][0])
