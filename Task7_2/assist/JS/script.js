// Function to change the main image and background color
function changeImage(color, bgColor) {
  var mainImage = document.getElementById('main-image');
  var galleryContainer = document.querySelector('.gallery-container');
  mainImage.src = './assist/IMG/' + color + '.png';
  galleryContainer.style.backgroundColor = bgColor;
}

// Function to toggle dark mode
function toggleDarkMode() {
  const section = document.querySelector('.second');
    section.classList.toggle('dark-mode');
}

//accordion   Q/A
const accordionItems = document.querySelectorAll('.accordion li');
accordionItems.forEach((item) => {
  const question = item.querySelector('.question');
  const icon = question.querySelector('i');
  const answer = item.querySelector('.answer');

  icon.addEventListener('click', () => {
    item.classList.toggle('active');
    answer.classList.toggle('active');
  });
});


// Function for rating
function Rating(element) {
  const stars = document.querySelectorAll('.RatingStars .star');
  const message = document.querySelector('.RatingStars p');
  
  let index = Array.from(stars).indexOf(element);
  
  const messages = [
      "It is bad 😢",
      "It is not bad 😐",
      "It is not my favourite 🙂",
      "It is great! 😃",
      "It is awesome! 😍"
  ];
  
  stars.forEach((star, i) => {
      if (i <= index) {
          star.classList.add('golden');
      } else {
          star.classList.remove('golden');
      }
  });
  
  message.textContent = messages[index];
}