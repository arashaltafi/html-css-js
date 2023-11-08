const date1 = new Date();
console.log("new Date", date1);

const date2 = new Date(2020, 1, 15, 10, 45, 58);
console.log("2020, 1, 15, 10, 45, 58", date2);

const date3 = new Date(1699353354541)
console.log("1699353354541", date3)

const date5 = new Date('2020-11-25')
console.log("2020-11-25", date5);

const date6 = new Date('2020-11')
console.log("2020-11", date6);

const date7 = new Date('2020')
console.log("2020", date7);

const date8 = new Date('2020/11/25')
console.log("2020/11/25", date8);

const date9 = new Date('2020/11')
console.log("2020/11", date9);

const date10 = new Date().getFullYear()
console.log("getFullYear", date10);

const date11 = new Date().getMonth()
console.log("getMonth", date11);

const date12 = new Date().getDay()
console.log("getMonth", date12);

const date13 = new Date().getHours()
console.log("getHours", date13);

const date14 = new Date().getMinutes()
console.log("getMinutes", date14);

const date15 = new Date().getSeconds()
console.log("getSeconds", date15);

const date16 = new Date().getMilliseconds()
console.log("getMilliseconds", date16);

const date17 = new Date().getTime()
console.log("getTime", date17);

const date18 = Date.now()
console.log("now", date18)

const ChangeTime = {
    Add: 'add',
    Subtract: 'subtract'
}

changeTime(ChangeTime.Add, 2, 'months')

function changeTime(calculate, count, type) {
    let finalTime;
    if (type == 'years') {
        finalTime = count * 12 * 30 * 24 * 60 * 60 * 1000
    } else if (type == 'months') {
        finalTime = count * 30 * 24 * 60 * 60 * 1000
    } else if (type == 'days') {
        finalTime = count * 24 * 60 * 60 * 1000
    } else if (type == 'hours') {
        finalTime = count * 60 * 60 * 1000
    } else if (type == 'minutes') {
        finalTime = count * 60 * 1000
    } else {
        finalTime = count * 1000
    }
    console.log(finalTime);
    if (calculate == ChangeTime.Add) {
        finalTime = Date.now() + finalTime
    } else if (ChangeTime.Subtract) {
        finalTime = Date.now() - finalTime
    }
    console.log(`before ${calculate}`, new Date())
    console.log(`after ${calculate}`, new Date(finalTime))
}

//moment
const momentInit = moment()
console.log("moment", momentInit)

const moment2 = momentInit.format('MMMM Do YYYY, h:mm:ss a');
console.log("format('MMMM Do YYYY, h:mm:ss a')", moment2)

const moment3 = momentInit.format('LT');
console.log("format('LT')", moment3)

const moment4 = momentInit.format('LTS');
console.log("format('LTS')", moment4)

const moment5 = momentInit.format('L');
console.log("format('L')", moment5)

const moment6 = momentInit.format('YYYY');
console.log("format('YYYY')", moment6)

const moment7 = momentInit.format('YYYY-MM');
console.log("format('YYYY-MM')", moment7)

const moment8 = momentInit.format('YYYY-MM-DD');
console.log("format('YYYY-MM-DD')", moment8)

const moment9 = momentInit.format('hh:mm:ss a');
console.log("format('hh:mm:ss a')", moment9)

const moment10 = momentInit.format('HH:mm:ss');
console.log("format('HH:mm:ss')", moment10)

const moment11 = moment('2023-11-15').isValid();
console.log("('2023-11-15').isValid()", moment11)

const moment12 = moment('2023-13-10').isValid();
console.log("('2023-11-15').isValid()", moment12)

const moment13 = moment('2023-11-31').isValid();
console.log("('2023-11-15').isValid()", moment13)

const moment14 = momentInit.add('1', 'days').format('YYYY-MM-DD');
console.log("add('1', 'days').format('YYYY-MM-DD')", moment14)

const moment15 = momentInit.add('1', 'weeks').format('YYYY-MM-DD');
console.log("add('1', 'weeks').format('YYYY-MM-DD')", moment15)

const moment16 = momentInit.add('1', 'months').format('YYYY-MM-DD');
console.log("add('1', 'months').format('YYYY-MM-DD')", moment16)

const moment17 = momentInit.subtract('1.5', 'weeks').format('YYYY-MM-DD');
console.log("subtract('1.5', 'weeks').format('YYYY-MM-DD')", moment17)

const moment18 = moment().unix() * 1000;
console.log("moment().unix() * 1000", moment18)

var currentMilliSecond = moment().unix() * 1000;
const moment19 = moment(currentMilliSecond).format('YYYY-MM-DD');
console.log("moment(currentMilliSecond).format('YYYY-MM-DD')", moment19)

const moment20 = moment('2023-11-07 18:10:00').fromNow();
console.log("moment('2023-11-08').fromNow()", moment20)

const time1 = moment('2023-11-07 18:10:00')
const time2 = moment('2023-11-07 18:05:00')
const moment21 = time1.from(time2);
console.log("time1.from(time2)", moment21)

const time3 = moment('2023-11-06 18:10:00')
const time4 = moment('2023-11-07 15:30:28')
console.log(time3);
console.log(time4);
const moment22 = time4.diff(time3);
console.log("time4.diff(time3)", moment22)

const time5 = moment(1695367457780)
const time6 = moment(1699387487790)
console.log(time5);
console.log(time6);
const moment23 = time6.diff(time5);
console.log("time6.diff(time5)", moment23)

const persianDate0 = new persianDate().format();
console.log("new persianDate().format()", persianDate0)

const persianDate1 = new persianDate();
console.log("new persianDate()", persianDate1)

const persianDate2 = new persianDate().format('YYYY');
console.log("new persianDate().format('YYYY')", persianDate2)

const persianDate3 = new persianDate().format('MMMM');
console.log("new persianDate().format('MMMM')", persianDate3)

const persianDate4 = new persianDate().format('dddd');
console.log("new persianDate().format('dddd')", persianDate4)

const persianDate5 = new persianDate().unix();
console.log("new persianDate().unix()", persianDate5)

const persianDate6 = new persianDate().unix(1695466992).format();
console.log("new persianDate().unix(1695466992).format()", persianDate6)

const persianDate7 = new persianDate(1695466992000).format();
console.log("new persianDate(1695466992000).format()", persianDate7)

const persianDate8 = new persianDate().format('YYYY/MM/DD');
console.log("new persianDate().format('YYYY/MM/DD')", persianDate8)

const persianDate9 = new persianDate().format('h:m:s');
console.log("new persianDate().format('HH:mm:SS')", persianDate9)

const persianDate10 = new persianDate().format('HH:mm:ss');
console.log("new persianDate().format('HH:mm:SS')", persianDate10)
