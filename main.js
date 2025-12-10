const form = document.querySelector(".contact_form");
const inputs = form.querySelectorAll(".input_item");
const button = form.querySelector(".apply_button");

// Проверяем ошибки
function checkErrors() {
  let hasError = false;

  inputs.forEach(input => {
    if (!input.checkValidity() && input.value !== "") {
      hasError = true;
    }
  });

  button.disabled = hasError;
}

// Отлавливаем изменения
inputs.forEach(input => {
  input.addEventListener("input", checkErrors);
});



const buttonUp = document.querySelector('.button_up');

buttonUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/*
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider');
  let currentSlide = 0;
  const interval = 5000; // 5 секунд

  // показать первый слайд
  slides[currentSlide].classList.add('active');

  setInterval(() => {
    slides[currentSlide].classList.remove('active');

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
  }, interval);
});

*/
