import api from './articlesPageAPICalls';
import constants from './articlesPageConstants';

export default {
    getArticles() {
        return function (dispatch) {
            return api.getArticles()
            //     .then(articles => dispatch({
            //         type: constants.GET_ARTICLES_SUCCESS,
            //         articles
            //     })
            // )
        }
    }
}