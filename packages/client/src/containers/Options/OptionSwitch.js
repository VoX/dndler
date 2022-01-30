import React from "react";

class OptionSwitch extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <div className="optionSwitch-container">
                <input
                    checked={this.props.isOn}
                    onChange={this.props.handleToggle}
                    id={this.props.value}
                    type="checkbox"
                    className="optionChoice hidden">
                </input>
                <label htmlFor={this.props.value} className="optionChoice-label">
                    <span className="optionChoice-span">{this.props.value}</span>
                </label>
            </div>
        );
    }
}

export default OptionSwitch;