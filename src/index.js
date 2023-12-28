import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './Counter';
import Cards from './Cards';
import Reg1 from './Reg1';
import Reg2 from './Reg2';
import './Cards.css';
import Navbar from './Navbars';
import Navbars from './Navbars';
import Fetch from './Fetch';
import Fetch1 from './Fetch1';
import Detail from './Detail';
import Yearvalidation from './Yearvalidation';
import { Provider } from 'react-redux';
import { store } from './Store';
import Count from './Count';
import Fileupload from './Fileupload';
import Memo from './Memo';
import ThemedComponent from './ThemedComponent';
import Nav from './Nav';
import ThemeApp from './ThemeApp';
import TailwindDemo from './TailwindDemo';
import Bootsnav from './Bootsnav';
import FormDb from './FormDb';
import UpdateDb from './UpdateDb';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ListDb from './ListDb';
import UpdateRegDb from './UpdateRegDb';
import MessageApp from './MessageApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
  {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navbars/>}>
      <Route path='Register' element={<Reg2/>}/>
      <Route path='Reg1' element={<Reg1/>}/>
      <Route path='Counter' element={<Counter/>}/>
      <Route path='App' element={<Fetch/>}/>
    </Route>
  </Routes>
  </BrowserRouter> */}
  
  
  {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<Fetch/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
  </Routes>
</BrowserRouter> */}

{/* <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Count/>}/>
  </Routes>
  </BrowserRouter>
</Provider> */}

{<MessageApp/>}

  {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<RegisterPage/>}/>
    <Route path='/loginPage' element={<LoginPage/>}/>
    <Route path='/listDb' element={<ListDb/>}/>
    <Route path='/updateDb/:id' element={<UpdateRegDb/>}/>
  </Routes>
  </BrowserRouter>  */}


  {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<FormDb/>}/>
    <Route path='/update/:id' element={<UpdateDb/>}/>
  </Routes>
  </BrowserRouter>  */}


  {/* <Yearvalidation/> */}
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
