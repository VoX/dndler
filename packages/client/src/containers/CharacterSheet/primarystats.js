import React from 'react';

class PrimaryStats extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <React.Fragment>
                <section className="characterPrimaries">
                    <h2 className="characterPrimary characterHP">HP: {this.props.hp} </h2>
                    <h2 className="characterPrimary characterHD">HitDice: </h2>
                    <h2 className="characterPrimary characterAC">AC: {this.props.ac}</h2>
                    <h2 className="characterPrimary characterSpeed">Speed: 30ft</h2>
                </section>
            </React.Fragment>
        );
    }
}

export default PrimaryStats;