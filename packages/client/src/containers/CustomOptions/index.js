import React, { useState, useEffect } from 'react';
import OptionSwitch from '../Options/OptionSwitch';

class CustomOptionsPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            sources: [],
            activeSources: [],
            classes: [],
            races: []
        };
    }  
    
    makeTable(availableOptionsList)
    {
        console.log(availableOptionsList);
        let keyIndex = 0;
        let tableValues = [];
        for(let availableOption in availableOptionsList)
        {
            tableValues.push(<OptionSwitch
                key={keyIndex}
                value={availableOptionsList[availableOption]['Name'] ? 
                    availableOptionsList[availableOption]['Name'] :
                    availableOptionsList[availableOption]}
                />);
            ++keyIndex;
        }
        return tableValues;
    }

    subList(sub)
    {
        let dummy = [];
        for(let source in this.state.sources)
        {
            if(this.state.sources[source][sub])
            {
                for(let cla in this.state.sources[source][sub])
                {
                    dummy.push(this.state.sources[source][sub][cla]);
                }
            }
        }
        return dummy;
    }

    componentDidMount()
    {
        fetch(`http://${window.location.hostname}:8000/sources`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then((json) => {
            this.setState({
                ...this.state,
                sources: json
            })
        })
        .catch(() => {
            console.log("Sorry, it borked");
        });
    }

    render()
    {
        return (
            <React.Fragment>
                <h2>SOURCE MATERIALS</h2>
                <div className="optionsTable sourcesTable">
                    {this.makeTable(this.state.sources)}
                </div>
                <hr/>
                <h2>CLASSES</h2>
                <div className="optionsTable classesTable">
                    {this.makeTable(this.subList('Classes'))}
                </div>
                <hr/>
                <h2>RACES</h2>
                <div className="optionsTable racesTable">
                    {this.makeTable(this.subList('Races'))}
                </div>
            </React.Fragment>
        )
    }
}

export default CustomOptionsPage;