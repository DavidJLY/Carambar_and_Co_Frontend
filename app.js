// URL de l'API backend
const API_URL = "http://localhost:3000/v1/jokes";

const randomJokeBtn = document.getElementById("randomJokeBtn");
const randomJokeDisplay = document.getElementById("randomJoke");
const addJokeForm = document.getElementById("addJokeForm");
const newJokeInput = document.getElementById("newJoke");

//Fetch & display joke
async function randomJoke() {
  try {
    const response = await fetch(`${API_URL}/random`);
    const joke = await response.json();
    randomJokeDisplay.textContent = joke.content;
  } catch (error) {
    console.error(error);
    randomJokeDisplay.textContent = "Impossible de récupérer une blague.";
  }
}

//Add a joke
async function addNewJoke(event) {
  event.preventDefault();
  const newJoke = newJokeInput.value.trim();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newJoke }),
    });
    alert("Blague ajoutée avec succès !");
    newJokeInput.value = "";
  } catch (error) {
    console.error(error);
    alert("Impossible d'ajouter la blague.");
  }
}

//EventListener
randomJokeBtn.addEventListener("click", randomJoke); // Clic sur le bouton pour une blague aléatoire
addJokeForm.addEventListener("submit", addNewJoke);
