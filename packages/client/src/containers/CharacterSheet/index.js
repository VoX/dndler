import React, { useState, useEffect } from "react";
import Attributes from "./Attributes"
import Proficiencies from "./OtherProficiencies"
import Background from "./Background"
import Skills from "./SkillProficiencies"
import CombatProperties from "./CombatProperties"
import Equipment from "./Equipment"
import SavingThrows from "./SavingThrows"
import Navigation from "../Navigation"
import Features from "./CharacterFeatures"
import OptionButton from "../EventCallers/OptionButton";

const CharacterSheet = (props) =>
{
    const [character, changeCharacter] = useState(null);

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
            changeCharacter(json);
        })
        .catch((error) => {
            console.log(`Sorry, it borked cuz ${error}`);
        });
    }

    useEffect(() => {
        fetchCharacter();
    }, []);

    if(character)
    {
        console.log(character);
        return (
            <React.Fragment>
                <OptionButton
                    label={"GIMME ANUDDER MIN!"}
                    onClick={fetchCharacter}
                    value={""}
                    id={"reroll"}
                    className={"reroll"}
                />
                <section className="characterContainer">
                    <h1 className="characterName">{character.name}</h1>
                    <h2 className="characterDescriptor">Level&nbsp;
                        {character.level}&nbsp;
                        {character.race}&nbsp;
                        {character.class}
                    </h2>
                    <section className="threeColumn">
                        <div className="characterColumn">
                            <Attributes
                                attributes={character.stats}
                            />
                            <hr/>
                            <Proficiencies
                                proficiencies={character.proficiency["Other"]}
                            />
                        </div>
                        <div className="characterColumn">
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
                        <div className="characterColumn">
                            <Background
                                background={character.background}
                            />
                            <hr/>
                            <Features
                                features=""
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