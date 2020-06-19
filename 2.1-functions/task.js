"use strict";

//Задача №1
function getSolutions(a, b, c = 0) {
    let D = () => { return b**2 - (4 * a * c) };
    let getRootsOne = () => { return Math.round((-b + Math.sqrt(D())) / (2 * a)) };
    let getRootsTwo = () => { return Math.round((-b - Math.sqrt(D())) / (2 * a)) };
    let object = {
        D: D(),
        roots: []
    }
    if (D() > 0) {
        object.roots.push(getRootsOne());
        object.roots.push(getRootsTwo());
    }
    else if (D() == 0) {
        object.roots.push(getRootsOne());
    }
    return object;
}

function showSolutionsMessage(a, b, c = 0) {
    let result = getSolutions(a, b, c);
    c ? console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`) : console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
    else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    else {
        console.log("Уравнение не имеет вещественных корней");
    }
}

//Задача №2
function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function getAverageScore(data) {
    let result = {};
    let allAverages = [];
    for (let obj in data) {
        result[obj] = getAverageMark(data[obj]);
        allAverages.push(result[obj]);
    }
    result.average = getAverageMark(allAverages);
    return result;
}

//Задача №3
function getPersonData(secretData) {
    const obj = {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb),
    }
    return obj;
}

function getDecodedValue(secret) {
    return secret ? 'Эмильо' : 'Родриго';
}

