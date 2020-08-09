import React from 'react';
export const Action = (props) => (
    <div>
        <button
            onClick={props.handlePickOption}
            disabled={(!props.hasOptions)}
        >What should i do?
        </button>
    </div>
)
