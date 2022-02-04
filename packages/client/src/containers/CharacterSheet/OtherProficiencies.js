import React from 'react'

const OtherProficiencies = ( props ) =>
{
    const proficiencyList = () =>
    {
        let rows = [];
        for(let prof in props.proficiencies)
        {
            rows.push(<ProficiencyEntry
                key={prof}
                category={prof}
                entries={props.proficiencies[prof]}
            />);
        }
        return rows;
    }

    return(
        <section className="characterProficiencieSection">
            <h2 className="proficiencyHeader">PROFICIENCIES</h2>
            <ul className="characterProficiencies">
                {proficiencyList()}
            </ul>
        </section>
    );
}

const ProficiencyEntry = ( props ) =>
{
    const proficiencyValues = () =>
    {
        let rows = [];
        for(let entry in props.entries)
        {
            rows.push(<li className="innerProfEntry leftAlign" key={entry}>{props.entries[entry]}</li>);
        }
        return rows;
    }

    return(
        <li className="proficiencyEntry">
            <h4 className="proficiencyEntryHeader leftAlign">{props.category}</h4>
            <ul className="proficiencyEntries">
                {proficiencyValues()}
            </ul>
        </li>
    );
}

export default OtherProficiencies;