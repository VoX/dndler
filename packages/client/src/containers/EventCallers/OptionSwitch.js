import React from "react";

const OptionSwitch = (props) =>
{
    const lockedOrNot = () =>
    {
        if(props.readOnly)
        {
            return(
                <input
                    onChange={null}
                    id={props.id}
                    value={props.value}
                    type="checkbox"
                    className={props.className +" hidden"}
                    readOnly={props.readOnly}
                    checked={props.readOnly ? true : null}
                />
            );
        }
        else
        {
            return(
                <input
                    onChange={props.handleToggle}
                    id={props.id}
                    value={props.value}
                    type="checkbox"
                    className={props.className +" hidden"}
                    defaultChecked={props.isOn}
                />
            );
        }
    }
    return (
        <div className="optionSwitch-container">
            {lockedOrNot()}
            <label htmlFor={props.id} className={props.className+"-label"}>
                <span className="optionChoice-span">{props.value}</span>
            </label>
        </div>
    );
}

export default OptionSwitch;