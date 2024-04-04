const data = [
  ["стирол", "винилбензол"],
  ["о-ксилол", "1,2-диметилбензол"],
  ["п-ксилол", "1,4-диметилбензол"],
  ["м-ксилол", "1,3-диметилбензол"],
  ["кумол", "изоропилбензол"],
  ["толуол", "метилбензол"],
  ["тротил", "2,4,6-тринитротолуол"],
  ["циклопропан", "триметилен"],
  ["циклобутан", "тетраметилен"],
  ["циклопентан", "пентаметилен"],
  ["мезитилен", "1,3,5-триметилбензол"],
  ["анилин", "фениламин"],
  ["пирокатехин", "1,2-дигидроксибензол"],
  ["резорцин", "1,3-дигидроксибензол"],
  ["гидрохинон", "1,4-дигидроксибензол"],
  ["ацетон", "диметилкетон"],
  ["пикрин қышқылы", "2,4,6-тринитрофенол"],
  ["фенантрен", "./data/phenanthrene.png"],
  ["нафталин", "./data/naphtalene.png"],
  ["антрацен", "./data/antracene.png"],
  ["бензой қышқылы", "./data/benzoic_acid.png"],
  ["бензол", "./data/benzene.png"],
  ["аланин", "./data/alanine.png"],
  ["анилин", "./data/aniline.png"],
  ["цистеин", "./data/cysteine.png"],
  ["глицин", "./data/glycine.png"],
  ["кумол", "./data/kumol.png"],
  ["м-ксилол", "./data/m-xylene.png"],
  ["о-ксилол", "./data/o-xylene.png"],
  ["фенол", "./data/phenol.png"],
  ["полипропилен", "./data/polypropylene.png"],
  ["поливинилацетат", "./data/polyvinylacetate.png"],
  ["п-ксилол", "./data/p-xylene.png"],
  ["стирол", "./data/styrene.png"],
  ["тефлон", "./data/teflon.png"],


  ["стеарин қышқылы", "C\u2081\u2087H\u2083\u2085COOH"],
  ["пальмитин қышқылы", "С\u2081\u2085Н\u2083\u2081СООН"],
  ["пальмитин қышқылы", "CH\u2083(CH\u2082)\u2081\u2084COOH"],
  ["стеарин қышқылы", "CH\u2083(CH\u2082)\u2081\u2086COOH"],
  ["акрил қышқылы", "CH\u2082=CH–COOH"],
  ["олеин қышқылы", "С\u2081\u2087Н\u2083\u2083СООН "],
  ["линол қышқылы", "С\u2081\u2087Н\u2083\u2081СООН"],
  ["дивинил", "Бутадиен-1,3"],
  ["изобутан", "2-метилпропан"],
  ["изопрен", "2-метилбутадиен-1,3"],
  ["хлоропрен", "2-хлорбутадиен-1,3"],
  ["хлороформ", "трихлорметан"],
  ["о-крезол", "2-метилфенол"],
  ["м-крезол", "3-метилфенол"],
  ["п-крезол", "4-метилфенол"],
  ["май қышқылы","СН\u2083СН\u2082СН\u2082СООН"],
  ["валериан қышқылы","СН\u2083СН\u2082СН\u2082СН\u2082СООН "],
  ["капрон қышқылы","СН\u2083СН\u2082СН\u2082СН\u2082СН\u2082СООН"],
  ["энант қышқылы","СН\u2083СН\u2082СН\u2082СН\u2082СН\u2082CH\u2082СООН"],
  ["май қышқылы","С\u2083H\u2087СООН"],
  ["валериан қышқылы","C\u2084H\u2089СООН "],
  ["капрон қышқылы","C\u2085H\u2081\u2081СООН"],
  ["энант қышқылы","C\u2086H\u2081\u2083СООН"],
  ["қымыздық қышқылы","НООС-СООН"],
  ["дивинил","./data/divinyl.png"],
  ["этиленгликоль","./data/ethyleneglycol.png"],
  ["изобутан","./data/isobutane.png"],
  ["изопрен","./data/isoprene.png"],
  ["м-крезол","./data/m-cresole.png"],
  ["нитроглицерин","./data/nitroglycerine.png"],
  ["о-крезол","./data/o-cresole.png"],
  ["п-крезол","./data/p-cresole.png"],
  ["пикрин қышқылы","./data/picrin.png"],


];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


const question = document.querySelector('.question');
const answerId = document.getElementById('answer');
const points = document.querySelector('.points');
const rightAnswers = document.querySelector('.rightAnswer');
const nextBtn = document.querySelector('.nextBtn')
const submitBtn = document.querySelector('.submitBtn');
const giveUpBtn = document.querySelector('.giveUpBtn');
const answer = document.getElementById('answer');
const result = document.querySelector('.result');


function emptifyElement(a) {
  a.innerHTML = "";
}

function App() {
  let i = 0;
  let newArr = shuffleArray(data);
  let pickedQuestion = undefined;
  let answered = true;
  let pointsValue = 0;

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (answered == true) {
    result.classList.remove('lightcoral');
    result.classList.remove('lightgreen');
    question.classList.remove('lightcoral');
    question.classList.remove('lightgreen');
      emptifyElement(question);    
    if (i == newArr.length){
      newArr = shuffleArray(data);
      i=0;
    } 
    pickedQuestion = newArr[i];
    i++;
    if  (pickedQuestion[1][0] == '.') {
      const photo = document.createElement('img');
      photo.setAttribute('src', `${pickedQuestion[1]}`);
      question.appendChild(photo);
    }
    else {
    const questText = document.createElement('h4');
    questText.innerHTML = pickedQuestion[1];
    question.appendChild(questText);
    }
    answered = false;
  }
  })

  submitBtn.addEventListener('click', () => {
    if (answer.value.toLowerCase() == pickedQuestion[0]){
      question.classList.remove('lightcoral');
      question.classList.add('lightgreen');
      result.classList.remove('lightcoral');
      result.classList.add('lightgreen');
      if (answered == false ) {
        pointsValue++;
        points.innerHTML = pointsValue;
      }
      answered = true;
      
    } else {
      question.classList.remove('lightgreen');
      question.classList.add('lightcoral');
      result.classList.remove('lightgreen');
      result.classList.add('lightcoral');
      pointsValue--;
      points.innerHTML = pointsValue;
    }
  })

  giveUpBtn.addEventListener('click', () => {
    answer.value = pickedQuestion[0];
    if (answered == false) {
      pointsValue--;
      points.innerHTML = pointsValue;
    }
    answered = true;
    
  })


}

App();