import React, { useState, useEffect } from 'react';
import OptionSwitch from '../EventCallers/OptionSwitch';

const CustomOptionsPage = ( props ) =>
{
    const [sources, setSources] = useState(null);

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
        for(let source in sources)
        {
            if(sources[source][sub])
            {
                for(let cla in sources[source][sub])
                {
                    dummy.push(sources[source][sub][cla]);
                }
            }
        }
        return dummy;
    }

    useEffect(() =>
    {
        fetch(`http://${window.location.hostname}:8000/sources`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then((json) => {
            setSources(json);
        })
        .catch(() => {
            console.log("Sorry, it borked");
        });
    }, []);

    return (
        <>
            <h2>SOURCE MATERIALS</h2>
            <div className="optionsTable sourcesTable">
                {makeTable(sources)}
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
        </>
    )
}

export default CustomOptionsPage;