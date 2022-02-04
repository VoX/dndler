import React from 'react';

const CharacterAttributes = (props) =>
{
    return (
        <section className="characterStatSection">
            <div className="STR attributeEntry">
                <h4 className="attributeTitle">STRENGTH</h4>
                <p className="attributeValue">{props.attributes["Total Stats"].STR}</p>
                <p className="attributeMod">{props.attributes["Total Modifiers"].STR > 0 ? "+" : ""}{props.attributes["Total Modifiers"].STR}</p>
            </div>
            <div className="DEX attributeEntry">
                <h4 className="attributeTitle">DEXTERITY</h4>
                <p className="attributeValue">{props.attributes["Total Stats"].DEX}</p>
                <p className="attributeMod">{props.attributes["Total Modifiers"].DEX > 0 ? "+" : ""}{props.attributes["Total Modifiers"].DEX}</p>
            </div>
            <div className="CON attributeEntry">
                <h4 className="attributeTitle">CONSTITUTION</h4>
                <p className="attributeValue">{props.attributes["Total Stats"].CON}</p>
                <p className="attributeMod">{props.attributes["Total Modifiers"].CON > 0 ? "+" : ""}{props.attributes["Total Modifiers"].CON}</p>
            </div>
            <div className="INT attributeEntry">
                <h4 className="attributeTitle">INTELLIGENCE</h4>
                <p className="attributeValue">{props.attributes["Total Stats"].INT}</p>
                <p className="attributeMod">{props.attributes["Total Modifiers"].INT > 0 ? "+" : ""}{props.attributes["Total Modifiers"].INT}</p>
            </div>
            <div className="WIS attributeEntry">
                <h4 className="attributeTitle">WISDOM</h4>
                <p className="attributeValue">{props.attributes["Total Stats"].WIS}</p>
                <p className="attributeMod">{props.attributes["Total Modifiers"].WIS > 0 ? "+" : ""}{props.attributes["Total Modifiers"].WIS}</p>
            </div>
            <div className="CHA attributeEntry">
                <h4 className="attributeTitle">CHARISMA</h4>
                <p className="attributeValue">{props.attributes["Total Stats"].CHA}</p>
                <p className="attributeMod">{props.attributes["Total Modifiers"].CHA > 0 ? "+" : ""}{props.attributes["Total Modifiers"].CHA}</p>
            </div>
        </section>
    );
}

export default CharacterAttributes;
