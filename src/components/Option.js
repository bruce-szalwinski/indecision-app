import React from 'react';
export const Option = (props) => (
    <div className="option">
        <p>{props.count}. {props.option}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.option);
            }}
        >remove
        </button>
    </div>
)
