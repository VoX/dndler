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

const CharacterSheet = (props) =>
{
    const [character, changeCharacter] = useState(null);

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
            changeCharacter(json);
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

    if(character)
    {
        console.log(character);
        return (
            <React.Fragment>
                {customOptionsNotice()}
                <OptionButton
                    label={"GIMME ANUDDER MIN!"}
                    onClick={fetchCharacter}
                    value={""}
                    id={"reroll"}
                    className={"reroll"}
                />
                <hr/>
                <section className="characterContainer">
                    <h1 className="characterName">{character.name}</h1>
                    <h2 className="characterDescriptor">Level&nbsp;
                        {character.level}&nbsp;
                        {character.race}&nbsp;
                        {character.class}
                    </h2>
                    <section className="threeColumn">
                        <div className="thirdColumn">
                            <Attributes
                                attributes={character.stats}
                            />
                            <hr/>
                            <Proficiencies
                                proficiencies={character.proficiency["Other"]}
                            />
                        </div>
                        <div className="thirdColumn">
                            <CombatProperties
                                hp={character.hitpoints}
                                ac={character.armorclass}
                                hd={character.hitdice}
                            />
                            <hr/>
                            <SavingThrows
                                prof={character.proficiency["Proficient Throws"]}
                                saves={character.proficiency["Saving Throws"]}
                            />
                            <hr/>
                            <Skills
                                skills={character.proficiency}
                            />
                            <hr/>
                            <Equipment
                                equipment={character.equipment}
                            />
                        </div>
                        <div className="thirdColumn">
                            <Background
                                background={character.background}
                            />
                            <hr/>
                            <Features
                                features={character.features}
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