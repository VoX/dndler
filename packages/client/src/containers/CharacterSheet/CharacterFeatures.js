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
                    <h4 className="featureEntry-title">{props.features[feature]["Name"]}</h4>
                    <h5 className="featureEntry-source">{props.features[feature]["Source"]}</h5>
                    <p className="featureEntry-desc">{props.features[feature]["Description"]}</p>

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