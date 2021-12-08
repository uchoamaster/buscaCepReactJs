import { FiSearch } from 'react-icons/fi';

function App() {
  return (
    <div className="container">
     <h1 className="title">Buscador CEP</h1>
     <div className="container">
       <input
       type="text"
       placeholder="Digite seu cep ..."
       />

       <button className="buttonSearch">
          <FiSearch />
       </button>
     </div>
    </div>
  );
}

export default App;
