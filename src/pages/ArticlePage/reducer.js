import constants from './constants';

export default function (state = {}, action) {
    switch (action.type) {
        case constants.GET_ARTICLE_SUCCESS:
            return {
                ...state,
                ...action.article
            };
        default:
            return state;
    }
}