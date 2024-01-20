import React from 'react';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import Protected from "./features/auth/components/Protected";

import Home from "./pages/Home"
import LoginRegister from "./features/auth/components/LoginRegister";
import Monaco from "./features/codeeditor/components/Monaco"
import ProblemPage from './pages/ProblemPage';
import RealtimeIDE from './features/realtimeeditor/RealtimeIDE';
import Roomeditor from './features/realtimeeditor/components/Roomeditor';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Auth" element={<LoginRegister/>}/>
      <Route path="/:ProblemId" element={<ProblemPage/>}/>
      <Route path="/realtimeIDE" element={<RealtimeIDE/>}/>
      <Route path="/realtimeIDE/:RoomId" element={<Roomeditor/>}/>

    </Routes>   
  </BrowserRouter>
  );
}

export default App;
