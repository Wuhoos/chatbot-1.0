import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"

import Chat from "./pages/chat"
import Upload from "./pages/upload"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Chat />}/>
        <Route path='/upload' element={<Upload />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
