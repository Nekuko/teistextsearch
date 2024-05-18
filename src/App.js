import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Import the Header component
import SearchPage from './components/SearchPage/SearchPage'; // Import the Searchpage component
import InfoPage from './components/InfoPage/InfoPage'; // Import the InfoPage component
import ChangePage from './components/ChangePage/ChangePage'; // Import the HowToUsePage component


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage/>} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/changelog" element={<ChangePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
