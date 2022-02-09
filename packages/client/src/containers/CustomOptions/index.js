import React, { useState, useEffect } from 'react';
import OptionButton from '../EventCallers/OptionButton';
import OptionSwitch from '../EventCallers/OptionSwitch';

const CustomOptionsPage = ( props ) =>
{
    const [sources, setSources] = useState({});
    const [activeOptions, setActiveOptions] = useState({'Sources':['PHB'], 'Classes':[], 'Races':[], 'Backgrounds':[]});

    const activeSources = (activeOptionSources) =>
        Object.entries(sources).filter(([key, value]) => activeOptionSources.includes(key)).map(([key, value]) => value);

    const flipSwitch = (event, switchType) =>
    {
        let thisList = [...activeOptions[switchType]];

        if(event.target.checked)
        {
            thisList.push(event.target.id);
        }
        else
        {
            thisList = thisList.filter(source => source !== event.target.id);
        }
        const newObj = {
            'Sources':[...activeOptions.Sources],
            'Classes':[...activeOptions.Classes],
            'Races':[...activeOptions.Races],
            'Backgrounds':[...activeOptions.Backgrounds]
        };

        newObj[switchType] = thisList;

        const newObj2 = {
            'Sources':[...newObj.Sources],
            'Classes':[...newObj.Classes.filter(cla => activeSources(newObj.Sources).some(s => s.Classes.includes(cla)))],
            'Races':[...newObj.Races.filter(race => activeSources(newObj.Sources).some(s => s.Races.includes(race)))],
            'Backgrounds':[...newObj.Backgrounds.filter(background => activeSources(newObj.Sources).some(s => s.Backgrounds.includes(background)))]
        };

        setActiveOptions(newObj2);
    }

    const makeTable = (availableOptionsList, tableName) => {
        return availableOptionsList.map((option, keyIndex) =>
        (
            <OptionSwitch
                className={tableName + " optionSwitch"}
                key={keyIndex + option.Id}
                id={option.Id}
                value={option.Name}
                handleToggle={(e) => flipSwitch(e, tableName)}
                isOn={activeOptions[tableName].includes(option.Id)}
                readOnly={option.Id === 'PHB'}
            />
        ))
    };

    const optionCategory = (categoryName) =>
    {
        let dummy = [];
        for(let source of activeOptions['Sources']) //walk through active sources
        {
            console.log(source);
            if(sources[source])
            {
                for(let subItem in sources[source][categoryName])
                {
                    dummy.push(sources[source][categoryName][subItem]);
                }
            }
        }
        return dummy.sort();
    }

    const sendOptions = () =>
    {
        props.sendOptions(activeOptions);
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
        .catch((error) => {
            console.log(`Sorry, it borked cuz ${error}`);
        });
    }, []);

    return (
        <>
            <h2>SOURCE MATERIALS</h2>
            <div className="optionsTable sourcesTable">
                {makeTable(Object.entries(sources).map(([key,value]) => ({ Id: key, Name: value.Name })), 'Sources')}
            </div>
            <hr/>
            <h2>CLASSES</h2>
            <div className="optionsTable classesTable">
                {makeTable(optionCategory('Classes').map(x => ({ Id: x, Name: x })), 'Classes')}
            </div>
            <hr/>
            <h2>RACES</h2>
            <div className="optionsTable racesTable">
                {makeTable(optionCategory('Races').map(x => ({ Id: x, Name: x })), 'Races')}
            </div>
            <hr/>
            <h2>BACKGROUNDS</h2>
            <div className="optionsTable backgroundsTable">
                {makeTable(optionCategory('Backgrounds').map(x => ({ Id: x, Name: x })), 'Backgrounds')}
            </div>
            <hr/>
            <h2>SPELLS</h2>
            <div className="optionsTable backgroundsTable">
                {makeTable(optionCategory('Spells').map(x => ({ Id: x, Name: x })), 'Spells')}
            </div>
            <hr/>
            <OptionButton
                label={"LET'S SEE DA MIN"}
                onClick={sendOptions}
                value={""}
                id={"customRoll"}
                className={"customRoll"}
            />
        </>
    )
}

export default CustomOptionsPage;