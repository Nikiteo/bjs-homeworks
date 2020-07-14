class AlarmClock  {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error ("Параметр id не задан");
        }
        if(this.alarmCollection.find(item => item.id == id)) {
            console.error('Будильник с таким id уже существует')
            return false;
        }
        this.alarmCollection.push({id, time, callback});
    }
    removeClock(id) {
        const deleteClock = this.alarmCollection.findIndex(item => item.id === id);
        if(!deleteClock) {
            this.alarmCollection.splice(deleteClock, 1);
            return true;
        }
        return false;
    }
    getCurrentFormattedTime() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        hours <= 9 ? hours = '0' + hours : hours;
        minutes <= 9 ? minutes = '0' + minutes : minutes;
        console.log(hours);
        console.log(minutes);
        return `${hours}:${minutes}`;
    }
    start() {
        if (!this.timerId) {
            this.timerId = setInterval(
                () => this.alarmCollection.forEach(item => this.checkClock(item.id)),
                500);
        }
    }
    checkClock(id) {
        const clockTime = this.alarmCollection.find(item => item.id === id);
        if (clockTime.time === this.getCurrentFormattedTime()) {
            clockTime.callback();
        }
    }
    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        console.log(`Печать будильников`);
        this.alarmCollection.forEach(item => console.log(item.id, item.time, item.callback));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const myClock = new AlarmClock();
    
    myClock.addClock("09:00", () => console.log('Печатаем...'), 1);
    myClock.addClock("09:01", () => {
        console.log('Печать 1 раз и удаление');
        myClock.removeClock(2);
        myClock.printAlarms();
        } , 2);
    myClock.addClock("09:02", () => {
        console.log('Печать один раз и удаление. Остановка.');
        myClock.clearAlarms();
        myClock.printAlarms();
        }, 3);
    
    console.log('Ошибка ID');
    myClock.addClock("09:10", () => console.log('the same ID'), 3);

    myClock.printAlarms();
    myClock.start();
}
testCase();