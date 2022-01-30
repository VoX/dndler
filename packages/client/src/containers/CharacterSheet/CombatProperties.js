import React from 'react';

class CombatProperties extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <React.Fragment>
                <section className="characterCombatProps">
                    <h2 className="characterCombat characterHP">HP: {this.props.hp} </h2>
                    <h2 className="characterCombat characterHD">HitDice: </h2>
                    <h2 className="characterCombat characterAC">AC: {this.props.ac}</h2>
                    <h2 className="characterCombat characterSpeed">Speed: 30ft</h2>
                </section>
            </React.Fragment>
        );
    }
}

export default CombatProperties;