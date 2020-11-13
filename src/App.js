import React from 'react';
import { Header } from 'semantic-ui-react'
import BookContainer from './Components/BookContainer'

function App() {
  return (
    <div className="App">
      <Header as="h1" style={{color: '#00d5ff', "text-align": 'center', 'font-family': "'Indie Flower', cursive"}}>Uyghur Kids' Books Project</Header>
      <BookContainer/>
    </div>
  );
}

export default App;
