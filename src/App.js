import './App.css';

import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import Videos from './Component/Videos/Videos';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
}

export default App;
