import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core';
import actions from './articlesPageActions';
import articlesPageStyles from './articlesPageStyles';
import ArticlePreview from './ArticlePreview';

class ArticlesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    
    componentWillMount() {
        this.props.getArticles()
            .then(articles => this.setState({ articles }));
    }
  
    render() {
        const { articles } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.articles}>
                {articles.map(article => <ArticlePreview
                    key={article._id}
                    article={article}
                    classes={classes}
                />)}
            </div>
        );
    }
}

ArticlesPage.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getArticles: bindActionCreators(actions.getArticles, dispatch),
    }
}

export default connect(
  null,
  mapDispatchToProps)(
  withStyles(articlesPageStyles)(ArticlesPage)
);
