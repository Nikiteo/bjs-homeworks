"use strict";

String.prototype.isPalindrome = function() {
    return this.toLowerCase().replace(/ /g, '') === this.toLowerCase().replace(/ /g, '').split('').reverse().join('');
}

function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    return Math.round(marks.reduce((a, b) => (a + b)) / marks.length);
}

function checkBirthday(birthday) {
    const now = Number(new Date());
    const birthday = Number(new Date(date));
    const yearInMs = 365.25 * 24 * 60 * 60 * 1000;
    let diff = now - birthday;
    let age = Math.floor(diff / yearInMs);
    return age >= 18 ? true : false;
}
