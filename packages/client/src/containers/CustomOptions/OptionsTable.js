import React from "react";
import OptionSwitch from "../EventCallers/OptionSwitch";

let options = [];

const OptionsTable = (props) =>
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

export default OptionsTable;