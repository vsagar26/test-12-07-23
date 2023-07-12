const input = document.getElementById('input');
const output = document.getElementById('output');
const submitButton = document.getElementById('submit');


submitButton.addEventListener('click', function() {
  
  const userInput = input.value;

  
  const newParagraph = document.createElement('p');
  
 
  newParagraph.textContent = userInput;
  
 
  output.appendChild(newParagraph);

  
  input.value = '';
});
