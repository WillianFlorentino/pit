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
      path: '/', 
      element: <App />,
      loader: () => { 
        window.location.replace('/Login');
        return null;
      }
    },

    {
      path: '/register',
      element: <Register /> 
    },
    {
      path: '/login', 
      element: <App />
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
          element: <ProtectedRoute> <Home/> </ProtectedRoute> 
        },

        {
          path:'/AtivSustentaveis',
          element:<ProtectedRoute> <CadAtivSust/> </ProtectedRoute>
        },

        {
          path:'/AtivSustentaveis/:idAtividade',
          element:<ProtectedRoute> <CadAtivSust/> </ProtectedRoute>
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
          element: <ProtectedRoute> <CadTipoMaq/> </ProtectedRoute>
        },
        {         
          path:'/TiposDeMaquinario/:idTiposDeMaquinario',
          element:<ProtectedRoute> <CadTipoMaq/> </ProtectedRoute>     
        },
        {
          path: '/Maquinario',
          element: <ProtectedRoute> <Maquinario/> </ProtectedRoute>
        },
        {         
          path:'/maquinario/:idMaquinario',
          element:<ProtectedRoute> <Maquinario/> </ProtectedRoute>      
        },
        {         
          path:'/TiposDeServico',
          element:<ProtectedRoute> <CadTiposServ/> </ProtectedRoute> 
        },
        {         
          path:'/TiposDeServico/:idServico',
          element:<ProtectedRoute> <CadTiposServ/> </ProtectedRoute>    
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