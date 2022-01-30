import React from "react";
import Attributes from "./Attributes"
import Background from "./Background"
import Skills from "./SkillProficiencies"
import PrimaryStats from "./PrimaryStats"
import Equipment from "./Equipment"
import SavingThrows from "./SavingThrows"
import Navigation from "../Navigation"

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
                            </div>
                            <div className="characterColumn">
                                <PrimaryStats
                                    hp={this.state.character.hitpoints}
                                    ac={this.state.character.armorclass}
                                />
                                <SavingThrows
                                    prof={this.state.character.proficiency["Proficient Throws"]}
                                    saves={this.state.character.proficiency["Saving Throws"]}
                                />
                                <Skills
                                    skills={this.state.character.proficiency}
                                />
                                <Equipment
                                    equipment={this.state.character.equipment}
                                />
                            </div>
                            <div className="characterColumn">
                                <Background
                                    background={this.state.character.background}
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