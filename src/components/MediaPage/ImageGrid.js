import React from 'react';

const ImageGrid = ({ data, mediaImages, manageImageData }) => {
    const groupedNotes = groupNotesByAnime(data);
    let specialMap = { a: "Afterword", t: "Teaser" }

    return (
        <div className="image-grid">
          {Object.keys(groupedNotes).map((anime) => (
            <div key={anime}>
              <h2 className="note-group-title">{data.groups[anime].toUpperCase()}</h2>
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
              <br/>
              <br/>
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