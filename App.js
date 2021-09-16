import React from 'react';
import Navigator from './src/routes/navigator';
import {Provider} from 'react-redux';
import store from './src/providers/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
