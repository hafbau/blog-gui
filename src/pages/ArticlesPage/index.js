import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core';
import actions from './articlesPageActions';
import articlesPageStyles from './articlesPageStyles';
import ArticlePreview from './ArticlePreview';
import ArticlesPageFooter from './ArticlesPageFooter';

class ArticlesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            currentPage: 0
        }
    }
    
    componentWillMount() {
        this.props.getArticles()
            .then(articles => this.setState({ articles }));
    }

    navigate(step) {
        console.log('step', step)
        this.setState({ currentPage: this.state.currentPage + step })
    }
  
    render() {
        const { articles, currentPage } = this.state;
        const { classes } = this.props;
        return ([
            <div className={classes.articles}>
                {articles.map(article => <ArticlePreview
                    key={article._id}
                    article={article}
                    classes={classes}
                />)}
            </div>,
            <ArticlesPageFooter
                classes={classes.footerStyle}
                hasPrev={currentPage > 0}
                hasNext={currentPage < articles.length + 2}
                onNavigate={(step) => this.navigate(step)}
            />
        ]);
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
