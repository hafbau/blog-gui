export function getAge(dateString) {
    if (!dateString) return;
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function splitListToArray(list = '', delimiter = '\n') {
    return list.split(delimiter);
}

export function parseDate(dateString) {
    if (!dateString) return dateString;
    const dateArray = dateString.split('-');
    return `${MONTHS[Number(dateArray[1])]} ${dateArray[2]}, ${dateArray[0]}`
}

const MONTHS = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};