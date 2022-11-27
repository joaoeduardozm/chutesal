import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import NewChampionship from './components/pages/NewChampionship';
import NewUnity from './components/pages/NewUnity';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Championships from './components/pages/Championships';

function App() {
  return (
        <Router>
          <Navbar />
            <Container>
              <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route exact path="/newunity" element={<NewUnity />}></Route>
                  <Route exact path="/newchampionship" element={<NewChampionship />}></Route>
                  <Route exact path="/championships" element={<Championships />}></Route>
              </Routes>
            </Container>
            <Footer />
        </Router>       
  );
}

export default App;
