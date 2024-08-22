 
 document.addEventListener('DOMContentLoaded', function() {
   var typed = new Typed(".typing", {
     strings: ["Web Developer", "Web Designer", "JAVA Developer", "YouTuber"],
     typeSpeed: 30,
     backSpeed: 180,

     loop: true
   });
 });


 // Send me massage concept---->
 //-----------------------------------------------------------------------------------------------------------------
 document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way
  
  // Get form input values
  const fullName = document.querySelector("input[name='fullName']").value.trim();
  const email = document.querySelector("input[name='email']").value.trim();
  const subject = document.querySelector("input[name='subject']").value.trim();
  const message = document.querySelector("textarea[name='message']").value.trim();
  
  // Notification element
  const notification = document.getElementById("notification");

  // Check if all required fields are filled
  if (!fullName || !email || !message) {
      // Display "Please fill in all required fields" notification
      notification.textContent = "Please fill in all required fields.";
      notification.style.color = "#fff";
      notification.style.backgroundColor = "#f44336"; // Red color for error
      notification.style.padding = "10px";
      notification.style.marginTop = "10px";
      notification.style.borderRadius = "5px";
      notification.style.textAlign = "center";
      notification.style.display = "block";
      
      // Auto-hide the notification after 5 seconds
      setTimeout(() => {
          notification.style.display = "none";
      }, 5000);
      
      return; // Stop further execution if the form is incomplete
  }

  // If all fields are filled, display "Form submitted successfully!" notification
  notification.textContent = "Form submitted successfully!";
  notification.style.color = "#fff";
  notification.style.backgroundColor = "#4CAF50"; // Green color for success
  notification.style.display = "block";
  
  // Optionally, reset the form after successful submission
  document.getElementById("signup-form").reset();
  
  // Auto-hide the notification after 5 seconds
  setTimeout(() => {
      notification.style.display = "none";
  }, 5000);
});
