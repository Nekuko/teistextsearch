import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; // Import the Header component
import SearchPage from './components/SearchPage/SearchPage'; // Import the Searchpage component
import InfoPage from './components/InfoPage/InfoPage'; // Import the InfoPage component
import ChangePage from './components/ChangePage/ChangePage'; // Import the HowToUsePage component
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import 'firebase/auth';


function App() {
  return (
    <Router>
      <Routes>
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
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/" element={<ProtectedRoute component={SearchPage} />} />
        <Route path="/info" element={<ProtectedRoute component={InfoPage} />} />
        <Route path="/logout" element={<ProtectedRoute component={ChangePage} />} />
      </Routes>
    </div>
  );
}

export default App;
