import React from 'react';

const CharacterSkills = ({ props }) =>
{
    const skillsList = () =>
    {
        let rows = [];
        for(let skillTag in this.props.skills.Skills)
        {
            rows.push(<SkillEntry
                key={skillTag}
                skillName={skillTag}
                skillValue={this.props.skills.Skills[skillTag]}
                prof={this.props.skills['Proficient Skills'].includes(skillTag)}
            />);
        }
        return rows;
    }

    return (
        <React.Fragment>
            <h2 className="skillsHeader">SKILLS</h2>
            <ul className="characterSkills">
                {this.skillsList()}
            </ul>
        </React.Fragment>
    );
}

const SkillEntry = ({ props }) =>
{
    return(
        <li className={"individualSkill " + (this.props.prof ? "proficient" : "")}>
            <p className="skillsTitle inline-block leftAlign">{this.props.skillName}</p>
            <p className="skillsValue inline-block rightAlign">{(this.props.skillValue > 0 ? "+" : "") + this.props.skillValue}</p>
        </li>
    );
}

export default CharacterSkills;