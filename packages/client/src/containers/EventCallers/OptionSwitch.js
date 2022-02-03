import React from "react";

const OptionSwitch = () =>
{
    return (
        <div className="optionSwitch-container">
            <input
                checked={this.props.isOn}
                onChange={this.props.handleToggle}
                id={this.props.value}
                type="checkbox"
                className={this.props.className +" hidden"}>
            </input>
            <label htmlFor={this.props.value} className={this.props.className+"-label"}>
                <span className="optionChoice-span">{this.props.value}</span>
            </label>
        </div>
    );
}

export default OptionSwitch;