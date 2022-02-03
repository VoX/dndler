import React from 'react';

const CharacterSkills = ( props ) =>
{
    const skillsList = () =>
    {
        let rows = [];
        for(let skillTag in props.skills.Skills)
        {
            rows.push(<SkillEntry
                key={skillTag}
                skillName={skillTag}
                skillValue={props.skills.Skills[skillTag]}
                prof={props.skills['Proficient Skills'].includes(skillTag)}
            />);
        }
        return rows;
    }

    return (
        <React.Fragment>
            <h2 className="skillsHeader">SKILLS</h2>
            <ul className="characterSkills">
                {skillsList()}
            </ul>
        </React.Fragment>
    );
}

const SkillEntry = ({ props }) =>
{
    return(
        <li className={"individualSkill " + (props.prof ? "proficient" : "")}>
            <p className="skillsTitle inline-block leftAlign">{props.skillName}</p>
            <p className="skillsValue inline-block rightAlign">{(props.skillValue > 0 ? "+" : "") + props.skillValue}</p>
        </li>
    );
}

export default CharacterSkills;