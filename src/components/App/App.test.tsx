import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import { createStore } from 'redux';
import { itemsReducer } from '../../store/catItems/reducers';

const store = createStore( itemsReducer );

test('renders without crushing', () => {

  render(
      <Provider store={store}>
        <App />
      </Provider>
  );
  expect('Rendering');
});
