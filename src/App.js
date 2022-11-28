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

import LoginButton from './components/Log/LoginButton';
import LogoutButton from './components/Log/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Router>
          <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="appName">
                        React User Authentication</span>
                </div>
            </nav>
            <LoginButton />
            <LogoutButton />
        </>
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
