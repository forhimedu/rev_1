const listOfWords = [
    ["1s\u00b9", "H"],
    ["1s\u00b2", "He"],
    ["...2s\u00b9", "Li"],
    ["...2s\u00b2", "Be"],
    ["...2s\u00b22p\u00b9", "B"],
    ["...2s\u00b22p\u00b2", "N"],
    ["...2s\u00b22p\u00b3", "C"],
    ["...2s\u00b22p\u2074", "O"],
    ["...2s\u00b22p\u2075", "F"],
    ["...2s\u00b22p\u2076", "Ne"],
    ["...3s\u00b9", "Na"],
    ["...3s\u00b2", "Mg"],
    ["...3s\u00b23p\u00b9", "Al"],
    ["...3s\u00b23p\u00b2", "Si"],
    ["...3s\u00b23p\u00b3", "P"],
    ["...3s\u00b23p\u2074", "S"],
    ["...3s\u00b23p\u2075", "Cl"],
    ["...3s\u00b23p\u2076", "Ar"],
    ["...4s\u00b9", "K"],
    ["...4s\u00b2", "Ca"],
    ["...4s\u00b23d\u00b9", "Sc"],
    ["...4s\u00b23d\u00b2", "Ti"],
    ["...4s\u00b23d\u00b3", "V"],
    ["...4s\u00b93d\u2075", "Cr"],
    ["...4s\u00b23d\u2075", "Mn"],
    ["...4s\u00b23d\u2076", "Fe"],
    ["...4s\u00b23d\u2077", "Co"],
    ["...4s\u00b23d\u2078", "Ni"],
    ["...4s\u00b93d\u00b9\u2070", "Cu"],
    ["...4s\u00b23d\u00b9\u2070", "Zn"],
    ["...4s\u00b23d\u00b9\u20704p\u00b9", "Ga"],
    ["...4s\u00b23d\u00b9\u20704p\u00b2", "Ge"],
    ["...4s\u00b23d\u00b9\u20704p\u00b3", "As"],
    ["...4s\u00b23d\u00b9\u20704p\u2074", "Se"],
    ["...4s\u00b23d\u00b9\u20704p\u2075", "Br"],
    ["...4s\u00b23d\u00b9\u20704p\u2076", "Kr"],
    ["...5s\u00b9", "Rb"],
    ["...5s\u00b2", "Sr"],
    ["...5s\u00b24d\u00b9", "Y"],
    ["...5s\u00b24d\u00b2", "Zr"],
    ["...5s\u00b24d\u00b3", "Nb"],
    ["...5s\u00b94d\u2075", "Mo"],
    ["...5s\u00b24d\u2075", "Tc"],
    ["...5s\u00b24d\u2076", "Ru"],
    ["...5s\u00b24d\u2077", "Rh"],
    ["...5s\u00b24d\u2078", "Pd"],
    ["...5s\u00b94d\u00b9\u2070", "Ag"],
    ["...5s\u00b24d\u00b9\u2070", "Cd"],
    ["...5s\u00b24d\u00b9\u20705p\u00b9", "In"],
    ["...5s\u00b24d\u00b9\u20705p\u00b2", "Sn"],
    ["..ns\u00b9", "IA, I топ, I негізгі топша"],
    ["..ns\u00b9", "IIA, II топ, II негізгі топша"],
    ["..ns\u00b9", "IA, I топ, I негізгі топша"],
    ["...ns\u00b2np\u00b9", "3A, 3 негізгі топша, 13 топ"],
    ["...ns\u00b2np\u00b2", "4A, 4 негізгі топша, 14 топ"],
    ["...ns\u00b2np\u00b3", "5A, 5 негізгі топша, 15 топ"],
    ["...ns\u00b2np\u2074", "6A, 6 негізгі топша, 16 топ"],
    ["...ns\u00b2np\u2075", "7A, 7 негізгі топша, 17 топ"],
    ["...ns\u00b2np\u2076", "8A, 8 негізгі топша, 18 топ"],
    ["...ns\u00b2(n-1)d\u00b9", "3B, 3 қосымша топша, 3 топ"],
    ["...ns\u00b2(n-1)d\u00b2", "4B, 4 қосымша топша, 4 топ"],
    ["...ns\u00b2(n-1)d\u00b3", "5B, 5 қосымша топша, 5 топ"],
    ["...ns\u00b9(n-1)d\u2075", "6B, 6 қосымша топша, 6 топ"],
    ["...ns\u00b2(n-1)d\u2075", "7B, 7 қосымша топша, 7 топ"],
    ["...ns\u00b2(n-1)d\u2076", "8B, 8 қосымша топша, 8 топ"],
    ["...ns\u00b2(n-1)d\u2077", "8B, 8 қосымша топша, 9 топ"],
    ["...ns\u00b2(n-1)d\u2078", "8B, 8 қосымша топша, 10 топ"],
    ["...ns\u00b9(n-1)d\u00b9\u2070", "1B, 1 топ қосымша, 11 топ"],
    ["...ns\u00b2(n-1)d\u00b9\u2070", "2B, 2 топ қосымша, 12 топ"],


  ]


function getRandomArrays(arr, numArrays) {
    // Shuffle the input array to randomize the selection
    const shuffled = arr.sort(() => 0.5 - Math.random());
    // Get sub-array of first numArrays elements after shuffling
    const selectedArrays = shuffled.slice(0, numArrays);
    return selectedArrays;
}






let words = [];
let definitions = [];
let score = 0;
let isPlaying = false;
let matchedWords = [];



// Create a map of Spanish words to English definitions


function startGame() {
  let reviewContainer = document.getElementById('review-container');
  reviewContainer.innerHTML = "";
  reviewContainer.style.display = "none";
  const wordsData = getRandomArrays(listOfWords, 10);
  matchedWords = [...wordsData];
  if (isPlaying) return; // Prevent starting a new game while one is already in progress
  const wordMap = new Map(wordsData);


  isPlaying = true;
  score = 0;
  document.getElementById('score').textContent = score;
  document.getElementById('play-again-button').disabled = true;
  document.getElementById('message-container').textContent = "";

  // Shuffle the words data
  wordsData.sort(() => Math.random() - 0.5);

  // Select 10 random words (Spanish) and definitions (English)
  words = wordsData.slice(0, 10).map(word => word[0]);
  definitions = wordsData.slice(0, 10).map(word => word[1]);

  // Shuffle the definitions (English)
  definitions.sort(() => Math.random() - 0.5);

  // Display words and definitions
  const wordsContainer = document.getElementById('words-container');
  const definitionsContainer = document.getElementById('definitions-container');

  wordsContainer.innerHTML = "";
  definitionsContainer.innerHTML = "";

  words.forEach((word, index) => {
    const wordElement = document.createElement('span');
    wordElement.textContent = word;
    wordElement.setAttribute('draggable', true);
    wordElement.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', word); // Use the Spanish word itself
    });
    wordsContainer.appendChild(wordElement);
  });

  definitions.forEach((definition, index) => {
    const definitionElement = document.createElement('span');
    definitionElement.textContent = definition;
    definitionElement.addEventListener('dragover', (event) => {
      event.preventDefault(); // Allow dropping
    });
    definitionElement.addEventListener('drop', (event) => {
      const draggedWord = event.dataTransfer.getData('text'); // Get the dragged Spanish word

      // Find the index of the matching word in the words array
      const wordIndex = words.findIndex(word => wordMap.get(word) === definition);

      // Check if the dragged word matches the definition and wordIndex was found
      if (wordIndex !== -1 && wordMap.get(draggedWord) === definition) {
        score++;
        document.getElementById('score').textContent = score;
        // Ensure the word element exists before removing
        const wordElementToRemove = wordsContainer.children[wordIndex];
        if (wordElementToRemove) {
          wordsContainer.removeChild(wordElementToRemove);
        } else {
          console.warn("Word element already removed or invalid index.");
        }

        // Remove the matching definition element from the definitions container
        definitionsContainer.removeChild(definitionElement);

        definitionElement.style.backgroundColor = 'green'; // This line might not be needed anymore

        // Update the wordMap to reflect the removed word
        wordMap.delete(draggedWord);

        // Update the words array (optional)
        words.splice(wordIndex, 1); // Remove the matched word from the array

        if (wordsContainer.children.length === 0) {
          gameOver();
        }
      } else {
        definitionElement.style.backgroundColor = '#ff1d58';
        score--;
        document.getElementById('score').textContent = score;
      }
    });
    definitionsContainer.appendChild(definitionElement);
  });
}
// function gameOver() {
//   isPlaying = false;
//   document.getElementById('play-again-button').disabled = false;
//   document.getElementById('message-container').textContent = `Songy upay ${score}.`;
// }


function gameOver() {
  isPlaying = false;
  // Use the existing #review-container element if already created
  let reviewContainer = document.getElementById('review-container');
  if (!reviewContainer) {
    reviewContainer = document.createElement('div');
    reviewContainer.id = 'review-container';
    document.body.appendChild(reviewContainer);
  }
  console.log(matchedWords);
  // Clear existing review elements before adding new ones
  reviewContainer.innerHTML = "";
  // matchedWords.forEach((word, index) => {
  //   const reviewElement = document.createElement('div');
  //   reviewElement.textContent = word + " - " + definitions[index]; // Use definitions array
  //   reviewContainer.appendChild(reviewElement);
  // });


  matchedWords.forEach(pair => {
    const wordPairDiv = document.createElement('div');
    wordPairDiv.classList.add('word-pair'); // Add a class for styling
  
    // Create span elements for each word
    const formulas = document.createElement('div');
    formulas.textContent = pair[0];
    formulas.classList.add('formula-word'); // Add a class for styling
  
    const names = document.createElement('div');
    names.textContent = pair[1];
    names.classList.add('name-word'); // Add a class for styling
  
    // Append spans to the div in desired order
    wordPairDiv.appendChild(names);
    wordPairDiv.appendChild(formulas);
  
    // Append the word pair div to the container
    reviewContainer.appendChild(wordPairDiv);
  });

  // Show the review container (make sure it's visible)
  reviewContainer.style.display = 'flex'; // Assuming it's hidden initially

  // Use the existing play-again-button instead of creating a new one
  const restartButton = document.getElementById('play-again-button');
  restartButton.disabled = false; // Enable the button
  matchedWords = [];
  // Optionally, set different text for the button:
  // restartButton.textContent = 'Review & Restart';
  
}


// Event listener for play again button
document.getElementById('play-again-button').addEventListener('click', startGame);

// Start the game on page load
startGame();
