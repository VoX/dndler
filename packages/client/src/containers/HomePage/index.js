import React, {useState, useEffect} from 'react';

const HomePage = () => {
  // Instantiate a local state that can be overwritten via setState
  // Not everything needs to be kept in state, but it is useful to preserve values between function calls.
  // Source Doc: https://reactjs.org/docs/hooks-state.html
  const [state, setState] = useState({
    names: ['Brend', 'Brenda', 'Brendle', 'Brendly', 'Brendan', 'Brendaniel', 'Brendanahan', 'Sir Brend of Ann', 'Brendnificient', 'Brendinglydang von Brendlydong'],
    randomName: '',
    response: ''
  })

  // UseEffect triggers any time the component mounts. 
  // OR any time an item in the dependency array has it's value changed.
  // If the dependency array is left empty, it will only trigger on mount.
  useEffect(() => {
    // Initiate fetch request
    fetch('http://localhost:8000/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
    // Convert readable stream response to JSON object.
    .then(response => response.json())
    // Set state with JSON object or one of its properties
    .then((json) => {
      setState({
        ...state,
        response: json
      })
    })
    .catch(() => {
      console.log("Sorry, it borked");
    });
  // vv This next line allows you to set up empty/incomplete dependency arrays without compile warnings.
  // It must directly precede the dependency array as it's skipping the next line of code in eslint.
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [state.randomName]
  // ^^ This is the dependency array, it is required for UseEffect even if empty.
  );

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

  // View state in console.
  console.log(state);

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
