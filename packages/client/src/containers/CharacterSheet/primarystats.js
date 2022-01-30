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
                <h2 className="characterPrimary">HP: {this.props.hp} </h2>
                <h2 className="characterPrimary">HitDice: </h2>
                <h2 className="characterPrimary">ArmorClass: {this.props.ac}</h2>
            </React.Fragment>
        );
    }
}

export default PrimaryStats;