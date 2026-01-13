document.getElementById("contact-form").addEventListener("submit", function(e) {
e.preventDefault();
    emailjs.sendForm('service_4nfdkxr', 'template_dkusa1r', this)
    .then(function(response) {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message. Please try again later.");
    });
});
