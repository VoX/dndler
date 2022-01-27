import OptionSwitch from "./OptionSwitch";

let options = [];

const OptionsTable = ({isOn, handleToggle, listing}) => {
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