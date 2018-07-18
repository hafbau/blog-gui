import constants from './articlesPageConstants';

export default function (state = [], action) {
    switch (action.type) {
        case constants.GET_ARTICLES_SUCCESS:
            return [
                ...action.articles
            ];
        default:
            return state;
    }
}