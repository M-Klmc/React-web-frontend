import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import TodoList from './TodoList.js';
import Login from './Login.js';
import Logout from './Logout.js';
import TodoDetail from './TodoDetail.js';
import { TokenContext, RefreshListContext } from './contexts.js';

function App() {
  const [token, setToken] = useState(null);
  
  const refreshList = () => {

  };

  function acceptToken(newToken) {
    setToken(newToken);
  }

  return (
    <BrowserRouter>
      <TokenContext.Provider value={token}>
        <RefreshListContext.Provider value={refreshList}>
          <nav>
            {token && (
              <Link to="/" className='brand'>
                <span>Список дел</span>
              </Link>
            )}
            <input id='bmenub' type='checkbox' className='show' />
            <label htmlFor='bmenub' className='burger pseudo button'>&#9776;</label>
            <div className='menu'>
              {token && <Logout acceptToken={acceptToken} />}
            </div>
          </nav>

          <Routes>
            <Route path="/todo/:id" element={
              token ? <TodoDetail /> : <Navigate to="/login" replace />
            }/>
            <Route path="/" element={
              token ? <TodoList /> : <Navigate to="/login" replace />
            }/>
            <Route path="/login" element={
              !token ? <Login acceptToken={acceptToken} /> : <Navigate to="/" replace />
            }/>
          </Routes>

          <p className="copyright">Все права принадлежат M-Klmc</p>
        </RefreshListContext.Provider>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;