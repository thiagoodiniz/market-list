import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MarketList from './components/market-list/MarketList';

function App() {
  return (
    <div className="App">
      <AppBar className="app-bar" position="static">
        <h2>Listas de Compras</h2>
      </AppBar>

      <MarketList />
    </div>
  );
}

export default App;
