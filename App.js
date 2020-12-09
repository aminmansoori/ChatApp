import React from 'react';
import MainScreen from './src/Screens/MainScreen';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/Store/Reducers/index';

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
        <MainScreen />
    </Provider>
  )
}
export default App;
