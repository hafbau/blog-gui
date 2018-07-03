import {
    FORM_UPDATE,
    FORM_ERROR,
    FORM_RESET_TO_PREFILLED,
    FORM_RESET
} from './action_types';
/**
 * createReducer
 * Creates the main reducer with the specific reducers
 */
export function createReducer() {
    return formReducer
}

/**
 * formReducer
 * Global form specific reducer for the form state object.
 * Initialized with the array properties e.g. deceasedExSpouses
 * @param {object} state
 * @param {object} action to be reduced
 */
export const formInitialState = {
    deceasedExSpouses: [],
    deceasedMaritalStatus: 'married',
    deceasedChildrenAllSameCoParent: 'yes',
    deceasedHasDescendantsRelatedByBlood: 'yes',
    deceasedHasNonAdultDependentDescendants: 'yes',
    deceasedWillFullName: '',
    deceasedCompleteAddress: '',
    deceasedSpouseCompleteAddress: ''
}
export function formReducer(state = formInitialState, action) {
    switch (action.type) {
        case FORM_UPDATE:
            return {
                ...state,
                form: action.form,
            }
        case FORM_ERROR:
            return {
                ...state,
                form: { ...state.form, errors: action.errors }
            }
        case FORM_RESET_TO_PREFILLED:
            return {
                ...state,
                form: formInitialStatePrefilled
            }
        case FORM_RESET:
            return {
                ...state,
                form: formInitialState
            }
        default:
            return state
    }
}


export const formInitialStatePrefilled = {
    "deceasedExSpouses": [{
        "province": "Alberta",
        "country": "Canada",
        "isAlive": "yes",
        "name": "Christopher Mcclur",
        "address1": "393 North Cowley Freeway",
        "address2": "Delectus",
        "city": "Culpa",
        "postCode": "7630",
        "marriageDate": "2005-02-20",
        "divorceDate": "2006-11-19",
        "CompleteAddress": "393 North Cowley Freeway, Delectus, Culpa, Alberta, Canada, 7630"
    }, {
        "province": "Ontario",
        "country": "others",
        "isAlive": "no",
        "name": "Charissa Guzman",
        "address1": "575 First Parkway",
        "address2": "Expedita",
        "city": "Adipisci",
        "postCode": "523302",
        "marriageDate": "1985-05-08",
        "divorceDate": "1987-02-05",
        "deathDate": "2017-12-04",
        "CompleteAddress": "575 First Parkway, Expedita, Adipisci, Ontario, others, 523302"
    }],
    "deceasedMaritalStatus": "married",
    "deceasedChildrenAllSameCoParent": "no",
    "deceasedHasDescendantsRelatedByBlood": "yes",
    "deceasedHasNonAdultDependentDescendants": "yes",
    "deceasedWillFullName": "Iris Reed Macdonal Arnold",
    "deceasedCompleteAddress": "13 East Fabien Road, Sint cumque, Sed, Alberta, Canada, 5058",
    "deceasedSpouseCompleteAddress": "10 Cowley Freeway, Iusto, Itaque, British Columbia, United States",
    "errors": {
        "deathDate": "Date of Death is required",
        "adoptionDate": "Date of Adoption is required"
    },
    "userFirstName": "Quincy",
    "userMiddleName": "Adrian Aguilar",
    "userLastName": "Glove",
    "userBirthDate": "1981-08-13",
    "userEmail": "chantelle@tillerdigital.c",
    "userCellNumber": "1013424314",
    "userAddress1": "427 Nobel Extensio",
    "userAddress2": "Exercitationem",
    "userCity": "Tempor",
    "userProvince": "British Columbia",
    "userCountry": "others",
    "userPostCode": "287j73kd",
    "userCompleteAddress": "427 Nobel Extensio, Exercitationem, Tempor, British Columbia, others, 287j73kd",
    "deceasedGender": "female",
    "deceasedFirstName": "Iris",
    "deceasedMiddleName": "Reed Macdonal",
    "deceasedLastName": "Arnold",
    "deceasedBirthDate": "1958-02-12",
    "deceasedBirthCity": "Enim",
    "deceasedBirthProvince": "Alberta",
    "deceasedBirthCountry": "Canada",
    "deceasedBirthCompleteAddress": "Enim, Alberta, Canada",
    "deceasedDeathDate": "2018-04-21",
    "deceasedDeathCity": "Eter",
    "deceasedDeathProvince": "Alberta",
    "deceasedDeathCountry": "Canada",
    "deceasedDeathCompleteAddress": "Eter, Alberta, Canada",
    "deceasedAddress1": "13 East Fabien Road",
    "deceasedAddress2": "Sint cumque",
    "deceasedCity": "Sed",
    "deceasedProvince": "Alberta",
    "deceasedCountry": "Canada",
    "deceasedPostCode": "5058",
    "relationshipToDeceased": "child",
    "userWillRole": "coExecutor",
    "areOtherCoExecutorsCoApplying": "yes",
    "deceasedHasPriorMarriage": "yes",
    "deceasedSpouseName": "Jescie Peters",
    "deceasedSpouseMarriageDate": "1993-02-11",
    "deceasedSpouseAddress1": "10 Cowley Freeway",
    "deceasedSpouseAddress2": "Iusto",
    "deceasedSpouseCity": "Itaque",
    "deceasedSpouseProvince": "British Columbia",
    "deceasedSpouseCountry": "United States",
    "deceaseSpousePostCode": "690751",
    "deceaseSpouseCompleteAddress": "690751",
    "deceasedHasChildren": "yes",
    "deceasedChildren": [{
        "province": "British Columbia",
        "country": "United States",
        "legalRelationship": "biological",
        "isAlive": "yes",
        "coParentName": "Jescie Peters",
        "hasChildren": "yes",
        "isChallengedAdult": "no",
        "isStudentAdult": "no",
        "name": "Aurelia Joyce",
        "address1": "828 Hague Drive",
        "address2": "Hague",
        "city": "Voluptate",
        "postCode": "5139",
        "birthDate": "1992-11-16",
        "CompleteAddress": "828 Hague Drive, Hague, Voluptate, British Columbia, United States, 5139"
    }, {
        "province": "Alberta",
        "country": "Canada",
        "legalRelationship": "adopted",
        "isAlive": "yes",
        "coParentName": "Charissa Guzman",
        "hasChildren": "no",
        "isChallengedAdult": "no",
        "isStudentAdult": "yes",
        "name": "Tanek Joseph",
        "address1": "584 Old Drive",
        "address2": "Dolores",
        "city": "Quix",
        "postCode": "701902",
        "birthDate": "2000-04-26",
        "adoptionDate": "2006-12-31",
        "CompleteAddress": "584 Old Drive, Dolores, Quix, Alberta, Canada, 701902"
    }, {
        "province": "Alberta",
        "country": "Canada",
        "legalRelationship": "biological",
        "isAlive": "yes",
        "coParentName": "Other",
        "hasChildren": "no",
        "isChallengedAdult": "yes",
        "isStudentAdult": "yes",
        "name": "Phelan Rodriguez",
        "address1": "823 Milton Drive",
        "address2": "Cum placeat",
        "city": "Itaque",
        "postCode": "225922",
        "birthDate": "1998-03-22",
        "coParentNameOther": "Rhea Dawson",
        "CompleteAddress": "823 Milton Drive, Cum placeat, Itaque, Alberta, Canada, 225922"
    }],
    "deceasedChildrenWithDifferentCoParent": ["Tanek Joseph", "Phelan Rodriguez"],
    "deceasedNonAdultDependentDescendants": [{
        "province": "British Columbia",
        "country": "United States",
        "name": "Luke Brock",
        "address1": "29 North Clarendon Road",
        "address2": "At sit iured",
        "city": "Veniam",
        "postCode": "7912",
        "birthDate": "2016-04-24",
        "CompleteAddress": "29 North Clarendon Road, At sit iured, Veniam, British Columbia, United States, 7912"
    }],
    "deceasedHasWill": "yes",
    "deceasedHandwroteWill": "no",
    "deceasedHasOtherName": "yes",
    "deceasedAllNames": "Retina Jars,\nJeeves",
    "deceasedSpouseWillFullName": "Jescie Peters James",
    "deceasedWillSignedDate": "2015-12-31",
    "deceasedWillHasNamedExecutor": "yes",
    "deceasedWillNamedExecutors": [{
        "province": "Alberta",
        "country": "Canada",
        "relationship": "brother",
        "isAlive": "yes",
        "role": "coExecutor",
        "isOlderThan18": "yes",
        "isWilling": "yes",
        "name": "Todd Este",
        "age": "44",
        "address1": "74 North Clarendon Street",
        "address2": "Voluptate cumque",
        "city": "Iste",
        "postCode": "4782",
        "CompleteAddress": "74 North Clarendon Street, Voluptate cumque, Iste, Alberta, Canada, 4782"
    }],
    "deceasedWillWitnessesNames": "Willy Wit\nNess Boyd",
    "deceasedMarryOrAIPAfterWill": "no",
    "isOriginalLastWill": "yes",
    "hasWillBeenAmended": "no",
    "deceasedAge": 60,
    "userAge": 36
}