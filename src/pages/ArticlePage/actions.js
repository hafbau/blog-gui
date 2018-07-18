import api from './apiCalls';
import constants from './constants';

export default {
    getArticle(id) {
        return function (dispatch) {
            return api.getArticle(id)
                .then(article => dispatch({
                    type: constants.GET_ARTICLE_SUCCESS,
                    article
                })
            )
        }
    }
}