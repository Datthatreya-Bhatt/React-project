import React from 'react';

import './Button.css';

const Button = props => {

    return (
        // <div >
            <button type={props.type} onClick={props.onClick} className= {`button ${!props.state ? 'invalid' : ''}`}>
            {props.children}
            </button>
        // </div>

    );
};

export default Button;
