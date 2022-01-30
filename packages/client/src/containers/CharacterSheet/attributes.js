import React from 'react';

class CharacterAttributes extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <section className="characterStats">
                <h2 className="statsHeader">STATS</h2>
                <div className="STR">
                    <p className="attributeTitle">STRENGTH</p>
                    <p className="attributeValue">{this.props.attributes["Total Stats"].STR}</p>
                    <p>{this.props.attributes["Total Modifiers"].STR > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].STR}</p>
                </div>
                <div className="DEX">
                    <p className="attributeTitle">DEXTERITY</p>
                    <p className="attributeValue">{this.props.attributes["Total Stats"].DEX}</p>
                    <p>{this.props.attributes["Total Modifiers"].DEX > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].DEX}</p>
                </div>
                <div className="CON">
                    <p className="attributeTitle">CONSTITUTION</p>
                    <p className="attributeValue">{this.props.attributes["Total Stats"].CON}</p>
                    <p>{this.props.attributes["Total Modifiers"].CON > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].CON}</p>
                </div>
                <div className="INT">
                    <p className="attributeTitle">INTELLIGENCE</p>
                    <p className="attributeValue">{this.props.attributes["Total Stats"].INT}</p>
                    <p>{this.props.attributes["Total Modifiers"].INT > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].INT}</p>
                </div>
                <div className="WIS">
                    <p className="attributeTitle">WISDOM</p>
                    <p className="attributeValue">{this.props.attributes["Total Stats"].WIS}</p>
                    <p>{this.props.attributes["Total Modifiers"].WIS > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].WIS}</p>
                </div>
                <div className="CHA">
                    <p className="attributeTitle">CHARISMA</p>
                    <p className="attributeValue">{this.props.attributes["Total Stats"].CHA}</p>
                    <p>{this.props.attributes["Total Modifiers"].CHA > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].CHA}</p>
                </div>
            </section>
        );
    }
}

export default CharacterAttributes;