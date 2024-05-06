import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Import the Header component
import SearchPage from './components/SearchPage/SearchPage'; // Import the Searchpage component
import InfoPage from './components/InfoPage/InfoPage'; // Import the InfoPage component
import HowToUsePage from './components/HowToUsePage/HowToUsePage'; // Import the HowToUsePage component


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage/>} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/how-to" element={<HowToUsePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
