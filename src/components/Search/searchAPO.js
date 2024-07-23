export function searchAPO(keys, text, keywords, nameMap, characters = [], caseSensitive = false, exactMatch = false, namedActive = false, namedCharacters = []) {
    // Initialize an empty object to hold the apoResults
    let apoResults = {};
  
    // Initialize a counter for the total number of matches
    let totalMatches = 0;
  
    // Iterate over the keys
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
  
      // Split the key into its components
      let [medium, part, chapter, episode] = key.split('_');
  
      // Get the list of sentences for this key
      let sentences = text[medium][part][chapter][episode];
  
      // Filter the sentences based on the keywords and character names
      let filteredSentences = sentences.filter(sentence => {
        let sentenceToCheck = caseSensitive ? sentence.subtitle : sentence.subtitle.toLowerCase();
        let allKeywordsFound = keywords.length === 0 ? true : false;
        for (let keyword of keywords) {
          let keywordToCheck = caseSensitive ? keyword : keyword.toLowerCase();
          if (exactMatch) {
            // If exact match is required, check if the sentence contains the keyword as a whole word
            let regex = new RegExp(`\\b${keywordToCheck}\\b`);
            if (regex.test(sentenceToCheck)) {
              allKeywordsFound = true;
              break;
            }
          } else {
            // If exact match is not required, check if the sentence includes the keyword
            if (sentenceToCheck.includes(keywordToCheck)) {
              allKeywordsFound = true;
              break;
            }
          }
        }
        if (allKeywordsFound && namedActive && characters.length === 0) {
          let characterFound = true;
          for (let character of namedCharacters) {
            let characterToCheck = character.toLowerCase();
            if (characterToCheck === sentence.name_variant.toLowerCase()) {
              characterFound = false;
              
              break;
            }
          }
          if (!characterFound) {
            totalMatches++;
            return true;
          }
        } else if (allKeywordsFound && characters.length > 0) {
          let characterFound = false;
          for (let character of characters) {
            let characterToCheck = nameMap[character] ? nameMap[character].map(name => name.toLowerCase()) : [character.toLowerCase()];
            for (let checkCharacter of characterToCheck) {
              if (checkCharacter === sentence.name_variant.toLowerCase()) {
                characterFound = true;
                break;
              }
            }

          }
          if (characterFound) {
            totalMatches++;
            return true;
          }
        } else if (allKeywordsFound) {
          totalMatches++;
          return true;
        }
        return false;
      });
  
      // Add the filtered sentences to the apoResults only if there are matches
      if (filteredSentences.length > 0) {
        if (characters.length > 0) {
          for (let character of characters) {
            let characterToCheck = nameMap[character] ? nameMap[character].map(name => name) : [character];
            let characterSentences = filteredSentences.filter(sentence => characterToCheck.some(name => sentence.name_variant === name));
      
            if (characterSentences.length > 0) {
              if (!apoResults[character]) {
                apoResults[character] = { count: 0, mediums: {} };
              }
              if (!apoResults[character].mediums[medium]) {
                apoResults[character].mediums[medium] = { count: 0, parts: {} };
              }
              if (!apoResults[character].mediums[medium].parts[part]) {
                apoResults[character].mediums[medium].parts[part] = { count: 0, chapters: {} };
              }
              if (!apoResults[character].mediums[medium].parts[part].chapters[chapter]) {
                apoResults[character].mediums[medium].parts[part].chapters[chapter] = { count: 0, episodes: {} };
              }
              apoResults[character].count += characterSentences.length;
              apoResults[character].mediums[medium].count += characterSentences.length;
              apoResults[character].mediums[medium].parts[part].count += characterSentences.length;
              apoResults[character].mediums[medium].parts[part].chapters[chapter].count += characterSentences.length;
              apoResults[character].mediums[medium].parts[part].chapters[chapter].episodes[episode] = {
                sentences: characterSentences,
                count: characterSentences.length
              };
            }
          }
        } else {
          if (!apoResults[medium]) {
            apoResults[medium] = { count: 0, parts: {} };
          }
          if (!apoResults[medium].parts[part]) {
            apoResults[medium].parts[part] = { count: 0, chapters: {} };
          }
          if (!apoResults[medium].parts[part].chapters[chapter]) {
            apoResults[medium].parts[part].chapters[chapter] = { count: 0, episodes: {} };
          }
          apoResults[medium].count += filteredSentences.length;
          apoResults[medium].parts[part].count += filteredSentences.length;
          apoResults[medium].parts[part].chapters[chapter].count += filteredSentences.length;
          apoResults[medium].parts[part].chapters[chapter].episodes[episode] = {
            sentences: filteredSentences,
            count: filteredSentences.length
          };
        }
      }
  
      // Log the progress
      console.log(`Progress: ${((i + 1) / keys.length * 100).toFixed(2)}%`);
    }
  
    // Log the total number of matches
    console.log(`Total matches: ${totalMatches}`);
  
    // Convert the apoResults to a JSON string
    let jsonResults = JSON.stringify(apoResults);
    console.log(jsonResults)
    return apoResults;
  }
  