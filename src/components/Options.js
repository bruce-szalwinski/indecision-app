import React from 'react';
import { Option } from './Option';
export const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length == 0 && <p>Please add an option to get started</p>}
            <ol>
                {props.options.map((o) => {
                    return (
                        <Option
                            key={o}
                            option={o}
                            handleDeleteOption={props.handleDeleteOption} />
                    );
                })}
            </ol>

        </div>
    );
};