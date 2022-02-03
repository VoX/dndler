import React from "react";

const OptionSwitch = (props) =>
{
    return (
        <div className="optionSwitch-container">
            <input
                checked={props.isOn}
                onChange={props.handleToggle}
                id={props.value}
                type="checkbox"
                className={props.className +" hidden"}>
            </input>
            <label htmlFor={props.value} className={props.className+"-label"}>
                <span className="optionChoice-span">{props.value}</span>
            </label>
        </div>
    );
}

export default OptionSwitch;