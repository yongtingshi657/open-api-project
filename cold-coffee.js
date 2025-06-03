let coffeeListContainer = document.getElementById("coffee-list");

let link = "https://api.sampleapis.com/coffee/iced";

async function createcoffeeList() {
  try {
    let response = await fetch(link);
    let data = await response.json();
    if (!response.ok) {
      throw new Error(response.status);
    }
    coffeeCardList(data);
  } catch (error) {
    console.error(error);
  }
}
// create card list for each coffee
function coffeeCardList(data) {
  for (let i = 0; i < data.length; i++) {
    let coffee = data[i];

    let card = document.createElement("div");
    card.className = "coffee-card";

    let cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    // front of the card
    let front = document.createElement("div");
    front.className = "card-front";

    // when image is null, use default image
    let imageUrl;

    if(!coffee.image || coffee.image.toLowerCase()==="null"){
      imageUrl = "img/coffee-img.jpg"
    } else {
      imageUrl = coffee.image;
    }
    front.style.backgroundImage = `url(${imageUrl})`;
    front.innerHTML = `<h3>${coffee.title}</h3>`;
    console.log("Image used for:", coffee.title, imageUrl);

    // back of the card
    let back = document.createElement("div");
    back.className = "card-back";
    // back.style.backgroundImage = `url(${coffee.image})`;


      let ingredient;
      if(Array.isArray(coffee.ingredients)){
        ingredient=coffee.ingredients.join(", ")
      }else{
        ingredient = "N/A"
      }

    console.log(coffee.title, coffee.ingredients);

    let description = coffee.description || " ";

    back.innerHTML = `
        <h3>Ingredient</h3>
        <p>${ingredient}</p>
         <h3>Description</h3>
        <p>${description}</p>
        `;

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    coffeeListContainer.appendChild(card);
  }
}

createcoffeeList();
