import React, { useState, useEffect } from 'react';
import './SettingsPage.css'; // Import the CSS file
import { readVersions } from '../../utils/indexedDBFunctions';
import { ESMAP } from '../../esMap';
import { fetchVersionData, fetchInformationData, fetchLNData, fetchWNData, fetchANData, fetchDropdowns, fetchSSCData, fetchAPOData, fetchESData, fetchCharactersData } from '../../utils/firebaseFunctions';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let correctOrder = [];
let correctKeys = [];
function populateOrders() {
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

  correctOrder.push(`Character Data`);
  correctKeys.push(`info-characters`)

  correctOrder.push(`Dropdown Data`);
  correctKeys.push(`info-dropdowns`)

  correctOrder.push(`Information Data`);
  correctKeys.push(`info-info`)
}
populateOrders()

function SettingsPage() {
  const [versionValues, setVersionValues] = useState(new Map());
  const [versionData, setVersionData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState();
  const [updating, setUpdating] = useState(false);



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
          } else if (key.includes('data-versions-info-characters')) {
            cleanedKey = "Character Data"
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

        const storedVersionData = sessionStorage.getItem('versionData');
        let verisonDataTemp;
        if (storedVersionData) {
          const parsedData = JSON.parse(storedVersionData);
          const currentTime = Date.now();
          const expirationTime = 5 * 60 * 1000; // Set expiration to 5 minutes

          if (false) {
            // Data is still valid, use it
            setVersionData(parsedData.data);
            verisonDataTemp = parsedData.data;
          } else {
            // Fetch new data
            const data = await fetchVersionData(versionData);
            setVersionData(data);
            sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: currentTime }));
            verisonDataTemp = data;
          }
        } else {
          // Fetch data if not found in session storage
          const data = await fetchVersionData(versionData);
          setVersionData(data);
          sessionStorage.setItem('versionData', JSON.stringify({ data, timestamp: Date.now() }));
          verisonDataTemp = data;
        }

        const validKeys = [...cleanedData].map(([key, value]) => { return value.cleanedKey })

        let finalVersionData = [...cleanedData].map(([key, value]) => {
          let dataValue = -1;
          if (key.includes('data-versions-an')) {
            dataValue = verisonDataTemp['an'][key.replace('data-versions-an', '').split("-")[1]]
          } else if (key.includes('data-versions-wn')) {
            dataValue = verisonDataTemp['wn'][key.replace('data-versions-wn', '').split("-")[1]]
          } else if (key.includes('data-versions-ln')) {
            dataValue = verisonDataTemp['ln'][key.replace('data-versions-ln', '').split("-")[1]]
          } else if (key.includes('data-versions-info-dropdowns')) {
            dataValue = verisonDataTemp['info']['dropdowns']
          } else if (key.includes('data-versions-info-info')) {
            dataValue = verisonDataTemp['info']['info']
          } else if (key.includes('data-versions-info-characters')) {
            dataValue = verisonDataTemp['info']['characters']
          } else if (key.includes('data-versions-ssc')) {
            dataValue = key.replace('data-versions-ssc-', '');
            let [start, end] = dataValue.split('c')
            dataValue = verisonDataTemp['ssc'][`${start.replace('-', '')}_c${end}`]
          } else if (key.includes('data-versions-es')) {
            dataValue = verisonDataTemp['es'][key.replace('data-versions-es-', '')]
          } else if (key.includes('data-versions-apo')) {
            dataValue = key.replace('data-versions-apo-', '');
            let [start, end] = dataValue.split('c')
            dataValue = verisonDataTemp['apo'][`${start.replace('-', '')}_c${end}`]
          }
          return { 'key': key, 'value': value, 'dataValue': dataValue }
        })



        const pairedDicts = correctOrder.map((value, index) => ({ name: value, key: correctKeys[index] }));
        for (const missingValue of pairedDicts) {
          let dataValue = -1;
          let key = missingValue.key;
          if (!validKeys.includes(missingValue.name)) {
            if (missingValue.key.includes('ln')) {
              dataValue = verisonDataTemp['ln'][key.split("_")[1]];
            } else if (missingValue.key.includes('wn')) {
              dataValue = verisonDataTemp['wn'][key.split("_")[1]];
            } else if (missingValue.key.includes('an_')) {
              if (missingValue.key.includes('s101')) {
                dataValue = verisonDataTemp['an']['s101'];
              } else if (missingValue.key.includes('s102')) {
                dataValue = verisonDataTemp['an']['s102'];
              } else {
                dataValue = verisonDataTemp['an'][`${key.split("_")[1]}_${key.split("_")[2]}`];
              }

            } else if (missingValue.key.includes('info-dropdowns')) {
              dataValue = verisonDataTemp['info']['dropdowns'];
            } else if (missingValue.key.includes('info-info')) {
              dataValue = verisonDataTemp['info']['info'];
            } else if (missingValue.key.includes('info-characters')) {
              dataValue = verisonDataTemp['info']['characters'];
            } else if (missingValue.key.includes('ssc_')) {
              let [start, end] = missingValue.key.replace('ssc_', '').split('c')
              dataValue = verisonDataTemp['ssc'][`${start.replace('-', '')}c${end}`]
            } else if (missingValue.key.includes('apo_')) {
              let [start, end] = missingValue.key.replace('apo_', '').split('c')
              dataValue = verisonDataTemp['apo'][`${start.replace('-', '')}c${end}`]
            } else {
              dataValue = verisonDataTemp['es'][missingValue.key]
            }
            finalVersionData.push({
              key: key,
              value: { cleanedKey: missingValue.name, value: 'N/A' },
              dataValue: dataValue
            });
          }
        }
        setTableData(finalVersionData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  if (!versionValues.size) {
    return <div>No data available</div>; // Display a message if no data is available
  }

  async function checkUpdates() {
    setUpdating(true);
    let oldTableData = JSON.parse(JSON.stringify(tableData))
    let newTableData = JSON.parse(JSON.stringify(tableData));
    for (const value of newTableData) {
      const oldValue = JSON.parse(JSON.stringify(value.dataValue));
      if (oldValue !== value.value.value) {
        value.dataValue = 999;
      }
    }
    setTableData(newTableData);
    for (const value of oldTableData) {
      const oldValue = JSON.parse(JSON.stringify(value.dataValue));
      try {
        if (oldValue !== value.value.value) {
          if (!value.key.includes('data-versions-')) {
            value.key = `data-versions-${value.key}`
          }
          if (value.key.includes('ln')) {
            await fetchLNData([`${value.key.replace('data-versions-', '').replace('ln-', 'ln_')}_c1`], versionData, setVersionData, null);
          } else if (value.key.includes('info-dropdowns')) {
            await fetchDropdowns(versionData, setVersionData);
          } else if (value.key.includes('wn')) {
            await fetchWNData([`${value.key.replace('data-versions-', '').replace('wn-', 'wn_')}_c1`], versionData, setVersionData, null);
          } else if (value.key.includes('an_')) {
            if (value.key.includes('s101')) {
              await fetchANData([`${value.key.replace('data-versions-', '').replace('an_', 'an_')}_e1`], versionData, setVersionData, null);
            } else if (value.key.includes('s102')) {
              await fetchANData([`${value.key.replace('data-versions-', '').replace('an_', 'an_')}_e1`], versionData, setVersionData, null);
            } else {
              await fetchANData([`${value.key.replace('data-versions-', '').replace('an_', 'an_')}`], versionData, setVersionData, null);
            }

          
          } else if (value.key.includes('info-info')) {
            await fetchInformationData(versionData, setVersionData);
          } else if (value.key.includes('info-characters')) {
            await fetchCharactersData(versionData, setVersionData);

          } else if (value.key.includes('ssc_')) {
            await fetchSSCData([`${value.key.replace('data-versions-', '').replace('ssc_', 'ssc_').replace('-c', '_c')}_e1`], versionData, setVersionData, null);

          } else if (value.key.includes('apo_')) {
            await fetchAPOData([`${value.key.replace('data-versions-', '').replace('apo_', 'apo_').replace('-c', '_c')}_e1`], versionData, setVersionData, null);

          } else {
            await fetchESData([`es_${value.key.replace('data-versions-', '')}_e1`], versionData, setVersionData, null);
          }
          value.dataValue = oldValue;
          value.value.value = oldValue;
        } else {
          value.dataValue = oldValue;
        }
      } catch (error) {
        console.error('Error fetching information:', error);
      }
    }
    setTableData(oldTableData);
    setUpdating(false);
  }


  return (
    <div className="settings-page">
      <h1 className='filters-header'>SETTINGS</h1>
      <div className="settings-content">
        <h1 className='settings-title'>"NAMED CHARACTERS"</h1>
        <h1 className='settings-title'>VERSIONS</h1>
        <div className='settings-table-content'>
          <table className="settings-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Local Version</th>
                <th>
                  Cloud Version{" "}
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    className={`settings-update ${updating ? 'rotate' : ''}`}
                    title='Check for updates'
                    onClick={() => {
                      checkUpdates();
                    }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.sort((a, b) => {
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
                  <td>{parseFloat(value['value'])}</td>
                  <td className={dataValue > value['value'] ? 'red-text' : ''}>
                    {dataValue === 999 ? (
                      <FontAwesomeIcon icon={faArrowsRotate} className='settings-update-blank' />
                    ) : (
                      parseFloat(dataValue)
                    )}
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
