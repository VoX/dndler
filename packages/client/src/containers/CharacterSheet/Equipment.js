import React from 'react';

const CharacterEquipment = ( props ) =>
{
    const equipmentList = () =>
    {
        let rows = [];
        for(let equipEntry in props.equipment)
        {
            rows.push(<li className="characterEquipEntry leftAlign" key={equipEntry}><p>{props.equipment[equipEntry]}</p></li>)
        }
        return rows;
    }

    return(
        <React.Fragment>
            <h2 className="equipHeader">EQUIPMENT</h2>
            <ul className="characterEquipment">
                { equipmentList() }
            </ul>
        </React.Fragment>
    )
}

export default CharacterEquipment;