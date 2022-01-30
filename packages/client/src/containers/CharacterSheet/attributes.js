import React from 'react';

class CharacterAttributes extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        console.log(this.props.attributes);
        return (
            <section className="characterStats">
                <h2 className="statsHeader">STATS</h2>
                <div className="STR">
                    <p className="attributeTitle">STRENGTH</p>
                    <p className="attributeValue">{this.props.attributes.totalStats.STR}</p>
                    <p>{this.props.attributes.totalModifiers.STR > 0 ? "+" : ""}{this.props.attributes.totalModifiers.STR}</p>
                </div>
                <div className="DEX">
                    <p className="attributeTitle">DEXTERITY</p>
                    <p className="attributeValue">{this.props.attributes.totalStats.DEX}</p>
                    <p>{this.props.attributes.totalModifiers.DEX > 0 ? "+" : ""}{this.props.attributes.totalModifiers.DEX}</p>
                </div>
                <div className="CON">
                    <p className="attributeTitle">CONSTITUTION</p>
                    <p className="attributeValue">{this.props.attributes.totalStats.CON}</p>
                    <p>{this.props.attributes.totalModifiers.CON > 0 ? "+" : ""}{this.props.attributes.totalModifiers.CON}</p>
                </div>
                <div className="INT">
                    <p className="attributeTitle">INTELLIGENCE</p>
                    <p className="attributeValue">{this.props.attributes.totalStats.INT}</p>
                    <p>{this.props.attributes.totalModifiers.INT > 0 ? "+" : ""}{this.props.attributes.totalModifiers.INT}</p>
                </div>
                <div className="WIS">
                    <p className="attributeTitle">WISDOM</p>
                    <p className="attributeValue">{this.props.attributes.totalStats.WIS}</p>
                    <p>{this.props.attributes.totalModifiers.WIS > 0 ? "+" : ""}{this.props.attributes.totalModifiers.WIS}</p>
                </div>
                <div className="CHA">
                    <p className="attributeTitle">CHARISMA</p>
                    <p className="attributeValue">{this.props.attributes.totalStats.CHA}</p>
                    <p>{this.props.attributes.totalModifiers.CHA > 0 ? "+" : ""}{this.props.attributes.totalModifiers.CHA}</p>
                </div>
            </section>
        );
    }
}

export default CharacterAttributes;