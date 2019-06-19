import React from 'react';
import './App.css';
import '../../../node_modules/materialize-css/dist/css/materialize.css'
import 'materialize-css'
import { Button, Modal } from 'react-materialize';
import Navigation from '../navigation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <body className="App-body">
      <Modal header="Modal Header" bottomSheet trigger={<Button>This is a test Button</Button>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </Modal>
      </body>
    </div>
  );
}

export default App;
