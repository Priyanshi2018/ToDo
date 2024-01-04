import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';

import AddTask from './components/AddTask'
import Home from './components/Home'
import './App.css';

function App() {

  return (
    <Router>
    <Routes>
    <Route path = "/" element={ <Home/>}/>
    <Route path="/add" element={<AddTask/>}/>
    </Routes>
        
    </Router>
  );
}


export default App;
