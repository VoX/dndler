import React from 'react';

class CharacterBackground extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    gearList()
    {
        let rows = [];
        for(let gear in this.props.background.Gear)
        {
            rows.push(<p className="gearItem leftAlign" key={gear}>{this.props.background.Gear[gear]}</p>);
        }
        return rows;
    }

    render()
    {
        console.log(this.props.background);
        return(
            <section className="characterBackground">
                <p className="backgroundName leftAlign">Background: {this.props.background.Name}</p>
                <p className="backgroundTrait leftAlign">Traits: "{this.props.background.Trait}"</p>
                <p className="backgroundIdeal leftAlign">Ideals: "{this.props.background.Ideal}"</p>
                <p className="backgroundBond leftAlign">Bonds: "{this.props.background.Bond}"</p>
                <p className="backgroundFlaw leftAlign">Flaws: "{this.props.background.Flaw}"</p>
                <p className="backgroundAdditional leftAlign"></p>
                <p className="backgroundGear leftAlign">Gear:</p>
                {this.gearList()}
            </section>
        )
    }
}

export default CharacterBackground;