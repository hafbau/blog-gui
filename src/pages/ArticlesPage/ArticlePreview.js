import React from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import { Link } from 'react-router-dom';
import moment from 'moment';

const path = config.MEDIA_PATH;
export default class ArticlePreview extends React.Component {
    state = {
        hover: false
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { article, classes, style } = this.props;

        return (
            <div
                className={classes.articlePreview}
                key={article._id}
                style={{ ...style, backgroundImage: `url(${path + article._id})` }}
            >
                <div className={classes.articlePreviewTextWrapper}>
                    <h1>{article.title}</h1>
                    <p className={classes.articlePreviewSummary} >{article.summary}</p>
                    <small>{moment(article.createdAt).format('DD MMMM, YYYY')}</small>
                </div>
                <Link
                    to={`/article/${article._id}`}
                    className={classes.absoluteLink}>
                </Link>
            </div>
       )
    }
}

ArticlePreview.propTypes = {
    classes: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
};