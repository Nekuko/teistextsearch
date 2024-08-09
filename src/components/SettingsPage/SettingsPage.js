import React, { useState, useEffect } from 'react';
import './SettingsPage.css'; // Import the CSS file
import { readVersions } from '../../utils/indexedDBFunctions';
import { ESMAP, ESMAPREVERSE } from '../../esMap';
import { fetchVersionData } from '../../utils/firebaseFunctions';

function SettingsPage() {
  const [versionValues, setVersionValues] = useState(new Map());
  const [versionData, setVersionData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [versionLoading, setVersionLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await readVersions();
        const cleanedData = new Map();
        data.forEach((value, key) => {
          let cleanedKey = key;
          if (key.includes('data-versions-an')) {
            cleanedKey = key.replace('data-versions-an', '');
            cleanedKey = `Anime ${cleanedKey.split("-")[1].replace('s', 'Season ')}`
            if (cleanedKey.includes('_')) {
              cleanedKey = `${cleanedKey.split("_")[0]}, ${cleanedKey.split("_")[1].replace('e', 'Episode ')}`
            } else {
              if (cleanedKey.includes('101')) {
                cleanedKey = 'Kage-Jitsu!'
              } else {
                cleanedKey = 'Kage-Jitsu! 2nd'
              }
            }
          } else if (key.includes('data-versions-es')) {
            cleanedKey = key.replace('data-versions-es-', '');
            cleanedKey = `${ESMAP[cleanedKey]}`
          } else if (key.includes('data-versions-ln')) {
            cleanedKey = key.replace('data-versions-ln-', 'Light Novel ').replace(' v', ' ');
          } else if (key.includes('data-versions-wn')) {
            cleanedKey = key.replace('data-versions-wn-', 'Web Novel ').replace(' v', ' ');
          } else if (key.includes('data-versions-apo')) {
            cleanedKey = key.replace('data-versions-apo-', 'Apocrypha ').replace(' v', ' ').replace(' p', ' Part ').replace('-c', ', Chapter ');
          } else if (key.includes('data-versions-info-dropdowns')) {
            cleanedKey = "Dropdown Data"
          } else if (key.includes('data-versions-info-info')) {
            cleanedKey = "Information Data"
          }
          else if (key.includes('data-versions-ssc')) {
            cleanedKey = key.replace('data-versions-ssc-', 'Seven Shadow Chronicles ').replace(' v', ' ').replace(' p', ' Part ').replace('-c', ', Chapter ');
          }
          else {
            cleanedKey = key.replace('data-versions-', '');
          }
          cleanedData.set(key, { 'cleanedKey': cleanedKey, 'value': value });
        });

        setVersionValues(cleanedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // Empty dependency array to run once on component mount

  useEffect(() => {
    async function fetchVersion() {
      try {
        const storedVersionData = sessionStorage.getItem('versionData');
        if (storedVersionData) {
          const parsedData = JSON.parse(storedVersionData);
          const currentTime = Date.now();
          const expirationTime = 5 * 60 * 1000; // Set expiration to 5 minutes

          if (parsedData.timestamp && currentTime - parsedData.timestamp < expirationTime) {
            // Data is still valid, use it
            setVersionData(parsedData.data);
          } else {
            // Fetch new data
            const data = await fetchVersionData(versionData);
            setVersionData(data);
            sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: currentTime }));
          }
        } else {
          // Fetch data if not found in session storage
          const data = await fetchVersionData(versionData);
          setVersionData(data);
          sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: Date.now() }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setVersionLoading(false);
      }
    }

    fetchVersion();
  }, []); // Empty dependency array to run once on component mount


  if (loading || versionLoading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  if (!versionValues.size) {
    return <div>No data available</div>; // Display a message if no data is available
  }

  let correctOrder = [];
  let correctKeys = [];

  for (let i = 1; i <= 6; i++) {
    correctOrder.push(`Light Novel ${i}`)
    correctKeys.push(`ln_v${i}`)
  }

  for (let i = 1; i <= 8; i++) {
    correctOrder.push(`Web Novel ${i}`);
    correctKeys.push(`wn_${i}`)
  }

  for (let i = 1; i <= 20; i++) {
    correctOrder.push(`Anime Season 1, Episode ${i}`);
    correctKeys.push(`an_s1_e${i}`)
  }

  for (let i = 1; i <= 12; i++) {
    correctOrder.push(`Anime Season 2, Episode ${i}`);
    correctKeys.push(`an_s2_e${i}`)
  }

  correctOrder.push('Kage-Jitsu!');
  correctKeys.push(`an_s101`)
  correctOrder.push('Kage-Jitsu! 2nd');
  correctKeys.push(`an_s102`)

  for (let i = 1; i <= 15; i++) {
    correctOrder.push(`Seven Shadow Chronicles Part 1, Chapter 1-${i}`);
    correctKeys.push(`ssc_p1_c1-${i}`)
  }

  for (let i = 1; i <= 13; i++) {
    correctOrder.push(`Seven Shadow Chronicles Part 2, Chapter 2-${i}`);
    correctKeys.push(`ssc_p2_c2-${i}`)
  }

  for (let i = 1; i <= 4; i++) {
    correctOrder.push(`Seven Shadow Chronicles Part 3, Chapter 3-${i}`);
    correctKeys.push(`ssc_p3_c3-${i}`)
  }

  for (let [key, value] of Object.entries(ESMAP)) {
    correctOrder.push(value)
    correctKeys.push(key)
  }

  for (let i = 1; i <= 1; i++) {
    correctOrder.push(`Apocrypha Part 1, Chapter 1-${i}`);
    correctKeys.push(`apo_p1_c1-${i}`)
  }

  correctOrder.push(`Dropdown Data`);
  correctKeys.push(`info-dropdowns`)

  correctOrder.push(`Information Data`);
  correctKeys.push(`info-info`)

  const validKeys = [...versionValues].map(([key, value]) => { return value.cleanedKey })


  let finalVersionData = [...versionValues].map(([key, value]) => {
    let dataValue = -1;
    if (key.includes('data-versions-an')) {
      dataValue = versionData['an'][key.replace('data-versions-an', '').split("-")[1]]
    } else if (key.includes('data-versions-wn')) {
      dataValue = versionData['wn'][key.replace('data-versions-wn', '').split("-")[1]]
    } else if (key.includes('data-versions-ln')) {
      dataValue = versionData['ln'][key.replace('data-versions-ln', '').split("-")[1]]
    } else if (key.includes('data-versions-info-dropdowns')) {
      dataValue = versionData['info']['dropdowns']
    } else if (key.includes('data-versions-info-info')) {
      dataValue = versionData['info']['info']
    } else if (key.includes('data-versions-ssc')) {
      dataValue = key.replace('data-versions-ssc-', '');
      let [start, end] = dataValue.split('c')
      dataValue = versionData['ssc'][`${start.replace('-', '')}_c${end}`]
    } else if (key.includes('data-versions-es')) {
      dataValue = versionData['es'][key.replace('data-versions-es-', '')]
    } else if (key.includes('data-versions-apo')) {
      dataValue = key.replace('data-versions-apo-', '');
      let [start, end] = dataValue.split('c')
      dataValue = versionData['apo'][`${start.replace('-', '')}_c${end}`]
    }
    return { 'key': key, 'value': value, 'dataValue': dataValue }
  })


  const pairedDicts = correctOrder.map((value, index) => ({ name: value, key: correctKeys[index] }));
  for (const missingValue of pairedDicts) {
    let dataValue = -1;
    let key = missingValue.key;
    if (!validKeys.includes(missingValue.name)) {
      if (missingValue.key.includes('ln')) {
        dataValue = versionData['ln'][key.split("_")[1]];
      } else if (missingValue.key.includes('wn')) {
        dataValue = versionData['wn'][key.split("_")[1]];
      } else if (missingValue.key.includes('an_')) {
        if (missingValue.key.includes('s101')) {
          dataValue = versionData['an']['s101'];
        } else if (missingValue.key.includes('s102')) {
          dataValue = versionData['an']['s102'];
        } else {
          dataValue = versionData['an'][`${key.split("_")[1]}_${key.split("_")[2]}`];
        }

      } else if (missingValue.key.includes('info-dropdowns')) {
        dataValue = versionData['info']['dropdowns'];
      } else if (missingValue.key.includes('info-info')) {
        dataValue = versionData['info']['info'];
      } else if (missingValue.key.includes('ssc_')) {
        let [start, end] = missingValue.key.replace('ssc_', '').split('c')
        dataValue = versionData['ssc'][`${start.replace('-', '')}c${end}`]
      } else if (missingValue.key.includes('apo_')) {
        let [start, end] = missingValue.key.replace('apo_', '').split('c')
        dataValue = versionData['apo'][`${start.replace('-', '')}c${end}`]
      } else {
        dataValue = versionData['es'][missingValue.key]
      }
      finalVersionData.push({
        key: key,
        value: { cleanedKey: missingValue.name, value: 'N/A' },
        dataValue: dataValue
      });
    }
  }




  return (
    <div className="settings-page">
      <h2>"Named Characters"</h2>
      <h2>Versions</h2>
      <div className="settings-content">
        <table className="settings-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Local Version</th>
              <th>Cloud Version</th>
              {/* Add more table headers if needed */}
            </tr>
          </thead>
          <tbody>
            {finalVersionData.sort((a, b) => {
              let valueComparisonA = a.dataValue - a.value['value'];
              let valueComparisonB = b.dataValue - b.value['value'];
              if (valueComparisonA !== valueComparisonB) {
                return valueComparisonB - valueComparisonA
              }


              let aIndex = correctOrder.indexOf(a.value['cleanedKey']);
              let bIndex = correctOrder.indexOf(b.value['cleanedKey']);

              return aIndex - bIndex;

            }).map(({ key, value, dataValue }) => (
              <tr key={key}>
                <td>{value['cleanedKey']}</td>
                <td>{value['value']}</td>
                <td className={dataValue > value['value'] || value['value'] === 'N/A' ? 'red-text' : ''}>{dataValue}</td>
                {/* Add more table cells for other data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SettingsPage;
