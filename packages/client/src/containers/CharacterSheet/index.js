import React, { useState, useEffect } from "react";
import AJV from 'ajv';
import Attributes from "./Attributes"
import Proficiencies from "./OtherProficiencies"
import Background from "./Background"
import Skills from "./SkillProficiencies"
import CombatProperties from "./CombatProperties"
import Equipment from "./Equipment"
import SavingThrows from "./SavingThrows"
import Features from "./CharacterFeatures"
import OptionButton from "../EventCallers/OptionButton";
import UploadButton from "../EventCallers/UploadButton";
import SaveIcon from "../../img/save.png"
import LoadIcon from "../../img/load.png"

const characterSchema =
{
    '$schema': 'http://json-schema.org/draft-07/schema#',
    '$id': 'character',
    'title': 'Character',
    'description': 'Represents a single character.',
    'type': 'object',
    'properties':
    {
        'armorclass': {type: 'number'},
        'background': {type: 'object'},
        'class': {type: 'string'},
        'equipment': {type: 'array'},
        'features': {type: 'object'},
        'hitdice': {type: 'string'},
        'hitpoints': {type: 'number'},
        'level': {type: 'number'},
        'name': {type: 'string'},
        'proficiency': {type: 'object'},
        'race': {type: 'string'},
        'sources': {type: 'object'},
        'spells': {type: 'object'},
        'stats': {type: 'object'},
        'weapons': {type: 'object'}
    },
    'required': ['armorclass', 'background', 'class', 'equipment', 'features', 'hitdice',
    'hitpoints', 'level', 'name', 'proficiency', 'race', 'sources', 'spells', 'stats', 'weapons'],
    'additionalProperties': false
}

const CharacterSheet = () =>
{
    const [history, setHistory] = useState([]);
    const [characterIndex, setCharacterIndex] = useState(0);

    const fetchCharacter = () =>
    {
        fetch(`http://${window.location.hostname}:8000/custom`, {
            method: 'POST',
            body: props.charOptions ? JSON.stringify(props.charOptions) : null,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            setHistory([...history, json]);
            setCharacterIndex(history.length);
        })
        .catch((error) => {
            console.log(`Sorry, it borked cuz ${error}`);
        });

    }

    const customOptionsNotice = () =>
    {
        if(props.charOptions)
        {
            return(
                <>
                    <h5 className="optionsNotice">(Your custom options remain in effect)</h5>
                    <OptionButton
                        label={"clear custom options"}
                        onClick={props.clearOptions}
                        id={"clearOptions"}
                        className={"clearOptions"}
                        containerName={"clearButton"}
                    />
                </>
            );
        }
        else
        {
            return null;
        }
    }

    useEffect(() => {
        fetchCharacter();
    }, []);

    const goBackChar = () =>
    {
      if(characterIndex > 0)
        {
            setCharacterIndex(characterIndex - 1);
        }
    }

    const goForwardChar = () =>
    {
        if(characterIndex < history.length - 1)
        {
            setCharacterIndex(characterIndex + 1);
        }
    }

    const determineBackButton = () =>
    {
        if(characterIndex > 0 && history.length > 1)
        {
            return (
                <OptionButton
                    label="<<"
                    onClick={goBackChar}
                    value={""}
                    id={"charBack"}
                    containerName={"inline-block"}
                    className={"charBack"}
                />
            );
        }
        else
        {
            return <div></div>;
        }
    }

    const determineForwardButton = () =>
    {
        if(characterIndex + 1 < history.length && history.length > 1)
        {
            return (
                <OptionButton
                    label=">>"
                    onClick={goForwardChar}
                    value={""}
                    id={"charFrwd"}
                    containerName={"inline-block"}
                    className={"charFrwd"}
                />
                <hr/>
            );
        }
        else
        {
            return <div></div>;
        }
    }

    const saveCharacter = () =>
    {
        const str = JSON.stringify(history[characterIndex]);
        const blob = new Blob([str], {
            type: 'application/octet-stream'
        });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${history[characterIndex].name}.json`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const validateCharacterUpload = (character) =>
    {
        const ajv = new AJV();
        const valid = ajv.validate(characterSchema, character);
        if(valid)
            return true;
        else
        {
            alert(ajv.errors);
            return false;
        }
    }

    const checkDuplicateCharacter = (character) =>
    {
        let returnObj =
        {
            index: 0,
            duplicate: false
        };
        for(returnObj.index; returnObj.index < history.length; ++returnObj.index)
        {
            if(JSON.stringify(history[returnObj.index]) === JSON.stringify(character))
            {
                returnObj.duplicate = true;
                break;
            }
        }
        return returnObj;
    }

    const loadCharacter = (file) =>
    {
        file.text().then((text) =>
        {
            const parsed_json = JSON.parse(text);
            if(validateCharacterUpload(parsed_json))
            {
                let dupeEval = checkDuplicateCharacter(parsed_json);
                if(!dupeEval.duplicate)
                {
                    setHistory([...history, parsed_json]);
                    setCharacterIndex(history.length);
                }
                else
                {
                    alert("This character already exists!");
                    setCharacterIndex(dupeEval.index);
                }
            }
        })
    }

    if(history[characterIndex])
    {
        return (
            <React.Fragment>
                {customOptionsNotice()}
                <section className="characterButtonSection">
                    {determineBackButton()}
                    <OptionButton
                        label={"GIMME ANUDDER MIN!"}
                        onClick={fetchCharacter}
                        value={""}
                        id={"reroll"}
                        containerName={"inline-block grid-center"}
                        className={"reroll"}
                    />
                    {determineForwardButton()}
                </section>
                <h5 className="characterCount">{characterIndex+1}/{history.length}</h5>
                <section className="fileButtonSection">
                    <OptionButton
                        onClick={saveCharacter}
                        id={"saveButton"}
                        containerName={"inline-block"}
                        className={"saveButton"}
                        img={SaveIcon}
                        imgName={"fileButtons"}
                    />
                    <UploadButton
                        onChange={loadCharacter}
                        id={"loadButton"}
                        containerName={"inline-block"}
                        className={"loadButton"}
                        img={LoadIcon}
                        imgName={"fileButtons"}
                    />
                </section>
                <section className="characterContainer">
                    <h1 className="characterName">{history[characterIndex].name}</h1>
                    <h2 className="characterDescriptor">Level&nbsp;
                        {history[characterIndex].level}&nbsp;
                        {history[characterIndex].race}&nbsp;
                        {history[characterIndex].class}
                    </h2>
                    <section className="threeColumn">
                        <div className="thirdColumn">
                            <Attributes
                                attributes={history[characterIndex].stats}
                            />
                            <hr/>
                            <Proficiencies
                                proficiencies={history[characterIndex].proficiency["Other"]}
                            />
                        </div>
                        <div className="thirdColumn">
                            <CombatProperties
                                hp={history[characterIndex].hitpoints}
                                ac={history[characterIndex].armorclass}
                                hd={history[characterIndex].hitdice}
                            />
                            <hr/>
                            <SavingThrows
                                prof={history[characterIndex].proficiency["Proficient Throws"]}
                                saves={history[characterIndex].proficiency["Saving Throws"]}
                            />
                            <hr/>
                            <Skills
                                skills={history[characterIndex].proficiency}
                            />
                            <hr/>
                            <Equipment
                                equipment={history[characterIndex].equipment}
                            />
                        </div>
                        <div className="thirdColumn">
                            <Background
                                background={history[characterIndex].background}
                            />
                            <hr/>
                            <Features
                                features={history[characterIndex].features}
                            />
                        </div>
                    </section>

                </section>
            </React.Fragment>
        )
    }
    else
    {
        return (
            <h2>Loading character...</h2>
        )
    }
}

export default CharacterSheet;