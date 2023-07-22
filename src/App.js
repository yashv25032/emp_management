import './App.css';
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Home from './Home';
import View from './View';
import Edit from './Edit';


function App() {
  return (

    <>


      <Routes>

        <Route exact path='/' Component={Home} />

        <Route exact path='/view/:id' Component={View} />

        <Route exact path='/edit/:id' Component={Edit} />

      </Routes>


    </>

  );
}

export default App;
