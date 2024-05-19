// Слова для угадывания
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

// Выбор случайного слова
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Инициализация игры
function initGame() {
  const word = getRandomWord();
  const guessedLetters = [];
  let remainingGuesses = 6;

  // Функция для отображения текущего состояния слова
  function displayWord() {
    let display = '';
    for (let letter of word) {
      if (guessedLetters.includes(letter)) {
        display += letter;
      } else {
        display += '_';
      }
    }
    console.log(display);
  }

  // Функция для обработки ввода пользователя
  function handleGuess(letter) {
    if (guessedLetters.includes(letter)) {
      console.log('You already guessed that letter.');
      return;
    }

    guessedLetters.push(letter);

    if (word.includes(letter)) {
      console.log('Correct guess!');
    } else {
      remainingGuesses--;
      console.log(`Wrong guess! ${remainingGuesses} guesses remaining.`);
    }

    displayWord();

    if (remainingGuesses === 0) {
      console.log('Game over. You lost.');
      console.log(`The word was: ${word}`);
    } else if (!displayWord().includes('_')) {
      console.log('Congratulations! You won!');
    }
  }

  displayWord();

  // Обработка ввода пользователя
  document.addEventListener('keypress', (event) => {
    const letter = event.key.toLowerCase();
    handleGuess(letter);
  });
}

// Запуск игры
initGame();



/*
|ИГРА ВИСИЛИЦА|------------------------------------------------------------------------------------------------------------

let words = ["программа", "макака", "прекрасный", "оладушек"];
let word = words[Math.floor(Math.random() * words.length)];
let remainingLetters = word.length;
let answerArray = [];
let trs = 15;

   for (let i = 0; i<word.length; i++) {
       answerArray[i]="_";
   } 
   alert ("Добро пожаловать в игру «Висилица»!")

   while (remainingLetters > 0) {                                                
    alert("Загаданное слово: "+ answerArray.join(" "));                                                 
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.                  " + "Ходов осталось: " + trs);
    trs--; 
       if (guess===null || trs == 0) {                                                         
       alert("Игра окончена!"); break;
  
    }  else if (guess.length!== 1) {alert("Пожалуйста, введите только одну букву.");
    }  else {                                                                 
       for (let j=0; j<word.length; j++) {                                          
       if (word[j]===guess && answerArray[j]==="_"){                                                     
            answerArray[j]= guess;                                              
            remainingLetters--;                                                    
        }   
    } if (remainingLetters==0) {
    alert("Поздравляем! Вы отгадали слово «"+ word + "»!");}
    }   
   }
   
|ПЕРЕВОД ФРАЗЫ В СИМВОЛЬНЫЙ СТИЛЬ|------------------------------------------------------------------------------------------------------------
    
    Через цикл «for»:

var input = "javascript is awesome";
var output = "";
for (var x = 0; x<input.length; x++) {
if (input[x]==="a") {output +=4;}
else if (input [x]==="e") {output +="3";}
else if (input [x]==="i") {output +="1";}
else if (input [x]==="0") {output +="0";}
else (output += input[x])
} console.log (output);

Результат: j4v4scr1pt 1s 4w3som3
    
    Через цикл «while»

var input = "javascript is awesome";
var output = "";
var x = 0;
while (output.length<input.length) {
if (input[x]==="a") {output +=4;}
else if (input [x]==="e") {output +="3";}
else if (input [x]==="i") {output +="1";}
else if (input [x]==="0") {output +="0";}
else (output += input[x]); x++;
} console.log (output);

Результат: j4v4scr1pt 1s 4w3som3

|ГЕНЕРАТОР СЛУЧАЙНЫХ СТРОК|------------------------------------------------------------------------------------------------------------
    
    Через цикл «while»:

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString ="";
while (randomString.length<6) {randomString += alphabet[Math.floor(Math.random()*alphabet.length)];}
console.log (randomString);
    
Результат: набор из 6-ти букв состоящий из рандомных индексов переменной «alphabet».
    
    Через цикл «for»:

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString ="";
for (var x = 0; x<6; x++){randomString += alphabet[Math.floor(Math.random()*alphabet.length)];}
console.log (randomString);

Результат: набор из 6-ти букв состоящий из рандомных индексов переменной «alphabet».

|ИЗМЕНЕНИЕ ОБЪЕКТОВ МАССИВА|------------------------------------------------------------------------------------------------------------
    
    Через цикл «for»:

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (var x = "0"; x < animals.length; x++) {animals[x] += " - прекрасное животное."} console.log (animals);

Результат: [
    'Кот - прекрасное животное.',
     'Рыба - прекрасное животное.',
      'Лемур - прекрасное животное.',
       'Комодский варан - прекрасное животное.']

    Через цикл «while»:

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
var x = 0;
while (x<animals.length) {animals[x] +=" - прекрасное животное."; x++;} console.log (animals);

Результат: [
    'Кот - прекрасное животное.',
     'Рыба - прекрасное животное.',
      'Лемур - прекрасное животное.',
       'Комодский варан - прекрасное животное.']

|ВОЗВЕДЕНИЕ ЧИСЛА В СТЕПЕНЬ|------------------------------------------------------------------------------------------------------------
for (var x = "3"; x<10000; x=x*3) {console.log(x)};

Результат (разные степени цифры 3):
3 
9
27
81
243
729
2187
6561 

Примечание: Так как мы указали условие х<10000, цикл повторился 7 раз.

|ВОЗВЕДЕНИЕ ЧИСЛА В СТЕПЕНЬ|------------------------------------------------------------------------------------------------------------








*/