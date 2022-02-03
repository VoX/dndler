import React from 'react';

const CharacterBackground = ({ props }) =>
{
    const backgroundSubtype = () =>
    {
        for(let feature in props.background)
        {
            if(feature !== "Name" && feature !== "Trait" && feature !== "Ideal"
                && feature !== "Flaw" && feature !== "Gear" && feature !== "Bond")
            {
                return [feature, props.background[feature]];
            }
        }
        return "";
    }

    let subType = backgroundSubtype();
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
            <h3 className="backgroundName"><strong>{props.background.Name}</strong></h3>
            {additional}
            <p className="backgroundTrait leftAlign"><strong>Traits:</strong> "{props.background.Trait}"</p>
            <p className="backgroundIdeal leftAlign"><strong>Ideals:</strong> "{props.background.Ideal}"</p>
            <p className="backgroundBond leftAlign"><strong>Bonds:</strong> "{props.background.Bond}"</p>
            <p className="backgroundFlaw leftAlign"><strong>Flaws:</strong> "{props.background.Flaw}"</p>
        </section>
    )
}

export default CharacterBackground;
