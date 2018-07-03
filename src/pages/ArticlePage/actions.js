import api from './apiCalls';
import constants from './constants';

export default {
    getArticle(id) {
        return function (dispatch) {
            return api.getArticle(id)
            //     .then(articles => dispatch({
            //         type: constants.GET_ARTICLES_SUCCESS,
            //         articles
            //     })
            // )
        }
    }
}