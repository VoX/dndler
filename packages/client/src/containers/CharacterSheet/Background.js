import React from 'react';

class CharacterBackground extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    backgroundSubtype()
    {
        for(let feature in this.props.background)
        {
            if(feature !== "Name" && feature !== "Trait" && feature !== "Ideal"
                && feature !== "Flaw" && feature !== "Gear" && feature !== "Bond")
            {
                return [feature, this.props.background[feature]];
            }
        }
        return "";
    }

    render()
    {
        let subType = this.backgroundSubtype();
        let additional;
        if(subType)
        {
            additional =
            <p className="backgroundAdditional"><strong>{subType[0]}:</strong> {subType[1]}</p>
        }
        else
        {
            additional = "";
        }
        return(
            <section className="characterBackground">
                <h2 className="backgroundHeader">BACKGROUND</h2>
                <h3 className="backgroundName"><strong>{this.props.background.Name}</strong></h3>
                {additional}
                <p className="backgroundTrait leftAlign"><strong>Traits:</strong> "{this.props.background.Trait}"</p>
                <p className="backgroundIdeal leftAlign"><strong>Ideals:</strong> "{this.props.background.Ideal}"</p>
                <p className="backgroundBond leftAlign"><strong>Bonds:</strong> "{this.props.background.Bond}"</p>
                <p className="backgroundFlaw leftAlign"><strong>Flaws:</strong> "{this.props.background.Flaw}"</p>
            </section>
        )
    }
}

export default CharacterBackground;
