/**
 * Verifica se la parola inserita dall'utente è palindroma e aggiorna il risultato sulla pagina.
 * 
 * Questa funzione legge la parola inserita nel campo input con id 'parola', la trasforma in minuscolo,
 * la confronta con la versione invertita della stessa parola, e aggiorna il contenuto del paragrafo con id 'result'
 * indicando se la parola è palindroma o meno.
 * 
 * @returns {boolean} Sempre false per prevenire l'invio del form e il ricaricamento della pagina.
 */
function isPalindrome() {
  const word = document.getElementById('parola').value.trim().toLowerCase();
  const reversedWord = word.split('').reverse().join('');
  const resultElement = document.getElementById('result');

  if (word === reversedWord) {
    resultElement.textContent = `"${word}" è una parola palindroma.`;
  } else {
    resultElement.textContent = `"${word}" non è una parola palindroma.`;
  }

  return false;
}

/**
 * Genera un numero intero casuale tra due valori inclusi.
 * 
 * @param {number} min - Il valore minimo (incluso) che il numero generato può assumere.
 * @param {number} max - Il valore massimo (incluso) che il numero generato può assumere.
 * @returns {number} Un numero intero casuale compreso tra min e max (inclusi).
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Determina se un numero è pari.
 * 
 * @param {number} number - Il numero da verificare.
 * @returns {boolean} True se il numero è pari, false se è dispari.
 */
function isEven(number) {
  return number % 2 === 0;
}
