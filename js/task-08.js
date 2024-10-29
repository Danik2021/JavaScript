'use strict';

const formEl = document.querySelector('.login-form');

function handleSubmitForm(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Ups! All forms must be filling');
    return;
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  form.reset();
}

formEl.addEventListener('submit', handleSubmitForm);
