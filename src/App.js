import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>

    </>

  );
}

export default App;
