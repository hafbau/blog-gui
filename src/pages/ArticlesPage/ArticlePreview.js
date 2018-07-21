import React from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Flipped } from 'react-flip-toolkit';

const path = config.MEDIA_PATH;
export default class ArticlePreview extends React.Component {
    state = {
        hover: false
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { article, classes } = this.props;

        return (<Flipped flipId={article._id} >
            <div
                className={classes.articlePreview}
                key={article._id}
                style={{ backgroundImage: `url(${path + article._id})` }}
                onMouseEnter={() => this.toggleHover() }
                onMouseLeave={() => this.toggleHover() }
            >
                <div className={classes.articlePreviewTextWrapper}>
                    <h1>{article.title}</h1>
                    {this.state.hover && <p>{article.summary}</p>}
                    <small>{moment(article.createdAt).format('DD MMMM, YYYY')}</small>
                </div>
                <Link
                    to={`/articles/${article._id}`}
                    className={classes.absoluteLink}>
                </Link>
            </div>
        </Flipped>)
    }
}

ArticlePreview.propTypes = {
    classes: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
};