// Get all the headline elements on the page
const headlines = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

// Loop through the headline elements and change their color
headlines.forEach((headline) => {
  headline.style.color = "red";
});
