import React from 'react';

const CharacterAttributes = () =>
{
    return (
        <section className="characterStats">
            <div className="STR attributeEntry">
                <p className="attributeTitle">STRENGTH</p>
                <p className="attributeValue">{this.props.attributes["Total Stats"].STR}</p>
                <p className="attributeMod">{this.props.attributes["Total Modifiers"].STR > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].STR}</p>
            </div>
            <div className="DEX attributeEntry">
                <p className="attributeTitle">DEXTERITY</p>
                <p className="attributeValue">{this.props.attributes["Total Stats"].DEX}</p>
                <p className="attributeMod">{this.props.attributes["Total Modifiers"].DEX > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].DEX}</p>
            </div>
            <div className="CON attributeEntry">
                <p className="attributeTitle">CONSTITUTION</p>
                <p className="attributeValue">{this.props.attributes["Total Stats"].CON}</p>
                <p className="attributeMod">{this.props.attributes["Total Modifiers"].CON > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].CON}</p>
            </div>
            <div className="INT attributeEntry">
                <p className="attributeTitle">INTELLIGENCE</p>
                <p className="attributeValue">{this.props.attributes["Total Stats"].INT}</p>
                <p className="attributeMod">{this.props.attributes["Total Modifiers"].INT > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].INT}</p>
            </div>
            <div className="WIS attributeEntry">
                <p className="attributeTitle">WISDOM</p>
                <p className="attributeValue">{this.props.attributes["Total Stats"].WIS}</p>
                <p className="attributeMod">{this.props.attributes["Total Modifiers"].WIS > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].WIS}</p>
            </div>
            <div className="CHA attributeEntry">
                <p className="attributeTitle">CHARISMA</p>
                <p className="attributeValue">{this.props.attributes["Total Stats"].CHA}</p>
                <p className="attributeMod">{this.props.attributes["Total Modifiers"].CHA > 0 ? "+" : ""}{this.props.attributes["Total Modifiers"].CHA}</p>
            </div>
        </section>
    );
}

export default CharacterAttributes;
