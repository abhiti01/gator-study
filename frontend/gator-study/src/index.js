import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from "./components/timer/contexts/stateProvider";
import reducer, { initialState } from "./components/timer/reducer";
import App from './App';
ReactDOM.render(
      <React.StrictMode>
        <StateProvider reducer={reducer} initialState={initialState}>
        <App />
        </StateProvider>
      </React.StrictMode>,
    document.getElementById('root')
  );