// SearchPage.js
import React, {useState} from 'react';
import './SearchPage.css'; // Import the CSS file
import Filters from '../Filters/Filters'; // Import the Filters component
import Results from '../Results/Results' // Import the Resultse component
import { search } from '../../Search/Search';

function SearchPage() {
  const [animeDropdownState, setAnimeDropdownState] = useState({
    mainChecked: false,
    filter: '',
    openSeasons: {},
    seasonsChecked: {
      "Season 1": {
          "s1e1": false,
          "s1e2": false,
          "s1e3": false,
          "s1e4": false,
          "s1e5": false,
          "s1e6": false,
          "s1e7": false,
          "s1e8": false,
          "s1e9": false,
          "s1e10": false,
          "s1e11": false,
          "s1e12": false,
          "s1e13": false,
          "s1e14": false,
          "s1e15": false,
          "s1e16": false,
          "s1e17": false,
          "s1e18": false,
          "s1e19": false,
          "s1e20": false,
          "checked": false
      },
      "Season 2": {
          "s2e1": false,
          "s2e2": false,
          "s2e3": false,
          "s2e4": false,
          "s2e5": false,
          "s2e6": false,
          "s2e7": false,
          "s2e8": false,
          "s2e9": false,
          "s2e10": false,
          "s2e11": false,
          "s2e12": false,
          "checked": false
      }
  },
    episodeFilters: {}
  });

  const [lnDropdownState, setLNDropdownState] = useState({
    lnMainChecked: false,
    lnFilter: '',
    openVolumes: {},
    volumesChecked: {
      "Volume 1": {
          "v1c1": false,
          "v1c2": false,
          "v1c3": false,
          "v1c4": false,
          "v1c5": false,
          "v1c6": false,
          "v1c7": false,
          "v1c8": false,
          "v1c9": false,
          "checked": false
      },
      "Volume 2": {
          "v2c1": false,
          "v2c2": false,
          "v2c3": false,
          "v2c4": false,
          "v2c5": false,
          "v2c6": false,
          "v2c7": false,
          "v2c8": false,
          "v2c9": false,
          "v2c10": false,
          "checked": false
      },
      "Volume 3": {
          "v3c1": false,
          "v3c2": false,
          "v3c3": false,
          "v3c4": false,
          "v3c5": false,
          "v3c6": false,
          "v3c7": false,
          "v3c8": false,
          "v3c9": false,
          "checked": false
      },
      "Volume 4": {
        "v4c1": false,
        "v4c2": false,
        "v4c3": false,
        "v4c4": false,
        "v4c5": false,
        "v4c6": false,
        "v4c7": false,
        "v4c8": false,
        "v4c9": false,
        "checked": false
    }
  },
    chapterFilters: {}
  });

  const updateAnimeDropdownState = (key, value) => {
    setAnimeDropdownState(prevState => ({
      ...prevState,
      [key]: value
    }));
  }

  const updateLNDropdownState = (key, value) => {
    setLNDropdownState(prevState => ({
      ...prevState,
      [key]: value
    }));
  }



  return (
    <div className="search-page">
      <Filters
        animeDropdownState={animeDropdownState}
        updateAnimeDropdownState={updateAnimeDropdownState}
        lnDropdownState={lnDropdownState}
        updateLNDropdownState={updateLNDropdownState}
      />
      <Results /> {}
    </div>
  );
}

export default SearchPage;
