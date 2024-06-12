import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; // Import the Header component
import Footer from './components/Footer/Footer';
import SearchPage from './components/SearchPage/SearchPage'; // Import the Searchpage component
import InfoPage from './components/InfoPage/InfoPage'; // Import the InfoPage component
import ChangePage from './components/ChangePage/ChangePage'; // Import the HowToUsePage component
import LoginPage from './components/LoginPage/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import 'firebase/auth';
import NoAuth from './components/NoAuth/NoAuth';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/noauth" element={<NoAuth/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && location.pathname !== '/noauth' && <Header />}
      <Routes>
        <Route path="/" element={<ProtectedRoute component={SearchPage} />} />
        <Route path="/info" element={<ProtectedRoute component={InfoPage} />} />
        <Route path="/logout" element={<ProtectedRoute component={ChangePage} />} />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/noauth' && <Footer />}
    </div>
  );
}

export default App;
