import React, {useState} from 'react';

const HomePage = () => {
  // Instantiate a local state that can be overwritten via setState
  // Not everything needs to be kept in state, but it is useful to preserve values between function calls.
  // Source Doc: https://reactjs.org/docs/hooks-state.html
  const [state, setState] = useState({
    names: ['Brend', 'Brenda', 'Brendle', 'Brendly', 'Brendan', 'Brendaniel', 'Brendanahan', 'Sir Brend of Ann', 'Brendnificient', 'Brendinglydang von Brendlydong'],
    randomName: '',
    response: ''
  })

  fetch('http://localhost:8000/', {

    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  },
  ).then(response => {
    console.log(response)
  })
  .catch(() => {
    console.log("Sorry, it borked");
  });

  // Instantiate pickName function, any arguments you need to pass in can go in the ().
  const pickName = () => {
    const newRandomName = state.names[Math.floor(Math.random() * state.names.length)];
    // vv Set the state vv
    setState({
      // vv Keeps all previous state vv
      ...state,
      // vv Overwrites this one part of previous state vv
      randomName: newRandomName
    });
  }

  


  return (
    // When returning JSX in React, it must all be wrapped in a single parent element. You can't return two separate parent elements.
    // React.Fragment allows you to wrap everything in a single parent element that has no inherent properties.
    // This allows you to get away from wrapping everything in an unstyled <div>, which can be annoying and clutters up the HTML in the inspect tool.
    <React.Fragment>
      <div style={{justifyContent: 'center', display: 'flex'}}>
        <button onClick={pickName}>
          What is your name?
        </button>
      </div>
      <p style={{justifyContent: 'center', display: 'flex', color: 'white', fontSize: '28px'}}>
        My name is {state.randomName}
      </p>
    </React.Fragment>
  );
}

export default HomePage;
