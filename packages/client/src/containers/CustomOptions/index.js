import React, { useState, useEffect } from 'react';

const CustomOptionsPage = () => {
    const [state, setState] = useState({randomName: ''});

    useEffect(() => {
        fetch('http://localhost:8000/sources', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then((json) => {
            setState({
                ...state,
                response: json
            })
        })
        .catch(() => {
            console.log("Sorry, it borked");
        });
    },
    [state.randomName]
    );

    console.log(state);

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default CustomOptionsPage;