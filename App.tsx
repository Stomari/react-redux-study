import React from 'react';
import {Provider} from 'react-redux';

// Components
import Counter from './components/Counter/Counter';

// Store
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
