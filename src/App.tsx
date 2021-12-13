import React from 'react';
import {ThemeContextProvider} from './context/ThemeContext'
import {Box} from './context/Box';
import {UserContextProvider} from './context/UserContext';
import {User} from './context/User';
import {Profile} from './components/auth/Profile'
import {Private} from './components/auth/Private'
import {List} from './components/generics/List'
import { RandomNumber } from './ref/restriction/RandomNumber';
import {Toast} from './ref/templateliterals/Toast'
import { CustomButton } from './components/html/Button';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
          items={['Batman', 'Superman', 'WonderWoman']}
          onClick={(item) => console.log(item)} />
      <List items={[1,2,3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne',
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent',
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana',
          },
        ]}
        onClick={(item) => console.log(item)} />
        <RandomNumber value={10} isPositive />
        <Toast position='center'/>
        <CustomButton 
          variant='primary'
          onClick={()=>{console.log("clicked")}}
        >
          Primary Button
        </CustomButton>
    </div>
  );
}

export default App;
