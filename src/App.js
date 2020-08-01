
import React from 'react';
import Routes from './Routes';
import { GalioProvider } from 'galio-framework';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar } from 'react-native';

const customTheme = {
  SIZES: { BASE: 18, },
  // this will overwrite the Galio SIZES BASE value 16
  COLORS: {
     PRIMARY: '#00adb5',
     INPUT:'#1232FF',
     NAVBAR:'#eeeeee',
     BLOCK:'red',
     TEXT:'#eeeeee'
    },

  // this will overwrite the Galio COLORS PRIMARY color #B23AFC
};

const App = () => {
  return (<Provider store={store}>
      <StatusBar backgroundColor={"#222831"} barStyle={'light-content'} /> 
      <GalioProvider theme={customTheme}>
        <Routes />
      </GalioProvider>
    </Provider>
  );
};

export default App;
