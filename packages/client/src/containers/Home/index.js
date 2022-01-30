import React, { useState, useEffect } from 'react';
import Clock from '../Clock';

class HomePage extends React.Component
{
    componentWillUnmount()
    {

    }

    render()
    {
        return(
            <React.Fragment>
                <Clock/>
            </React.Fragment>
        )
    }
}

export default HomePage;