export function searchWN(keys, text, keywords, caseSensitive = false, exactMatch = false) {
    // Initialize an empty object to hold the results
    let results = {};
  
    if (keywords.length === 0) {
        return {};
    }
  
    // Initialize a counter for the total number of matches
    let totalMatches = 0;
  
    // Iterate over the keys
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
  
      // Split the key into its components
      let [medium, volume, chapter] = key.split('_');
  
      // Get the list of sentences for this key
      let sentences = text[medium][volume][chapter];
  
      // Filter the sentences based on the keywords
      let filteredSentences = sentences.filter(sentence => {
        // If case sensitivity is turned off, convert the sentence and keywords to lowercase
        let sentenceToCheck = caseSensitive ? sentence : sentence.toLowerCase();
        let allKeywordsFound = true;
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
        if (allKeywordsFound) {
          totalMatches++;
          return true;
        }
        return false;
      });
  
      // Add the filtered sentences to the results only if there are matches
      if (filteredSentences.length > 0) {
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
  
      // Log the progress
      console.log(`Progress: ${((i + 1) / keys.length * 100).toFixed(2)}%`);
    }
  
    // Log the total number of matches
    console.log(`Total matches: ${totalMatches}`);
  
    // Convert the results to a JSON string
    let jsonResults = JSON.stringify(results);
  
    return results;
  }
  