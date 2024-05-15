// LightNovelVolumes.js
import React from 'react';
import Collapsible from 'react-collapsible';
import '../Results.css'; // Import the CSS file
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function LightNovelResults({ lnData }) {
  // If lnData is empty, return nothing

  if (Object.keys(lnData.volumes).length === 0) {
    return null;
  }

  const volumeMapping = {
    'v1': {
      'title': 'Volume 1',
      'chapters' : {
        'c1': 'Prologue | Preparing the Perfect Stage!',
        'c2': 'Chapter 1 | Starting the Shadowbroker Tutorial!',
        'c3': 'Chapter 2 | Assuuming the Role of a Side Character at School!',
        'c4': "Chapter 4 | My Official Beginning as a Mastermind in Action!",
        'c5': 'Chapter 5 | The Two Sides of the Shadow Garden?!',
        'c6': 'Chapter 6 | Mastering the Peaceful Life of a Nobody!',
        'c7': 'Chapter 7 | That Scene Where Terrorists Take Over the School',
        'c8': 'Final Chapter | My Idea of the Ultimate Shadow Commander!',
        'c9': 'Appendix'
      }
    },
    'v2': {
      'title': 'Volume 2',
      'chapters' : {
        'c1': 'Prologue | To Lindwurm, the Sacred Land!',
        'c2': "Chapter 1 | Fun Times at the Goddess's Trial!",
        'c3': 'Chapter 2 | Investigating the Sanctuary!',
        'c4': "Chapter 3 | When Things Get Borings, It's Time for Explosives!",
        'c5': 'Chapter 4 | This Situation Calls for a "Who Is That Guy?!"',
        'c6': 'Chapter 5 | A Battle to Attract Only MVPS!',
        'c7': 'Chapter 6 | A Mastermind Always Plays Piano Under Moonlight!',
        'c8': 'Chapter 7 | Showing Off a Smidgen of My Strength',
        'c9': 'Chapter 8 | Lay Your Eyes on My True Powers!',
        'c10': 'Final Chapter | Just Who Is This Mysterious Badass?!',
        'c11': 'Appendix'
      }
    },
    'v3': {
      'c1': 'P | Heading to the Lawless City over Fall Break!',
      'c2': "1 | Lawless City Bandit Hunting!",
      'c3': '2 | Storming the Crimson Tower',
      'c4': "3 | Pursuing the Blood Queen",
      'c5': 'X | Field Notes on a Little Brother—by Young Claire!',
      'c6': "4 | I'll Destroy It All and Start from Scratch!",
      'c7': '5 | Printing Fake Money as Mitsughoshi Throws Down with the Major Corporate Alliance!',
      'c8': '6 | Circulating Counterfeit Cash!',
      'c9': 'E | The One to Destroy It ALl and Start from Scratch—with Fake Bills!',
      'c10': 'A | Appendix',
    },
    'v4': {
      'c1': "P | It's Time for a War in the Oriana Kingdom!",
      'c2': "1 | Putting the Kibosh on Rose Oriana's Wedding!",
      'c3': '2 | Begin Operation Obstruction!',
      'c4': "3 | Crashing the Ceremony!",
      'c5': 'X | Rise of the Fancy Hoodlum Slayer!',
      'c6': "4 | Lurking in the Darkness in Fantastical Japan!",
      'c7': '5 | Sneaking around in Japan, Just Like the Old Days!!',
      'c8': '6 | Something Smells Fishy...But an Eminence in Shadow Always Cracks the Case!',
      'c9': 'E | Behond, a Full-Fledged Eminence in Shadow!',
      'c10': 'A | Appendix',
    },
  };

  function showPopup(volumeIndex, chapterIndex, sentenceIndex) {
    // Use a unique ID for each popup
    const popup = document.getElementById(`popup-${volumeIndex}-${chapterIndex}-${sentenceIndex}`);
    console.log(popup)
    if (popup) {
      popup.classList.add('show');
      setTimeout(() => {
        popup.classList.remove('show');
      }, 1000); // The popup will be shown for 2 seconds
    }
  }

  return (
    <div>
      {Object.entries(lnData.volumes).map(([volumeKey, volumeValue]) => {
        // Get the volume title from the mapping
        const volumeTitle = volumeMapping[volumeKey]?.title || `Volume ${volumeKey.slice(1)}`;
        // Calculate the total count for each volume
        const volumeCount = Object.values(volumeValue.chapters).reduce((total, chapter) => total + chapter.count, 0);

        return (
          <Collapsible trigger={`${volumeTitle} (Total: ${volumeCount})`} key={volumeKey}>
            {Object.entries(volumeValue.chapters).map(([chapterKey, chapterValue]) => {
              // Get the chapter title from the mapping
              const chapterTitle = volumeMapping[volumeKey]?.chapters[chapterKey] || `Chapter ${chapterKey.slice(1)}`;
              return (
                <Collapsible trigger={`${chapterTitle} (Total: ${chapterValue.count})`} key={chapterKey}>
                  <div className="sentences-container">
                  {chapterValue.sentences.map((sentence, index) => (
                    <div className="sentence-box" key={index}>
                      <p>{sentence}</p>
                      <CopyToClipboard text={sentence}>
                      <div className="copy-icon" onClick={() => showPopup(volumeKey, chapterKey, index)}>
                          <FontAwesomeIcon icon={faCopy} />
                          {/* Ensure the ID is unique for each popup */}
                          <div className="popup" id={`popup-${volumeKey}-${chapterKey}-${index}`}>
                            Copied!
                          </div>
                        </div>
                      </CopyToClipboard>
                    </div>
                  ))}
                  </div>
                </Collapsible>
              );
            })}
          </Collapsible>
        );
      })}
    </div>
  );
}

export default LightNovelResults;
