import Form from './componentes/Form';
import Porfile from './componentes/Porfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 
import injectContext from "./store/context";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/newConctact/:id" element={<Form />} />
     <Route path="/"element={<Porfile />} />
     <Route path="/newConctact" element={<Form />} />
     </Routes>
    </BrowserRouter>
  )
}

export default injectContext(App)
