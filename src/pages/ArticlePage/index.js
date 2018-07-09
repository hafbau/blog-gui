import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import get from 'lodash.get';
import { withStyles } from '@material-ui/core';
import Markdown from 'utils/markdown';

import config from 'config';
import actions from './actions';
import articlePageStyles from './styles';

const path = config.API_PATH;
class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        }
    }
    
    componentWillMount() {
        this.props.getArticle(get(this.props, 'match.params.id'))
            .then(article => this.setState({ article }));
    }
  
    render() {
        const { article } = this.state;
        const { classes } = this.props;
        return (
            <div>
                {<article key={article._id}>
                    <div
                        className={classes.hero}
                        style={{ backgroundImage: `url(${path + get(article, 'media.url')})` }}
                    >
                        <div className={classes.titleWrapper}>
                            <h1>{article.title}</h1>
                            <small>{article.createdAt}</small>
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

export default connect(
  null,
  mapDispatchToProps)(
  withStyles(articlePageStyles)(ArticlePage)
);
