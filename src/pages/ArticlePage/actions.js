import api from './apiCalls';
import constants from './constants';

export default {
    getArticle(id) {
        return function (dispatch, getState) {
            const currentState = getState();
            let existingArticle;

            if (currentState.article._id === id) existingArticle = currentState.article;
            if (
                existingArticle ||
                (existingArticle = currentState.articles.find(a => a._id === id))
            ) return dispatch({
                type: constants.GET_ARTICLE_SUCCESS,
                article: existingArticle
            });
            
            return api.getArticle(id)
                .then(article => dispatch({
                    type: constants.GET_ARTICLE_SUCCESS,
                    article
                })
            )
        }
    }
}