import { combineReducers } from 'redux';
import articles from 'pages/ArticlesPage/reducer';
import article from 'pages/ArticlePage/reducer';


export default combineReducers({
    articles,
    article
});