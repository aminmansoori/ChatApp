import React from 'react';
import { View } from 'react-native';
import MainScreen from './src/Screens/MainScreen';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/Store/Reducers/index';

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "#e6e6ff" }}>
        <MainScreen />
      </View>
    </Provider>
  )
}
export default App;