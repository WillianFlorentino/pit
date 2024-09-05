import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import CadAtivSust from './Paginas/AtivSustentaveis/CadAtivSust';
import Beneficiarios from './Paginas/Beneficiarios/Beneficiarios';
import FormColab from './Paginas/Colaboradores/FormColab';
import Maquinario from './Paginas/Maquinario/Maquinario';
import reportWebVitals from './reportWebVitals';
import NavBar from './Componentes/NavBar';
import Home from './Componentes/Home';
import CadTiposServ from './Paginas/TiposDeServico/CadTiposServ';
import CadTipoMaq from './Paginas/TipoMaquinario/CadTipoMaq';
import Login from './Componentes/Login';
import ProtectedRoute from './Componentes/ProtectedRoute';
import App from './App';
import Register from './Componentes/Register';

const router = createBrowserRouter(
  [
    {
      path: '/login', 
      element: <App />
    },

    {
      path: '/register',
      element: <Register /> // Adicionar a rota para Register
    },
    {
      element: <NavBar />, 
      children: [
        {
          path:'/login',
          element:<Login />
        },

        {
          path:'/Componentes',
          element: <Home/>
        },

        {
          path:'/AtivSustentaveis',
          element:<CadAtivSust></CadAtivSust>
        },

        {
          path:'/AtivSustentaveis/:idAtividade',
          element:<CadAtivSust></CadAtivSust>
        },

        {
          path:'/Beneficiarios',
          element: <ProtectedRoute> <Beneficiarios/> </ProtectedRoute> 
        },

        {
          path:'/Colaborador',
          element:<ProtectedRoute> <FormColab/> </ProtectedRoute>
        },
        {         
          path:'/colaborador/:idColaborador',
          element:<ProtectedRoute> <FormColab/> </ProtectedRoute>      
        },
        {
          path: '/TiposDeMaquinario',
          element: <CadTipoMaq></CadTipoMaq>
        },
        {         
          path:'/TiposDeMaquinario/:idTiposDeMaquinario',
          element:<CadTipoMaq></CadTipoMaq>       
        },
        {
          path: '/Maquinario',
          element: <Maquinario></Maquinario>
        },
        {         
          path:'/maquinario/:idMaquinario',
          element:<Maquinario></Maquinario>       
        },
        {         
          path:'/TiposDeServico',
          element:<CadTiposServ></CadTiposServ>     
        },
        {         
          path:'/TiposDeServico/:idServico',
          element:<CadTiposServ></CadTiposServ>     
        }
      ]
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();