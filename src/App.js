import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import MainLayout from './components/mainLayout/MainLayout.jsx';
import VirtualDom from './components/virtualDom/VirtualDom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormAntd from './components/forms/FormAntd';
import ToDoApp from './components/toDoApp/ToDoApp';




function App() {

  const pageNames = ["Home", "Virtual Dom"];
  const [pageId, setPageId] = useState(0);

  let location = useLocation();

  console.log(location);


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout pathname={location.state} />}>
          <Route index element={<Home />} />
          <Route path="virtualDom" element={<VirtualDom />} />
          <Route path="formAntd" element={<FormAntd/>} />
          <Route path="toDo" element={<ToDoApp/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

