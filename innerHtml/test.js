const initApp = async () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      processUserInput();
    });
  }
  
  document.addEventListener("DOMContentLoaded", initApp);
  
  const processUserInput = () => {
    const rawData = document.querySelector('input').value;
    const sanitizedData = sanitizeInput(rawData);
    const h1 = document.querySelector('h1');
    h1.textContent = sanitizedData; // Update text content with sanitized data
  }
  
  const sanitizeInput = (input) => {
    const element = document.createElement('div');
    element.textContent = input;
    return element.innerHTML;
  }
  