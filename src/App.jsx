import './main.css' 
import Rotas from './pages/Rotas.jsx';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <>
   <BrowserRouter> 
      <Rotas/>
   </BrowserRouter>
    </>
  );
};

export default App;
