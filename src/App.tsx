import React from 'react';
import {ThemeContextProvider} from './context/ThemeContext'
import {Box} from './context/Box';
import {UserContextProvider} from './context/UserContext';
import {User} from './context/User';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
