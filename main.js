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
