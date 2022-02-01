import React from 'react';

class SavingThrows extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <React.Fragment>
                <section className="characterSaves">
                    <h2 className="savesHeader">SAVING THROWS</h2>
                    <ul>
                        <SaveThrow
                            title={"STR"}
                            value={this.props.saves["STR"]}
                            prof={this.props.prof.includes("STR")}
                        />
                        <SaveThrow
                            title={"DEX"}
                            value={this.props.saves["DEX"]}
                            prof={this.props.prof.includes("DEX")}
                        />
                        <SaveThrow
                            title={"CON"}
                            value={this.props.saves["CON"]}
                            prof={this.props.prof.includes("CON")}
                        />
                        <SaveThrow
                            title={"INT"}
                            value={this.props.saves["INT"]}
                            prof={this.props.prof.includes("INT")}
                        />
                        <SaveThrow
                            title={"WIS"}
                            value={this.props.saves["WIS"]}
                            prof={this.props.prof.includes("WIS")}
                        />
                        <SaveThrow
                            title={"CHA"}
                            value={this.props.saves["CHA"]}
                            prof={this.props.prof.includes("CHA")}
                        />
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

class SaveThrow extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <li className={"individualSave " + (this.props.prof ? "proficient" : "")}>
                <p className="savesTitle inline-block leftAlign">{this.props.title}</p>
                <p className="savesValue inline-block rightAlign">{(this.props.value > 0 ? "+" : "") + this.props.value}</p>
            </li>
        );
    }
}

export default SavingThrows;