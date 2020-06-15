"use strict";

function getResult(a, b, c) {
    let firstValue;
    let secondValue;
    let x = [];

    let disc = Math.pow(b, 2) - (4 * a * c);

    if (disc > 0) {
        firstValue = (-b + Math.sqrt(disc)) / (2 * a);
        secondValue = (-b - Math.sqrt(disc)) / (2 * a);
        x.push(firstValue);
        x.push(secondValue);
        return x;
    }
    else if (disc == 0) {
        firstValue = (-b + Math.sqrt(disc)) / (2 * a);
        x.push(firstValue);
        return x;
    }
    else {
        return x;
    }
}


function getAverageMark(marks) {
    let sum = 0;
    let averageMark = 0;

    if (marks.length !== 0) {

        if (marks.length > 5) {
            console.log("Внимание, количество оценок превышает 5 - средняя будет посчитана только по первым 5-ти оценкам");
            marks.splice(5);
        }

        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }

        averageMark = sum / marks.length;
        return averageMark;
    }
    else {
        return 0;
    }
}

function askDrink(name, dateOfBirthday) {
    let message;
    let year = new Date().getFullYear();
    let userYear = dateOfBirthday.getFullYear();
    let age = year - userYear;

        if (age >= 18) {
            message = `Не желаете ли олд-фэшн, ${name}?`;
            return message;
        }
        else {
            message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
            return message;
        }
}