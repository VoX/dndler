import React from 'react';

class CharacterEquipment extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    equipmentList()
    {
        let rows = [];
        for(let equipEntry in this.props.equipment)
        {
            rows.push(<li className="characterEquipEntry leftAlign" key={equipEntry}><p>{this.props.equipment[equipEntry]}</p></li>)
        }
        return rows;
    }

    render()
    {
        return(
            <React.Fragment>
                <h2 className="equipHeader">EQUIPMENT</h2>
                <ul className="characterEquipment">
                    { this.equipmentList() }
                </ul>
            </React.Fragment>
        )
    }
}

export default CharacterEquipment;