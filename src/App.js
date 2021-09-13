import { useState } from 'react'

import './App.css';

import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import Videos from './Component/Videos/Videos';

function App() {

  const [open, setOpen] = useState(true)

  return (
    <div className="App">
      <Header setOpen={setOpen} open={open} />
      <div className="app_body">
        <Sidebar open={open} />
        <Videos />
      </div>
    </div>
  );
}

export default App;
