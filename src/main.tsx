// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App.tsx';
// import Login from './Login.tsx';
// import './index.scss';
//
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Login from './Login.tsx';
import Register from './Register.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  {}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
