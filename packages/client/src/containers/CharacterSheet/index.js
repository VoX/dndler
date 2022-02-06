import React, { useState, useEffect } from "react";
import Attributes from "./Attributes"
import Proficiencies from "./OtherProficiencies"
import Background from "./Background"
import Skills from "./SkillProficiencies"
import CombatProperties from "./CombatProperties"
import Equipment from "./Equipment"
import SavingThrows from "./SavingThrows"
import Features from "./CharacterFeatures"
import OptionButton from "../EventCallers/OptionButton";
import SaveIcon from "../../img/save.png"
import LoadIcon from "../../img/load.png"

const CharacterSheet = () =>
{
    const [history, setHistory] = useState([]);
    const [characterIndex, setCharacterIndex] = useState(0);

    const fetchCharacter = () =>
    {
        fetch(`http://${window.location.hostname}:8000/custom`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then((json) => {
            setHistory([...history, json]);
            setCharacterIndex(history.length);
        })
        .catch((error) => {
            console.log(`Sorry, it borked cuz ${error}`);
        });

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
            );
        }
        else
        {
            return <div></div>;
        }
    }

    if(history[characterIndex])
    {
        return (
            <React.Fragment>
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