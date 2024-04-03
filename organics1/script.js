const listOfWords = [
["Түссіз, иіссіз газ, іс жүзінде сіда ерімейді, -164С кезінде сұйылады. \
Бұл табиғи газдың маңызды құрамбөлігі","метан"],
["Бұл зат жер астында таскөмір баяу ыдырағанда және көп мөлшерде \
шахталарда пайда болады","метан"],
["Бұл заттар еріткіштер және тоңазытқыш ретінде қолданылады","галогентуындылар"],
["Сәл тәтті иісі бар түссіз газ, ауадан аздап жеңіл, суда аз ериді","этилен"],
["Газға оңай айналатын сұйықтық, ол тез ұшып кететіндіктен қатты суытады. \
Сондықтан медицинада анестезия ретінде қолданылады","хлорэтан"],
["Суда ерімейтін, бірақ көптеген органикалық қосылыстарда жақсы еритін \
өзіне тән иісі бар тұтанғыш сұйық, улы зат. Көп мөлшері жүректі айнытып, \
басты айналдырады. Кейбір жағайда уланған адам өлiмге де душар болуы \
мүмкін. Бензол буы тері арқылы денеге сіңеді. Бензолды және толуолды \
созылмалы улану лейкемияны және қаназдықты тудырады. Күшті канцероген, \
қатерлі ісіктің пайда болуына және өсуіне әкеледі","бензол"],
["Өте улы зат! Оның ағзаға мөлшері адамды соқыт етуі немесе өлімге \
душар етуі мүмкін. Бұл заттың өзіне тән иісі бар, мөлдір сұйықтық, \
қайнау температурасы 64.5С.", "Метанол, метил спирті"],
["Түссіз, өзіне тән иісі бар, сумен кез-келген қатынаста араласатын \
сұйықтық. Қайнау температурасы 78.С", "этанол, этил спирті"],
["Түссіз тәтті дәмі бар, қайнау температурасы 198С болатын қоймалжың \
сұйықтық. Этиленгликоль суда жақсы ериді және кез-келген қатынаста сумен \
араласады. Нәтижесінде судың қату температурасын төмендетеді. Мысалы 60%-дық \
ерітіндісі -49С температурада қатады. Яғни антифриз қоспаларын жасауда \
қолданады.", "этиленгликоль"],
["Түссіз, шырын тәріздес, тәтті дәмі бар, су мен этанолда жақсы еритін зат \
Қайнау температурасы 290С, кез-келген қатынаста сумен араласады.", "глицерин"],
["Жеңіл қайнайтын (100.8С) өзіне тән өткір иісі бар сұйықтық. Теріге тиген \
қышқыл оны күйдіреді, оның буы тыныс алу мүшелерін күйдіреді. Суда жақсы \
ериді. Ол құмырсқаның улы бездерінде, қалақай өсімдігінде, қарағайдың \
қылқан жапырақтарында, тер мен зір құрамында болады.", "құмырсқа қышқылы"],
["Суда жақсы еритін, өткір иісті, түссіз сұйықтық. 5-9%-дық ерітіндісі \
асханалық сіркесуы, ал 70-80%-дық ерітіндісі сірке эссенциясы деп аталады. \
Құрамында спирті бар заттардың қышқылдық ашуы нәтижесінде түзіледі.", "сірке қышқылы"],
["Қатты кристалды зат, суда жақсы ериді, дәмі тәтті, балқу температурасы төмен", "глюкоза"],
["Ауыр металдардың (Hg2+, Pb2+, Cu2+, және т.б.) тұздары, концентрлі қышқылдар \
мен сілтілер, сондай ақ қыздыру, ультракүлгін сәулелер және гамма-сәулелер әсерінен \
нәруыз қүрысының бұзылуы", "денатурация"],
["", ""],
];

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
  const wordsData = getRandomArrays(listOfWords, 5);
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
  words = wordsData.slice(0, 5).map(word => word[0]);
  definitions = wordsData.slice(0, 5).map(word => word[1]);

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
