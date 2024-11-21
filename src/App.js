import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; // Import the Header component
import Footer from './components/Footer/Footer';
import SearchPage from './components/SearchPage/SearchPage'; // Import the Searchpage component
import InfoPage from './components/InfoPage/InfoPage'; // Import the InfoPage component
import LoginPage from './components/LoginPage/LoginPage';
import MediaPage from './components/MediaPage/MediaPage';
import ProtectedRoute from './components/ProtectedRoute';
import 'firebase/auth';
import NoAuth from './components/NoAuth/NoAuth';
import SettingsPage from './components/SettingsPage/SettingsPage';


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

// <Route path="/media" element={<ProtectedRoute component={MediaPage} />} />
function Main() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && location.pathname !== '/noauth' && <Header />}
      <Routes>
        <Route path="/" element={<ProtectedRoute component={SearchPage} />} />
        <Route path="/info" element={<ProtectedRoute component={InfoPage} />} />
        <Route path="/settings" element={<ProtectedRoute component={SettingsPage} />} />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/noauth' && <Footer />}
    </div>
  );
}

export default App;
