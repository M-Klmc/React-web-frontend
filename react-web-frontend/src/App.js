import { useState } from 'react';

import TodoList from './TodoList.js';
import Login from './Login.js';
import Logout from './Logout.js';

import { TokenContext, RefreshListContext } from './contexts.js';

function App() {
  const [token, setToken] = useState(undefined);

  function acceptToken(tnk) {
    setToken(tnk);
  }

    return (
      <TokenContext.Provider value={token}>
        <RefreshListContext.Provider value={() => {}}>
          <nav>
            {token &&
            <a href='/' className='brand'>
              <span>Список дел</span>
            </a>
            }
            <input id='bmenub' type='checkbox' className='show' />
            <label htmlFor='bmenub' className='burger pseudo button'>&#9776</label>
            <div className='menu'>
                  {token && <Logout acceptToken={acceptToken}/>}
            </div>
          </nav>
            {!token && <Login acceptToken={acceptToken}/>}
            {token && <TodoList/>}
          <p className='copyright'>Все права принадлежат M-Klmc</p>
        </RefreshListContext.Provider>
      </TokenContext.Provider>
  );
}
export default App;
