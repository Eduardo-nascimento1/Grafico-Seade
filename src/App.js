import Barra from './Component/Navbar/Index';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Routes from './Routes';
import Grafico from './Component/Grafico';

function App() {
  return (
    <div className="App">
        <Barra/>
       <Routes/>
       <Grafico/>
    </div>
  );
}

export default App;
