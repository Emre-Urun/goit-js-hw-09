const form = document.querySelector('.feedback-form');
const mail = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

mail.value = localStorage.getItem('Mail') || '';
message.value = localStorage.getItem('Mesaj') || '';

mail.addEventListener('input', event => {
  localStorage.setItem('Mail', event.target.value);
});
message.addEventListener('input', e => {
  localStorage.setItem('Mesaj', e.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('Mesaj');
  localStorage.removeItem('Mail');
  form.reset();
});
