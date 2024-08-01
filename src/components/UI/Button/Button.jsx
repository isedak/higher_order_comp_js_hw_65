import React from "react";
import './Button.css'

const Button = (props) => {

    return (
        <button
            onClick={props.click === undefined ? null : props.click}
            className={['Button', props.buttonClasses].join(' ')}
            disabled={props.disabled === undefined ? false : props.disabled}
        >
            {props.label}
        </button>
    )
};

export default Button;