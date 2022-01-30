import React from 'react';
import OptionButton from '../Options/OptionButton';

class Navigation extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentWillUnmount()
    {
        this.setState({
            destinations: {}
        });
    }

    navigationList()
    {
        let nav = [];
        console.log(this.props.destinations);
        if(this.props.destinations)
        {
            for(let i = 0; i < this.props.destinations.length; ++i)
            {
                nav.push(
                    <OptionButton
                        value={this.props.destinations[i].text}
                        onClick={this.props.destinations[i].callBack}
                        id={this.props.destinations[i].id}
                        key={this.props.destinations[i].id+i}
                    />
                );
            }
        }
        return nav;
    }

    render()
    {
        return (
            <React.Fragment>
                {this.navigationList()}
            </React.Fragment>
        )
    }
}

export default Navigation;