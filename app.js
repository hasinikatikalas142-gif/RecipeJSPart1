/* ---------- Recipe Data ---------- */
const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    time: 25,
    difficulty: "easy",
    description: "A quick and comforting pasta with rich garlic cream sauce.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Classic Chicken Curry",
    time: 60,
    difficulty: "medium",
    description: "A flavorful Indian-style chicken curry with aromatic spices.",
    category: "curry"
  },
  {
    id: 3,
    title: "Fresh Garden Salad",
    time: 15,
    difficulty: "easy",
    description: "A light, refreshing salad with seasonal vegetables.",
    category: "salad"
  },
  {
    id: 4,
    title: "Beef Stroganoff",
    time: 70,
    difficulty: "hard",
    description: "Tender beef cooked in a creamy mushroom sauce.",
    category: "meat"
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    time: 30,
    difficulty: "medium",
    description: "Colorful vegetables tossed in a savory stir-fry sauce.",
    category: "vegetarian"
  },
  {
    id: 6,
    title: "Homemade Lasagna",
    time: 90,
    difficulty: "hard",
    description: "Layered pasta with rich meat sauce and melted cheese.",
    category: "pasta"
  },
  {
    id: 7,
    title: "Avocado Toast Deluxe",
    time: 10,
    difficulty: "easy",
    description: "Crispy toast topped with smashed avocado and spices.",
    category: "breakfast"
  },
  {
    id: 8,
    title: "Thai Green Curry",
    time: 55,
    difficulty: "medium",
    description: "A spicy and fragrant curry with coconut milk and herbs.",
    category: "curry"
  }
];

/* ---------- DOM Selection ---------- */
const recipeContainer = document.querySelector("#recipe-container");

/* ---------- Create Recipe Card ---------- */
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

/* ---------- Render Recipes ---------- */
const renderRecipes = (recipesToRender) => {
  const recipesHTML = recipesToRender
    .map(recipe => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = recipesHTML;
};

/* ---------- Initialize App ---------- */
renderRecipes(recipes);