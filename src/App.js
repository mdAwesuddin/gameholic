import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap/js/dist/dropdown.js"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Shooter from './Components/Shooter';
import Anime from './Components/Anime';
import Battle from './Components/Battle';
import Strategy from './Components/Strategy';
import Fantacy from './Components/Fantacy';
import Moba from './Components/Moba';
import Scifi from './Components/Scifi';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    {/* <Shooter/> */}
    {/* <Anime/> */}
    {/* <Battle/> */}
    {/* <Strategy/> */}
    {/* <Fantacy/> */}
    {/* <Moba/> */}
    {/* <Scifi/> */}
    <Footer/>
    </div>
  );
}

export default App;
