let coffeeImage = document.getElementById("coffee-image");
let coffeeName = document.getElementById("coffee-name");
let coffeeDes = document.getElementById("coffee-des");
let button = document.getElementById("button");
let coffeeDetails = document.getElementById("coffee-detail")
let buttonAgain = document.getElementById("button-again")

let coffeeList =[];
let link = "https://api.sampleapis.com/coffee/hot";

fetch(link)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
    coffeeList = data;
  })
  .catch((error) => {
    console.error("Failed to fetch coffee list:", error)
  })

function showRandomCoffee(){
  if(coffeeList.length === 0) {
    alert("Coffee List is Loading, please try again")
    return};


  let randomCoffee = coffeeList[Math.floor(Math.random()* coffeeList.length)];
    console.log("Random coffee chosen:", randomCoffee);

  
  coffeeImage.src = randomCoffee.image;
  coffeeImage.alt = randomCoffee.title || "Coffee";
  coffeeName.textContent = randomCoffee.title || "Unknown Coffee";
  coffeeDes.textContent = randomCoffee.description || "No description available.";

  coffeeImage.classList.add("random-coffee-image");
  coffeeDetails.style.display = "block";
   coffeeDetails.scrollIntoView({ behavior: "smooth" });

  }

button.addEventListener("click", showRandomCoffee);
buttonAgain.addEventListener("click", showRandomCoffee);
