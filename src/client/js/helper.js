/**
* @description  split date string
* @param {Date} date
* @return {String[]}
*/
function weatherDateFormat(date) {
    const event = new Date(date);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return event.toLocaleDateString('en-US', options).split(", ");
}

function setCurrentDate() {
    document.getElementById('date-depart').value = new Date().toISOString().split('T')[0];
    document.getElementById('date-return').value = new Date().toISOString().split('T')[0];
}

function differenceInDays(date1, date2) {
    return Math.round((date1 - date2)/(1000*60*60*24));
}


export {
    weatherDateFormat,
    setCurrentDate,
    differenceInDays,
    
}