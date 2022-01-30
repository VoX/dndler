import React from 'react'

class OtherProficiencies extends React.Component
{
    proficiencyList()
    {
        console.log(this.props.proficiencies);
        let rows = [];
        for(let prof in this.props.proficiencies)
        {
            rows.push(<ProficiencyEntry
                key={prof}
                category={prof}
                entries={this.props.proficiencies[prof][0]}
            />);
        }
        return rows;
    }

    render()
    {
        return(
            <section className="characterProficiencies">
                <h2 className="proficiencyHeader">PROFICIENCIES</h2>
                <ul className="proficiencyList">
                    {this.proficiencyList()}
                </ul>
            </section>
        );
    }
}

class ProficiencyEntry extends React.Component
{
    proficiencyValues()
    {
        console.log(this.props.entries);
        let rows = [];
        for(let entry in this.props.entries)
        {
            rows.push(<li className="innerProfEntry leftAlign" key={entry}>{this.props.entries[entry]}</li>);
        }
        return rows;
    }

    render()
    {
        return(
            <li className="proficiencyEntry">
                <h4 className="proficiencyEntryHeader leftAlign">{this.props.category}</h4>
                <ul className="proficiencies">
                    {this.proficiencyValues()}
                </ul>
            </li>
        );
    }
}

export default OtherProficiencies;