//Задача №1
function parseCount(value) {
    if (isNaN(Number.parseInt(value))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(e) {
        return e;
    }
}

//Задача №2
class Triangle {
    constructor(a, b, c) {
        const error = new Error('Треугольник с такими сторонами не существует');
        if (a + b < c) {
            throw error;
        }
        else if (a + c < b) {
            throw error;
        }
        else if (b + c < a) {
            throw error;
        }
        else {
            this.sides = [a, b, c];
        }
    }

    getPerimeter() {
        return this.sides.reduce((a,b) => a + b);
    }

    getArea() {
        const halfPerimeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.sides[0]) * (halfPerimeter - this.sides[1]) * (halfPerimeter - this.sides[2])).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch {
        return {
            getArea() {return 'Ошибка! Треугольник не существует'},
            getPerimeter() {return 'Ошибка! Треугольник не существует'}
        };
    }
}