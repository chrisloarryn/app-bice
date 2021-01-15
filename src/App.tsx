import React from 'react';
import './App.css';
import { Select } from './components/FormElements/Select';
import { ActiveInsure } from './components/UI/Insurance';
import Providers from './Providers';

const App = (): JSX.Element => {
  return (
    <Providers.AppStateProvider>
      <div className='App'>
        <Select id="insurance"/>
        <ActiveInsure />
      </div>
    </Providers.AppStateProvider>
  );
};

export default App;
