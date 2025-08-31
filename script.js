// Simple form submission handling
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("status").innerText = "✅ Thank you! Your message has been sent.";
  this.reset();
});