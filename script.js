document.addEventListener('DOMContentLoaded', function () {
  let texts = {};

  fetch('translations.json')
    .then(response => response.json())
    .then(data => {
      texts = data;
      
      const langButtons = document.querySelectorAll('.language-buttons button');
      langButtons.forEach(langButton => {
        langButton.addEventListener('click', () => {
          const lang = langButton.id.split('-')[1];
          changeLanguage(lang);
        });
      });
    })
    .catch(error => console.error('Error loading translations:', error));

  const buttons = document.querySelectorAll('.scroll-button');
  const detailsButtons = document.querySelectorAll('.details-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  detailsButtons.forEach(detailsButton => {
    detailsButton.addEventListener('click', () => {
      const detailsContainer = detailsButton.nextElementSibling;
      detailsContainer.classList.toggle('open');
    });
  });

  function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-lang]');
    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-lang');
      element.textContent = texts[lang][key];
    });
  }
});
