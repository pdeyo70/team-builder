import React, { useState } from 'react';
import './App.css';

import Teammates from './components/Teammates';
import TeammateForm from './components/TeammateForm';

import data from './data'

function App() {

const [members, setMembers] = useState(data);

const addNewMember = member => {
  setMembers([...members, member]);
};

  return (
    <div className="App">
      <h1>Our Team</h1>
      <Teammates teamData={members} />
      <TeammateForm addNewMember={addNewMember} />
      
    </div>
  );
}

export default App;
