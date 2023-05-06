import {readFile} from "../../../constants.js";

const data = readFile('2022/day/4/data.txt')

const checkIfTasksAreCovered = (tasks, tasks2bChecked) => {
    const tasksStart = parseInt(tasks.split('-')[0])
    const tasksEnd = parseInt(tasks.split('-')[1])
    const tasks2bCheckedStart = parseInt(tasks2bChecked.split('-')[0])
    const tasks2bCheckedEnd = parseInt(tasks2bChecked.split('-')[1])

    return tasksStart >= tasks2bCheckedStart && tasksEnd <= tasks2bCheckedEnd;

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