import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Routes } from './src/routes';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />

      <StatusBar 
       barStyle="default"
       backgroundColor="#13131A"
       translucent
      />
    </Provider>
  );
}
