import React from "react";
import OptionSwitch from "./OptionSwitch";

let options = [];

class OptionsTable extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let rows = [];
        for(let i = 0; i < 3; ++i)
        {
            rows.push(<OptionSwitch
                isOn={isOn}
                handleToggle={handleToggle}
                options={options}
            />);
        }
        return ( <div className="optionsTable">{rows}</div>);
    }
}

export default OptionsTable;