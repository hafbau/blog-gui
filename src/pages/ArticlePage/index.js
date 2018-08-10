import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import moment from 'moment';
import get from 'lodash.get';
import { withStyles } from '@material-ui/core';
import Markdown from 'utils/markdown';

import config from 'config';
import actions from './actions';
import articlePageStyles from './style';


const path = config.MEDIA_PATH;
class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentWillMount() {
        const articleId = get(this.props, 'match.params.id');
        this.props.getArticle(articleId);
    }

    navigateArticle(e, articleId) {
        // e.preventDefault();
        this.props.getArticle(articleId);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            article: nextProps.article,
            previousArticle: nextProps.previousArticle,
            nextArticle: nextProps.nextArticle,
        })
    }
  
    render() {
        const { article, previousArticle, nextArticle } = this.state;
        const { classes } = this.props;
        
        if (!article) return null;
        return (
            <div key={this.props.location.key}>
                {<article key={article._id} >
                    <div
                        className={classes.hero}
                        style={{ backgroundImage: `url(${path + article._id}` }}
                    >
                        <div className={classes.transparentLayer} >
                            <div className={classes.titleWrapper}>
                                <h1>{article.title}</h1>
                                <small>{moment(article.createdAt).format('DD MMMM, YYYY')}</small>
                            </div>
                            <div className={classes.adjacentArticlesNav}>
                                {previousArticle && <Link
                                    to={`/article/${previousArticle._id}`}
                                    className={classes.adjacentArticle}
                                    onClick={(e) => this.navigateArticle(e, previousArticle._id)}
                                >
                                    <span>&#10229;</span>
                                    <div>{previousArticle.title}</div>
                                </Link>}

                                <div className={classes.adjacentArticle}></div>

                                {nextArticle && <Link
                                    to={`/article/${nextArticle._id}`}
                                    className={classes.adjacentArticle + ' ' + classes.right}
                                    onClick={(e) => this.navigateArticle(e, nextArticle._id)}
                                >
                                    <span>&#10230;</span>
                                    <div>{nextArticle.title}</div>
                                </Link>}
                            </div>
                        </div>
                    </div>
                    <div className={classes.bodyWrapper}>
                        <aside
                            className={classes.contentAside + ' ' + classes.contentNav}>
                        </aside>

                        <section>
                            <header className={classes.articleSummary}>{article.summary || ''}</header>
                            <div className={classes.articleBody}>
                                <Markdown text={article.body} />
                            </div>
                        </section>

                        <aside className={classes.contentAside}></aside>
                    </div>
                </article>}
            </div>
        );
    }
}

ArticlePage.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getArticle: bindActionCreators(actions.getArticle, dispatch),
    }
}

function mapStateToProps(state = {}) {
    const currentIndex = state.articles.findIndex(a => a._id === state.article._id);

    return {
        article: state.article,
        previousArticle: state.articles[currentIndex - 1],
        nextArticle: state.articles[currentIndex + 1],
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(
    withStyles(articlePageStyles)(ArticlePage)
);
