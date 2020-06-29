//Задача №1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        return this.state *= 1.5;
    }

    /**
     * @param {number} number
     */

    set state(number) {
        return number > 100 ? this._state = 100 : number ? this._state = number : this._state = 0;
    }
    
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

//Задача №2
class Library {

    /**
     * @param {stirng} name 
     */

    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        return book.state > 30 ? this.books.push(book) : console.log(`Книга ${book.name} не может быть добавлена в хранилище`);
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let index in this.books) {
            if (this.books[index].name === bookName) {
                let result = this.books[index];
                this.books.splice(index, 1);
                return result;
            }
        }
        return null;
    }
}

//Задача №3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (subject) {
            if (!this.grades[subject]) this.grades[subject] = [];
            grade >= 1 && grade <= 5 ? this.grades[subject].push(grade) : console.log('Некорректная оценка. Введите число в диапазоне от 1 до 5');
            return this.grades[subject].length;
        }
        else {
            console.log('Введите корректное название предмета');
        }
    }

    getAverageBySubject(subject) {
        return this.grades[subject] ? Math.round(this.grades[subject].reduce((a, b) => a + b)) / this.grades[subject].length : 0;
    }

    getTotalAverage() {
        let sum = 0;
        let count = 0;
        for (let subject in this.grades) {
            for (let mark of this.grades[subject]) {
                sum += mark;
                count++;
            }
        }

        return count ? sum / count : 0;
    }
}