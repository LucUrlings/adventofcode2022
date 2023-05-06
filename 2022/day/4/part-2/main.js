import {readFile} from "../../../constants.js";

const data = readFile('2022/day/4/data.txt')

const checkIfTasksAreCovered = (tasks, tasks2bChecked) => {
    const tasksStart = parseInt(tasks.split('-')[0])
    const tasksEnd = parseInt(tasks.split('-')[1])
    const tasks2bCheckedStart = parseInt(tasks2bChecked.split('-')[0])
    const tasks2bCheckedEnd = parseInt(tasks2bChecked.split('-')[1])

    let result = false;
    for (let i = tasksStart; i <= tasksEnd; i++) {
        console.log(`tasksStart: ${tasksStart}, tasksEnd: ${tasksEnd}, i: ${i}, tasks2bCheckedStart: ${tasks2bCheckedStart}, tasks2bCheckedEnd: ${tasks2bCheckedEnd}, result: ${result}`)
        if (i >= tasks2bCheckedStart && i <= tasks2bCheckedEnd) {
            result =  true;
            break;
        }
    }
    return result;
}

let count = 0;
data.split('\n').forEach(taskduo => {
    const Elf1 = taskduo.split(',')[0]
    const Elf2 = taskduo.split(',')[1]

    if (checkIfTasksAreCovered(Elf1, Elf2)) count++;
    else {
        if (checkIfTasksAreCovered(Elf2, Elf1)) count++;
    }

})

console.log(count)