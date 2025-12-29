import TodoList from './TodoList.js'

function App() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTS1LbG1jMiIsImlhdCI6MTc2NzAzMTI2OX0.QaeAUhOOxGFX5C3pOGIiCDaaRdUafBUSGWLNf7Cm_-k';
  return (
    <> 
      <nav>
        <a href='/' className='brand'>
          <span>Список дел</span>
        </a>
        <input id='bmenub' type='checkbox' className='show' />
        <label htmlFor='bmenub' className='burger pseudo button'>&#9776</label>
        <div className='menu'></div>
      </nav>
      <TodoList token={token}/>
      <p className='copyright'>Все права принадлежат M-Klmc</p>
    </>
  );
}
export default App;
