import React from 'react';

const SavingThrows = ({ props }) =>
{
    return (
        <React.Fragment>
            <section className="characterSaves">
                <h2 className="savesHeader">SAVING THROWS</h2>
                <ul>
                    <SaveThrow
                        title={"STR"}
                        value={props.saves["STR"]}
                        prof={props.prof.includes("STR")}
                    />
                    <SaveThrow
                        title={"DEX"}
                        value={props.saves["DEX"]}
                        prof={props.prof.includes("DEX")}
                    />
                    <SaveThrow
                        title={"CON"}
                        value={props.saves["CON"]}
                        prof={props.prof.includes("CON")}
                    />
                    <SaveThrow
                        title={"INT"}
                        value={props.saves["INT"]}
                        prof={props.prof.includes("INT")}
                    />
                    <SaveThrow
                        title={"WIS"}
                        value={props.saves["WIS"]}
                        prof={props.prof.includes("WIS")}
                    />
                    <SaveThrow
                        title={"CHA"}
                        value={props.saves["CHA"]}
                        prof={props.prof.includes("CHA")}
                    />
                </ul>
            </section>
        </React.Fragment>
    );
}

const SaveThrow = ({ props }) =>
{
    return(
        <li className={"individualSave " + (props.prof ? "proficient" : "")}>
            <p className="savesTitle inline-block leftAlign">{props.title}</p>
            <p className="savesValue inline-block rightAlign">{(props.value > 0 ? "+" : "") + props.value}</p>
        </li>
    );
}

export default SavingThrows;