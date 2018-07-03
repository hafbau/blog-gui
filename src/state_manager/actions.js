import {
    FORM_UPDATE,
    FORM_ERROR,
    FORM_RESET,
    FORM_RESET_TO_PREFILLED
} from "./action_types";

export function next(form) {
    return function (dispatch) {
        return dispatch({
            type: FORM_UPDATE,
            form
        })
    }
    
}

export function raiseError({ name, text }) {
    return function (dispatch, getState) {
        const { errors = {} } = getState().form;
        if (text) errors[name] = text;
        else delete errors[name]
        return dispatch({
            type: FORM_ERROR,
            errors
        })
    }
    
}

export function resetForm(isPrefilled) {
    return function (dispatch) {
        return dispatch({
                type: isPrefilled ? FORM_RESET_TO_PREFILLED : FORM_RESET
            })
    }
    
}