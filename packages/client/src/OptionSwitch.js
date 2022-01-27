export default function OptionSwitch({ value, isOn, handleToggle }) {
    return (
        <div className="optionSwitch-container">
            <input
                checked={isOn}
                onChange={handleToggle}
                id={value}
                type="checkbox"
                className="optionChoice hidden">
            </input>
            <label htmlFor={value} className="optionChoice-label">
                <span className="optionChoice-span">{value}</span>
            </label>
        </div>
    );
}