import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const dataForm = {};

formEl.addEventListener('submit', handleSubmitForm);
formEl.addEventListener('input', throttle(updateLocalStorage, 500));

function handleSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
}

function updateLocalStorage(e) {
  const target = e.target;
  dataForm[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми.Напиши скрипт,
// який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// 1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2.Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3.Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.