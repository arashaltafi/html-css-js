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
