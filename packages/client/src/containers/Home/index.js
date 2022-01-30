import React, { useState, useEffect } from 'react';
import Clock from '../Clock';
import Navigation from '../Navigation';

class HomePage extends React.Component
{
    componentWillUnmount()
    {

    }

    render()
    {
        return(
            <React.Fragment>
                <Navigation
                    destinations={[
                        {
                            "text": "GIMME A MIN!",
                            "callBack": this.props.goCharacter,
                            "id": "character"
                        },
                        {
                            "text": "I wanna choose things",
                            "callBack": this.props.goCustom,
                            "id": "custom"
                        }
                    ]}
                />
                <Clock/>
            </React.Fragment>
        )
    }
}

export default HomePage;