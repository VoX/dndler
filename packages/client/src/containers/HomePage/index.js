import React, {useState} from 'react';

const HomePage = () => {
  // Instantiate a local state that can be overwritten via setState
  const [state, setState] = useState({
    names: ['Brend', 'Brenda', 'Brendle', 'Brendly', 'Brendan', 'Brendaniel', 'Brendanahan', 'Sir Brend of Ann', 'Brendnificient', 'Brendinglydang von Brendlydong'],
    randomName: ''
  })

  // Pick name function
  const pickName = () => {
    const newRandomName = state.names[Math.floor(Math.random() * state.names.length)];
    // Set state
    setState({
      // Keeps all previous state
      ...state,
      // Overwrites this one part of previous state
      randomName: newRandomName
    });
  }


  return (
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
