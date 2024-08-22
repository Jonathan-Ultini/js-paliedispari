const form = document.getElementById('gameForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userChoice = document.getElementById('scelta').value;
  const userNumber = parseInt(document.getElementById('userNumber').value);
  const computerNumber = generateRandomNumber(1, 5);
  const sum = userNumber + computerNumber;
  const resultElement = document.querySelector('#gameForm + #result');

  const isSumEven = isEven(sum);
  const result = isSumEven ? 'pari' : 'dispari';

  if (result === userChoice) {
    resultElement.textContent = `Hai vinto! Hai scelto ${userChoice}. Il tuo numero: ${userNumber}, Numero del computer: ${computerNumber}. Somma: ${sum} (${result}).`;
  } else {
    resultElement.textContent = `Hai perso! Hai scelto ${userChoice}. Il tuo numero: ${userNumber}, Numero del computer: ${computerNumber}. Somma: ${sum} (${result}).`;
  }
});