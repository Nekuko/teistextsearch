import React, { useState } from 'react';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageGrid = ({ data, mediaImages, manageImageData }) => {
  const groupedNotes = groupNotesByAnime(data);
  let specialMap = { a: "Afterword", t: "Teaser", th: "Thanks" }

  const [menuStates, setMenuStates] = useState({
    ...data.groups,
    ...Object.keys(data.groups).reduce((acc, group) => ({
      ...acc,
      [group]: false,
    }), {}),
  })

  const toggleMenu = (menuId) => {
    setMenuStates((prevStates) => ({
      ...prevStates,
      [menuId]: !prevStates[menuId],
    }));
  };

  return (
    <div className="image-grid">
      {Object.keys(groupedNotes).map((anime) => (
        <div key={anime}>
          <div onClick={() => toggleMenu(anime)} className="info-title-container">
            <h2 className="note-group-title">{data.groups[anime].toUpperCase()}</h2>
            <FontAwesomeIcon
              className="caret-icon-small"
              icon={menuStates[anime] ? faCaretDown : faCaretRight}
            />
          </div>
          {menuStates[anime] && (
            <div className="scrollable-container">
              <div className="notes-container">
                {groupedNotes[anime].map((note, index) => (
                  <div
                    onClick={() => manageImageData({ full: groupedNotes, specific: note }, 'notes')}
                    key={index}
                    className="note-item"
                  >
                    <div className="img-zoom">
                      <img src={`${mediaImages[note.jp_image]}`} alt={`Director's Note ${index + 1}`} />
                    </div>
                    <p className="img-caption">
                      {data.groups[anime]}, {specialMap[note.episode] || `Episode ${note.episode}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <br />
          <br />
        </div>

      ))}
    </div>
  );
};

const groupNotesByAnime = (data) => {
  const groupedNotes = {};

  for (const noteId in data) {
    if (noteId !== 'groups') {
      const note = data[noteId];
      const anime = note.anime;

      if (!groupedNotes[anime]) {
        groupedNotes[anime] = [];
      }

      groupedNotes[anime].push(note);
    }
  }

  return groupedNotes;
};

export default ImageGrid;