import './App.css';
import{Navbar, Footer} from './componentes/headerAndNavbar.jsx';
//import News from './componentes/news/News.jsx';
import Contactos from './componentes/contact/Contactos.jsx';



function App() {
  return (
    <div className="App">
        
      <Navbar/>
      <Contactos />
      <Footer/>
      
    </div>
      
  );
}

export default App;
