import React from 'react';

const CharacterFeatures = (props) =>
{
    const featureList = () =>
    {
        let rows = [];
        for(let feature in props.features)
        {
            rows.push(
                <li className="characterFeatureEntry leftAlign" key={feature+"-entry"}>
                    <strong>{props.features[feature]}</strong>
                </li>
            );
        }
        return rows;
    }

    return (
        <section className="characterFeatureSection">
            <h2 className="featuresHeader">FEATURES</h2>
            <ul className="characterFeatures">
                {featureList()}
            </ul>
        </section>
    );
}

export default CharacterFeatures;