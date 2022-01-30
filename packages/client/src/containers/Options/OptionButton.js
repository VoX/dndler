import React from "react";

class OptionButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    render()
    {
        return (
            <div className="optionButton-container">
                <button
                    onClick={this.props.onClick}
                    id={this.props.id}
                    className="optionButton hidden">
                </button>
                <label htmlFor={this.props.id} className="optionButton-label">
                    <span className="optionButton-span">{this.props.value}</span>
                </label>
            </div>
        );
    }
}

export default OptionButton;