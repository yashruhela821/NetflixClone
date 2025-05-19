import { Provider } from 'react-redux';
import './App.css';
import appStore from './utils/appStore';
import Body from './Components/Body';
import React from 'react';

function App() {
  return (
    <Provider store={appStore}>
   <Body class="font-sans" />
    </Provider>
  );

}

export default App;
