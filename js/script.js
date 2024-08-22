// 1. Seleziona il form con l'ID 'gameForm'.
const form = document.getElementById('gameForm');

// 2. Aggiunge un event listener al form per intercettare l'invio ('submit') del form.
form.addEventListener('submit', function (event) {

  // 3. Impedisce il comportamento predefinito del form, che sarebbe il ricaricamento della pagina.
  event.preventDefault();

  // 4. Ottiene la scelta dell'utente (pari o dispari) dal selettore con ID 'scelta'.
  const userChoice = document.getElementById('scelta').value;

  // 5. Ottiene e converte in intero il numero scelto dall'utente nel campo con ID 'userNumber'.
  const userNumber = parseInt(document.getElementById('userNumber').value);

  // 6. Genera un numero casuale tra 1 e 5 per il computer utilizzando la funzione 'generateRandomNumber'.
  const computerNumber = generateRandomNumber(1, 5);

  // 7. Somma il numero scelto dall'utente e il numero generato per il computer.
  const sum = userNumber + computerNumber;

  // 8. Seleziona l'elemento con ID 'result' che si trova immediatamente dopo il form.
  const resultElement = document.querySelector('#gameForm + #result');

  // 9. Determina se la somma dei due numeri è pari utilizzando la funzione 'isEven'.
  const isSumEven = isEven(sum);

  // 10. Stabilisce se il risultato della somma è 'pari' o 'dispari' in base al valore booleano restituito da 'isEven'.
  const result = isSumEven ? 'pari' : 'dispari';

  // 11. Confronta il risultato ('pari' o 'dispari') con la scelta dell'utente.
  if (result === userChoice) {
    // 12. Se coincidono, aggiorna il contenuto dell'elemento 'result' con un messaggio di vittoria.
    resultElement.textContent = `Hai vinto! Hai scelto ${userChoice}. Il tuo numero: ${userNumber}, Numero del computer: ${computerNumber}. Somma: ${sum} (${result}).`;
  } else {
    // 13. Se non coincidono, aggiorna il contenuto dell'elemento 'result' con un messaggio di sconfitta.
    resultElement.textContent = `Hai perso! Hai scelto ${userChoice}. Il tuo numero: ${userNumber}, Numero del computer: ${computerNumber}. Somma: ${sum} (${result}).`;
  }
});
