import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import cn from 'classnames';

const actionCreators = {
    doValidate: actions.doValidate,
};

const mapStateToProps = (state) => {
    const { validates, } = state;
    return {
      validates,
    }
};

const Validate = ({ doValidate, validates, children, data }) => {

    const validate = (e) => {
        console.log(data)
    }
    console.log(data)
    return (
        <div className='block p-2 m-3'>
            <p className='hovered' onClick={validate}>ValidateComp</p>
            {children}
            <p>{data.inner.text}</p>
        </div>
    );
};


export default connect(mapStateToProps, actionCreators)(Validate);