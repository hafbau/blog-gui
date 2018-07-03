import config from 'config';
import fetch from 'superagent';

export default {
    getArticle(id) {
        return fetch.get(`${config.API_PATH}/article/${id}`)
            .type('json')
            .set('Content-Type', 'application/json')
            .then(res => res.body || res);
    },
}