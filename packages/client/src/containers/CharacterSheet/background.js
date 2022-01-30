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
            let thisEquipment;
            if(Array.isArray(gear))
            {
                thisEquipment = this.props.background.Gear[gear][Math.floor(Math.random() * gear.length)];
            }
            else thisEquipment = this.props.background.Gear[gear];
            rows.push(<li className="gearItem leftAlign" key={gear}>
                    {this.props.background.Gear[gear]}
            </li>);
        }
        return rows;
    }

    render()
    {
        return(
            <section className="characterBackground">
                <h2 className="backgroundHeader">BACKGROUND</h2>
                <p className="backgroundName leftAlign"><strong>{this.props.background.Name}</strong></p>
                <p className="backgroundTrait leftAlign"><strong>Traits:</strong> "{this.props.background.Trait}"</p>
                <p className="backgroundIdeal leftAlign"><strong>Ideals:</strong> "{this.props.background.Ideal}"</p>
                <p className="backgroundBond leftAlign"><strong>Bonds:</strong> "{this.props.background.Bond}"</p>
                <p className="backgroundFlaw leftAlign"><strong>Flaws:</strong> "{this.props.background.Flaw}"</p>
                <p className="backgroundAdditional leftAlign"></p>
                <p className="backgroundGear leftAlign"><strong>Gear:</strong></p>
                <ul className="gearList">
                    {this.gearList()}
                </ul>
            </section>
        )
    }
}

export default CharacterBackground;