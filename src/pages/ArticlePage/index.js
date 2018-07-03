import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import get from 'lodash.get';
import { withStyles, Grid, Divider } from 'material-ui';

import {
    Button,
    ItemGrid,
    P
} from 'common/components';

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
        return (
            <div>
                {<article key={article._id}>
                    <img src={path + get(article, 'media.url')} alt={article.title} />
                    <h1>{article.title}</h1>
                    <small>{article.createdAt}</small>
                    <P>{article.body}</P>
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
