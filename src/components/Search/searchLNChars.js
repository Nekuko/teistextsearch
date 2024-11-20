export function searchLNChars(keys, text, keywords, nameMap, characters = [], caseSensitive = false, exactMatch = false, regex = false, namedActive = false, namedCharacters = []) {
  // Initialize an empty object to hold the results
  let results = {};

  // Iterate over the keys
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    // Split the key into its components
    let [medium, volume, chapter] = key.split('_');

    // Get the list of sentences for this key
    let sentences = text[medium][volume][chapter];

    // Filter the sentences based on the keywords and character names
    let filteredSentences = [];
    sentences.forEach(sentence => {
      let fullSentence = caseSensitive ? sentence.text : sentence.text.toLowerCase();
      let rangesToCheck = [];

      sentence.characters.forEach((character) => {
        const { start, end } = character;
        const substring = fullSentence.substring(start, end + 1).trim();
        character.substring = substring;
        character.match = false;

      });

      rangesToCheck = Object.values(sentence.characters);
      for (let range of rangesToCheck) {
        let rangeMatch = true;
        let sentenceToCheck = range.substring;
        if (regex) {
          const regexToTest = new RegExp(keywords[0]);
          rangeMatch = regexToTest.test(sentenceToCheck);
        } else {
          for (let keyword of keywords) {
            let keywordToCheck = caseSensitive ? keyword : keyword.toLowerCase();
            if (exactMatch) {
              // If exact match is required, check if the sentence contains the keyword as a whole word
              let regex = new RegExp(`\\b${keywordToCheck}\\b`);
              if (!regex.test(sentenceToCheck)) {
                rangeMatch = false;
                break;
              }
            } else {
              // If exact match is not required, check if the sentence includes the keyword
              if (!sentenceToCheck.includes(keywordToCheck)) {
                rangeMatch = false;
                break;
              }
            }
          }
        }
        if (keywords.length === 0) {
          rangeMatch = true;
        }
        range.match = rangeMatch;
      }

      const anyMatch = rangesToCheck.some(range => range.match);

      if (anyMatch && namedActive && characters.length === 0) {
        let characterFound = false;
        for (let character of namedCharacters) {
          let characterToCheck = nameMap[character] ? nameMap[character].map(name => name.toLowerCase()) : [`${character.toLowerCase()}`];
          if (nameMap[`${character} (All)`]) {
            characterToCheck = nameMap[`${character} (All)`].map(name => name.toLowerCase());
          }
          for (let checkCharacter of characterToCheck) {
            for (let range of rangesToCheck) {
              if (checkCharacter.name_variant === range.name_variant && checkCharacter.name === range.name) {
                characterFound = true;
                break;
              }
              if (characterFound) {
                break;
              }
            }
            if (characterFound) {
              break;
            }

          }
        }
        if (characterFound) {
          sentence.characters = rangesToCheck;
          filteredSentences.push(sentence);
        }
      } else if (anyMatch && characters.length > 0) {
        let characterFound = false;
        for (let character of characters) {
          let characterToCheck = nameMap[character.name_variant] ? nameMap[character.name_variant].map(name => ({
            name: character.name,
            name_variant: name
          })) : [
            { name: character.name, name_variant: character.name_variant }
          ];

          if (character.name.includes("(All)")) {
            if (nameMap[character.name]) {
              characterToCheck = nameMap[character.name].map(name => ({
                name: character.name.replace(" (All)", ""),
                name_variant: name
              }))
            }

          }

          for (let checkCharacter of characterToCheck) {
            for (let range of rangesToCheck) {
              if (checkCharacter.name === range.name && checkCharacter.name_variant === range.name_variant) {
                characterFound = true;
                break;
              }
            }
            if (characterFound) {
              break;
            }
          }
          if (characterFound) {
            break;
          }
        }

        if (characterFound) {
          sentence.characters = rangesToCheck;
          filteredSentences.push(sentence);
        }
      } else if (anyMatch) {
        sentence.characters = rangesToCheck;
        filteredSentences.push(sentence);
      }
    });

    // Add the filtered sentences to the results only if there are matches
    if (filteredSentences.length > 0) {
      if (characters.length > 0) {
        for (let characterMap of characters) {
          let characterToCheck = nameMap[characterMap.name_variant] ?
            nameMap[characterMap.name_variant].map(name => ({
              name: characterMap.name,
              name_variant: name
            })) : [
              { name: characterMap.name, name_variant: characterMap.name_variant }
            ];

          let characterSentences = filteredSentences.filter(sentence => {
            return characterToCheck.some(name => {
              return sentence.characters.some(range =>
                (range.name === name.name && range.name_variant === name.name_variant) ||
                (range.name_variant === name.name_variant && range.match)
              );
            });
          });

          let character = characterMap.name_variant;

          if (characterSentences.length > 0) {
            if (!results[character]) {
              results[character] = { count: 0, mediums: {} };
            }
            if (!results[character].mediums[medium]) {
              results[character].mediums[medium] = { count: 0, volumes: {} };
            }
            if (!results[character].mediums[medium].volumes[volume]) {
              results[character].mediums[medium].volumes[volume] = { count: 0, chapters: {} };
            }
            results[character].count += characterSentences.length;
            results[character].mediums[medium].count += characterSentences.length;
            results[character].mediums[medium].volumes[volume].count += characterSentences.length;
            results[character].mediums[medium].volumes[volume].chapters[chapter] = {
              sentences: characterSentences,
              count: characterSentences.length
            };
          }
        }
      } else {
        if (!results[medium]) {
          results[medium] = { count: 0, volumes: {} };
        }
        if (!results[medium].volumes[volume]) {
          results[medium].volumes[volume] = { count: 0, chapters: {} };
        }
        results[medium].count += filteredSentences.length;
        results[medium].volumes[volume].count += filteredSentences.length;
        results[medium].volumes[volume].chapters[chapter] = {
          sentences: filteredSentences,
          count: filteredSentences.length
        };
      }
    }

  }


  return results;
}
