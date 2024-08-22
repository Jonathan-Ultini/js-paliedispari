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
