// import React from 'react';
// import './App.css';
// import { Select } from './components/FormElements/Select';
// import { ActiveInsure } from './components/UI/Insurance';

// const App = (): JSX.Element => {
//   return (
//     <Providers.AppStateProvider>
//       <div className='App'>
//         <Select id="insurance"/>
//         <ActiveInsure />
//       </div>
//     </Providers.AppStateProvider>
//   );
// };

// export default App;

import React from 'react';
import Providers from './Providers';

import { Insurance } from './Components/UI/Pages';
import { InsuranceCard } from './Components/UI/Pages/InsuranceCard';

const App = () => {
  return (
    <Providers.AppStateProvider>
      <Insurance />
      <InsuranceCard />
    </Providers.AppStateProvider>
  );
};

export default App;
