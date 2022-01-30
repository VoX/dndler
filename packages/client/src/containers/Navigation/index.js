import React from 'react';
import OptionButton from '../Options/OptionButton';

class Navigation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { destinations: {

        }};
    }

    componentDidMount()
    {
        switch(this.props.curPage)
        {
            case("Custom"):
                this.setState({
                    destinations: [
                        {
                            "text": "HOME",
                            "callBack": this.props.goHome,
                            "id": "home"
                        },
                        {
                            "text": "LEMME SEE DA MIN!",
                            "callBack": this.props.goCharacter,
                            "id": "character"
                        }
                    ]
                });
                break;

            case("Character"):
                this.setState({
                    destinations: [
                        {
                            "text": "HOME",
                            "callBack": this.props.goHome,
                            "id": "home"
                        },
                        {
                            "text": "GIMME ANUDDER MIN!",
                            "callBack": this.props.goCharacter,
                            "id": "character"
                        },
                        {
                            "text": "I wanna see da options",
                            "callBack": this.props.goCustom,
                            "id": "custom"
                        }
                    ]
                });
                break;
            
            case("Home"):
            default:
                this.setState({
                    destinations: [
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
                    ]
                });
                break;
        }
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
        let thisObj;
        console.log(this.state);
        for(let i = 0; i < this.state.destinations.length; ++i)
        {
            thisObj = this.state.destinations[i];
            console.log(thisObj);
            nav.push(
                <OptionButton
                    value={thisObj.text}
                    onClick={thisObj.callBack}
                    id={thisObj.id}
                    key={thisObj.id+i}
                />
            );
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