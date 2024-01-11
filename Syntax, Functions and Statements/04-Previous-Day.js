function previousDay(year, month, day){
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let prevDate = new Date(date.getTime() - oneDay);
    console.log(`${prevDate.getFullYear()}-${(prevDate.getMonth() + 1)}-${prevDate.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10 );