const feedbackForm = document.getElementById('feedbackForm');
const submitBtn = document.getElementById('submitBtn');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
});

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Replace this part with your submission logic, e.g., sending data to the server

  // Simulate a successful submission with a simple animation
  feedbackForm.style.animation = 'fadeOut 0.5s forwards';

  setTimeout(() => {
    feedbackForm.style.display = 'none';
    showThankYouMessage();
  }, 500);
}

function showThankYouMessage() {
  const thankYouMessage = document.createElement('div');
  thankYouMessage.classList.add('thank-you');
  thankYouMessage.textContent = 'Thank you for your feedback!!';

  document.body.appendChild(thankYouMessage);
}
