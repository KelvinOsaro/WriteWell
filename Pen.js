// Existing testimonials array
let testimonials = [
  { text: "I'm in love with the Elegance Set! The pen writes effortlessly, and the paper is a dream to write on.", author: "Sarah R." },
  { text: "Exquisite design and premium quality. Makes writing a pleasure!", author: "Michael H." }
];

// Function to display testimonials
function displayTestimonials() {
  const testimonialsContainer = document.getElementById('testimonials');
  testimonialsContainer.innerHTML = ''; // Clear previous content

  testimonials.slice(0, 2).forEach(testimonial => {
      const testimonialDiv = document.createElement('div');
      testimonialDiv.innerHTML = `
          <blockquote class="blockquote">
              <p class="mb-0">${testimonial.text}</p>
              <footer class="blockquote-footer">${testimonial.author}</footer>
          </blockquote>
      `;
      testimonialsContainer.appendChild(testimonialDiv);
  });
}

// Function to add new feedback
function addFeedback(text) {
  const newFeedback = { text: text, author: "Anonymous" }; // Add username functionality if needed
  testimonials.unshift(newFeedback); // Add new feedback at the beginning of the array
  displayTestimonials(); // Display updated testimonials
}

// Display initial testimonials
displayTestimonials();

// Handle form submission for feedback
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const feedbackText = document.getElementById('feedbackText').value;
  addFeedback(feedbackText);
  this.reset(); // Reset form after submission
});

// Handle form submission for payment
document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const expectedAmount = 50; // Change this to the expected amount

  if (isNaN(amount) || amount !== expectedAmount) {
      alert('Please enter the correct payment amount.'); // Validation for the payment amount
  } else {
      // Hide payment form and display thank you message
      document.getElementById('paymentForm').style.display = 'none';
      document.getElementById('thankYou').style.display = 'block';
      document.getElementById('paidAmount').textContent = `$${amount}`;
  }
});

// Additional event listener outside the paymentForm event listener
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          this.classList.toggle('clicked');
      });
  });
});
