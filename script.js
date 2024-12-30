function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const text1 = "Hello, I'm";
    const text2 = "Revati Upadhye🌸";
    let i = 0;
    const element1 = document.getElementById("typing-text");
    const element2 = document.getElementById("name");
  
    function typeText(element, text, callback) {
      let j = 0;
      function type() {
        if (j < text.length) {
          element.textContent += text.charAt(j);
          j++;
          setTimeout(type, 100); // Adjust speed of typing
        } else if (callback) {
          callback();
        }
      }
      type();
    }
  
    typeText(element1, text1, function () {
      setTimeout(function () {
        typeText(element2, text2, null); // Start typing "Revati Upadhye" after "Hello, I'm"
      }, 500); // Wait 500ms before starting the next typing effect
    });
  });
  