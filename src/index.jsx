import React from 'react';
import { render } from 'react-dom';
import './style.css';

import {smartHomeData} from './smartHomeData';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';

const App = () => (
  
  <div className='container'>
    <Header title="Chytrý dům"/>
    <Dashboard data={smartHomeData}/>
  </div>

  
);

render(<App />, document.querySelector('#app'));