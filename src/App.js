import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MarketList from './components/market-list/MarketList';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <AppBar className="app-bar" position="static">
          <h2>Listas de Compras</h2>
        </AppBar>

        <MarketList />
      </div>
    </Provider>
  );
}

export default App;
