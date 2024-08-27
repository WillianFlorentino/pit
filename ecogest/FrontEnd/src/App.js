
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Componentes/Login';
import Home from './Componentes/Home';

// function App() {
//   return (
//     <div className='App'>

//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Componentes' element={<Home />} />
    </Routes>
  );
}

export default App;