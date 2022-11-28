import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import NewChampionship from './components/pages/NewChampionship';
import NewUnity from './components/pages/NewUnity';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Championships from './components/pages/Championships';
import Unidades from './components/pages/Unidades';
import Unidade from './components/pages/Unidade';

function App() {
  return (
        <Router>
          <Navbar />
            <Container>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/newunity" element={<NewUnity />}></Route>
                  <Route path="/newchampionship" element={<NewChampionship />}></Route>
                  <Route path="/championships" element={<Championships />}></Route>
                  <Route path="/unidades" element={<Unidades />}></Route>
                  <Route path="/unidade/:id" element={<Unidade />}></Route>
              </Routes>
            </Container>
            <Footer />
        </Router>       
  );
}

export default App;
