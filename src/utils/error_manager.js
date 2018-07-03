import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import get from 'lodash.get';
import { raiseError } from 'state_manager/actions';

export function withErrors(Component) {
    class ErrorWrapper extends React.Component {
        state = {}

        componentWillMount() {
            this.props.inputProps.onBlur = this.injectOnBlur(this.props)
            // put error onto global state on initialize
            this.props.raiseError({
                name: this.props.inputProps.name,
                text: validateRequired(
                    this.props,
                    get(this.props, `inputProps.defaultValue`)
                )
            });
        }

        componentWillReceiveProps(nextProps) {
            if (!nextProps.inputProps.onBlur) nextProps.inputProps.onBlur = this.injectOnBlur(nextProps);
        }

        injectOnBlur(props) {
            return ({ target: { value } }) => {
                let error = validateRequired(props, value);
                this.setState({ error })
                this.props.raiseError({
                    name: props.inputProps.name,
                    text: error
                });
            }
        }
        
        render() {
            const { raiseError, ...otherProps } = this.props;
            return <Component {...otherProps} error={this.state.error} />;
        }
    }
    
    // Data Connection
    function mapDispatchToProps(dispatch) {
        return {
            raiseError: bindActionCreators(raiseError, dispatch),
        };
    }
    // return ErrorWrapper;
    return connect(null, mapDispatchToProps)(ErrorWrapper);
}

/**
 * validateRequired
 * Returns an error text if field is required and value is empty
 */
function validateRequired({ formControlProps: { required }, labelText }, value) {
    return required && !value ? `${labelText} is required` : ''
}

/**
 * validateEmail
 * Returns an error text if email is invalid
 */
function validateEmail(value) {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase()) ? '' : `Invalid email!`;
}

function validateCellNumber(value) {
    return '';
}

function validatePostCode(value) {
    return '';
}

/**
 * validators
 * Object containing all validators as `key: func`
 */
const validators = {
    required: validateRequired,
    email: validateEmail,
    cellnumber: validateCellNumber,
    postcode: validatePostCode
}

export default validators;

