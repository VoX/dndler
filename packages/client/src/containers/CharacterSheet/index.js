import React from "react";
import Attributes from "./Attributes"
import Proficiencies from "./OtherProficiencies"
import Background from "./Background"
import Skills from "./SkillProficiencies"
import CombatProperties from "./CombatProperties"
import Equipment from "./Equipment"
import SavingThrows from "./SavingThrows"
import Navigation from "../Navigation"
import Features from "./Features"

class CharacterSheet extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            character: {}
        };
        this.fetchCharacter = this.fetchCharacter.bind(this);
    }

    componentDidMount()
    {
        this.fetchCharacter();
    }

    componentWillUnmount()
    {

    }

    fetchCharacter()
    {
        fetch(`http://${window.location.hostname}:8000/custom`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then((json) => {
            this.setState({
                ...this.state,
                character: json
            })
        })
        .catch((error) => {
            console.log(`Sorry, it borked cuz ${error}`);
        });
    }

    render()
    {
        if(this.state.character.name)
        {
            console.log(this.state.character);
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
                                "text": "GIMME ANUDDER MIN!",
                                "callBack": this.fetchCharacter,
                                "id": "character"
                            },
                            {
                                "text": "I wanna see da options",
                                "callBack": this.props.goCustom,
                                "id": "custom"
                            }
                        ]}
                    />
                    <section className="characterContainer">
                        <h1 className="characterName">{this.state.character.name}</h1>
                        <h2 className="characterDescriptor">Level&nbsp;
                            {this.state.character.level}&nbsp;
                            {this.state.character.race}&nbsp;
                            {this.state.character.class}
                        </h2>
                        <section className="threeColumn">
                            <div className="characterColumn">
                                <Attributes
                                    attributes={this.state.character.stats}
                                />
                                <hr/>
                                <Proficiencies
                                    proficiencies={this.state.character.proficiency["Other"]}
                                />
                            </div>
                            <div className="characterColumn">
                                <CombatProperties
                                    hp={this.state.character.hitpoints}
                                    ac={this.state.character.armorclass}
                                    hd={this.state.character.hitdice}
                                />
                                <hr/>
                                <SavingThrows
                                    prof={this.state.character.proficiency["Proficient Throws"]}
                                    saves={this.state.character.proficiency["Saving Throws"]}
                                />
                                <hr/>
                                <Skills
                                    skills={this.state.character.proficiency}
                                />
                                <hr/>
                                <Equipment
                                    equipment={this.state.character.equipment}
                                />
                            </div>
                            <div className="characterColumn">
                                <Background
                                    background={this.state.character.background}
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
                <React.Fragment>
                    <h2>Loading character...</h2>
                </React.Fragment>
            )
        }
    }
}

export default CharacterSheet;