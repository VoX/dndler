import React, { useState, useEffect } from 'react';
import OptionSwitch from '../EventCallers/OptionSwitch';
import Navigation from '../Navigation'

const CustomOptionsPage = ({ props }) =>
{
    /*constructor(props)
    {
        super(props);
        this.state = {
            sources: [],
            activeSources: [],
            classes: [],
            races: []
        };
    }*/

    const makeTable = (availableOptionsList) =>
    {
        console.log(availableOptionsList);
        let keyIndex = 0;
        let tableValues = [];
        for(let availableOption in availableOptionsList)
        {
            tableValues.push(<OptionSwitch
                className={"optionSwitch"}
                key={keyIndex}
                value={availableOptionsList[availableOption]['Name'] ?
                    availableOptionsList[availableOption]['Name'] :
                    availableOptionsList[availableOption]}
                />);
            ++keyIndex;
        }
        return tableValues;
    }

    const subList = (sub) =>
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

    /*componentDidMount()
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
    }*/

    return (
        <React.Fragment>
            <Navigation
                destinations={[
                    {
                        "text": "HOME",
                        "callBack": this.props.goHome,
                        "id": "home"
                    },
                    {
                        "text": "GIMME A RANDO MIN!",
                        "callBack": this.props.goCharacter,
                        "id": "character"
                    }
                ]}
            />
            <h2>SOURCE MATERIALS</h2>
            <div className="optionsTable sourcesTable">
                {makeTable(this.state.sources)}
            </div>
            <hr/>
            <h2>CLASSES</h2>
            <div className="optionsTable classesTable">
                {makeTable(subList('Classes'))}
            </div>
            <hr/>
            <h2>RACES</h2>
            <div className="optionsTable racesTable">
                {makeTable(subList('Races'))}
            </div>
        </React.Fragment>
    )
}

export default CustomOptionsPage;