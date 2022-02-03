import React, { useState, useEffect } from 'react';
import OptionButton from '../EventCallers/OptionButton';

const Navigation = (props) =>
{
    const getDestinations = () =>
    {
        switch(props.curPage)
        {
            case("Home"):
                return ["Character", "Custom"];
            case("Character"):
                return ["Home", "Character", "Custom"];
            case("Custom"):
                return ["Home", "Character"];
        }
    }

    const navigationList = () =>
    {
        let destinations = getDestinations();
        let nav = [];
        for(let i = 0; i < destinations.length; ++i)
        {
            nav.push(
                <OptionButton
                    className={"navButton"}
                    label={destinations[i]}
                    value={destinations[i]}
                    onClick={props.changePage}
                    id={destinations[i]+"-button"}
                    key={destinations[i]}
                />
            )
        }
        return nav;
    }

    return (
        <>
            <nav className="App-nav">
                {navigationList()}
            </nav>
            <hr/>
        </>

    )
}

export default Navigation;