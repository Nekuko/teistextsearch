export function searchES(keys, text, keywords, nameMap, characters = [], caseSensitive = false, exactMatch = false, regex = false, namedActive = false, namedCharacters = []) {
    // Initialize an empty object to hold the results
    let results = {};

    // Iterate over the keys
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];

        // Split the key into its components
        let [medium, season, episode] = key.split('_');

        // Get the list of sentences for this key
        let sentences = text[medium][season][episode];

        // Filter the sentences based on the keywords and character names
        let filteredSentences = sentences.filter(sentence => {
            let sentenceToCheck = caseSensitive ? sentence.subtitle : sentence.subtitle.toLowerCase();
            let allKeywordsFound = true;
            if (regex) {
                const regexToTest = new RegExp(keywords[0]);
                allKeywordsFound = regexToTest.test(sentenceToCheck);
            } else {
                for (let keyword of keywords) {
                    let keywordToCheck = caseSensitive ? keyword : keyword.toLowerCase();
                    if (exactMatch) {
                        // If exact match is required, check if the sentence contains the keyword as a whole word
                        let regex = new RegExp(`\\b${keywordToCheck}\\b`);
                        if (!regex.test(sentenceToCheck)) {
                            allKeywordsFound = false;
                            break;
                        }
                    } else {
                        // If exact match is not required, check if the sentence includes the keyword
                        if (!sentenceToCheck.includes(keywordToCheck)) {
                            allKeywordsFound = false;
                            break;
                        }
                    }
                }
            }
            if (keywords.length === 0) {
                allKeywordsFound = true;
            }
            if (allKeywordsFound && namedActive && characters.length === 0) {
                let characterFound = false;
                for (let character of namedCharacters) {
                    let characterToCheck = nameMap[character] ? nameMap[character].map(name => name.toLowerCase()) : [`${character.toLowerCase()}`];
                    characterToCheck.push(character.toLowerCase())
                  if (nameMap[`${character} (All)`]) {
                    characterToCheck = nameMap[`${character} (All)`].map(name => name.toLowerCase());
                  }
        
                  for (let checkCharacter of characterToCheck) {
                    if (checkCharacter === sentence.name_variant.toLowerCase()) {
                      characterFound = true;
                      break;
                    }
                  }
                  if (characterFound) {
                    return true;
                  }
                }
                if (characterFound) {
                  return true;
                }
              } else if (allKeywordsFound && characters.length > 0) {
                let characterFound = false;
                for (let character of characters) {
                    let characterToCheck = nameMap[character] ? nameMap[character].map(name => name.toLowerCase()) : [`${character.toLowerCase()}`];
                    characterToCheck.push(character.toLowerCase())
                    if (nameMap[`${character} (All)`]) {
                        characterToCheck = nameMap[`${character} (All)`].map(name => name.toLowerCase());
                    }
                    for (let checkCharacter of characterToCheck) {
                        if (checkCharacter === sentence.name_variant.toLowerCase()) {
                            characterFound = true;
                            break;
                        }
                    }
                }
                if (characterFound) {
                    return true;
                }
            } else if (allKeywordsFound) {
                return true;
            }
            return false;
        });

        // Add the filtered sentences to the results only if there are matches
        if (filteredSentences.length > 0) {
            if (characters.length > 0) {
                for (let character of characters) {

                    let characterToCheck = nameMap[character] ? nameMap[character].map(name => name) : [character];
                    let characterSentences = filteredSentences.filter(sentence => characterToCheck.some(name => sentence.name_variant === name));
                    if (characterSentences.length > 0) {
                        if (!results[character]) {
                            results[character] = { count: 0, mediums: {} };
                        }
                        if (!results[character].mediums[medium]) {
                            results[character].mediums[medium] = { count: 0, seasons: {} };
                        }
                        if (!results[character].mediums[medium].seasons[season]) {
                            results[character].mediums[medium].seasons[season] = { count: 0, episodes: {} };
                        }
                        results[character].count += characterSentences.length;
                        results[character].mediums[medium].count += characterSentences.length;
                        results[character].mediums[medium].seasons[season].count += characterSentences.length;
                        results[character].mediums[medium].seasons[season].episodes[episode] = {
                            sentences: characterSentences,
                            count: characterSentences.length
                        };
                    }
                }
            } else {
                if (!results[medium]) {
                    results[medium] = { count: 0, seasons: {} };
                }
                if (!results[medium].seasons[season]) {
                    results[medium].seasons[season] = { count: 0, episodes: {} };
                }
                results[medium].count += filteredSentences.length;
                results[medium].seasons[season].count += filteredSentences.length;
                results[medium].seasons[season].episodes[episode] = {
                    sentences: filteredSentences,
                    count: filteredSentences.length
                };
            }
        }

    }

    return results;
}
