$(document).ready(function() {

  // Sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }

    // Update the active section in the header
    updateActiveSection();
  });

  // Handle click events on navigation links
  $(".header ul li a").click(function(e) {
    e.preventDefault();

    var target = $(this).attr("href");

    if ($(target).hasClass("active-section")) {
      return;
    }

    // Scroll to the target section smoothly
    if (target === "#home") {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500
      );
    } else {
      var offset = $(target).offset().top - 40;

      $("html, body").animate(
        {
          scrollTop: offset
        },
        500
      );
    }

    // Update the active class for the clicked link
    $(".header ul li a").removeClass("active");
    $(this).addClass("active");
  });

  // Initial content revealing using ScrollReveal library
  ScrollReveal({
    distance: "100px",
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
    origin: "left"
  });
  ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
    origin: "right"
  });
  ScrollReveal().reveal(".project-title, .contact-title", {
    origin: "top"
  });
  ScrollReveal().reveal(".projects, .contact", {
    origin: "bottom"
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['submitToEmail'];
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(form);
  
      emailjs.send('service_nrm6apj', '__ejs-test-mail-service__', formData)
        .then(function(response) {
          console.log('Email sent successfully:', response);
  
          // You can add any success message here
          alert('Form submitted successfully!');
        }, function(error) {
          console.error('Error sending email:', error);
  
          // You can add any error message here
          alert('Error submitting form. Please try again later.');
        });
    });
  });
  
  // Initialize Email.js
  emailjs.init('QaLo4p3Y9HgUE1hLa');

});

// Function to update the active section in the header based on scroll position
function updateActiveSection() {
  var scrollPosition = $(window).scrollTop();

  // Checking if scroll position is at the top of the page
  if (scrollPosition === 0) {
    $(".header ul li a").removeClass("active");
    $(".header ul li a[href='#home']").addClass("active");
    return;
  }

  // Iterate through each section and update the active class in the header
  $("section").each(function() {
    var target = $(this).attr("id");
    var offset = $(this).offset().top;
    var height = $(this).outerHeight();

    if (
      scrollPosition >= offset - 40 &&
      scrollPosition < offset + height - 40
    ) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#" + target + "']").addClass("active");
    }
  });
}
