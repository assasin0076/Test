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

const Validate = ({ doValidate, inner, children, data }) => {
    
    const container = React.useRef(null);

    const validate = () => (e) => {
        console.log(e.target.parentNode.childNodes)
    }
    return (
        <div ref={container} className='block p-2 m-3'>
            <p className='hovered' onClick={validate()}>ValidateComp</p>
            {children.length === 0 ? '' : children.map(child => {
                return <Validate inner={child.inner} children={child.children}/>
            })}
            
            <p>{inner.text}</p>
        </div>
    );
};


export default connect(mapStateToProps, actionCreators)(Validate);