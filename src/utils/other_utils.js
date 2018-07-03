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


export function parseRelationship(value) {
    return {
        "spouse": "Spouse",
        "adultIndependentPartner": "Adult Independent Partner",
        "child": "Child",
        "grandchild": "Grandchild",
        "father": "Father",
        "mother": "Mother",
        "grandfather": "Grandfather",
        "grandmother": "Grandmother",
        "brother": "Brother",
        "sister": "Sister",
        "niece": "Niece",
        "nephew": "Nephew",
        "friend": "Friend",
        "other": "Other"
    }[value]
}

export function parseMaritalStatus(value) {
    if (!value) return value;
    return {
        "married": "Married",
        "divorced": "Divorced",
        "separated": "Separated",
        "livingWithAdultIndependentPartner": "Living With Adult Independent Partner",
        "livingCommonLaw": "Living Common Law",
        "single": "Single",
        "widowed": "Widowed"
    }[value]
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