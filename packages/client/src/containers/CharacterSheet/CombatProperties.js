import React from 'react';

const CombatProperties = (props) =>
{
    return (
        <React.Fragment>
            <section className="characterCombatProps">
                <h2 className="characterCombat characterHP">HP: {props.hp} </h2>
                <h2 className="characterCombat characterHD">HitDice: {props.hd}</h2>
                <h2 className="characterCombat characterAC">AC: {props.ac}</h2>
                <h2 className="characterCombat characterSpeed">Speed: 30ft</h2>
            </section>
        </React.Fragment>
    );
}

export default CombatProperties;