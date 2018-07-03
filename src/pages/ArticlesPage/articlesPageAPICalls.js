import config from 'config';
import fetch from 'superagent';

export default {
    getArticles() {
        return fetch.get(`${config.API_PATH}/article`)
            .type('json')
            .set('Content-Type', 'application/json')
            .then(res => res.body);
    },
}