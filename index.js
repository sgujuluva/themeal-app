 //selecting all the elements
let container = document.querySelector("#container")
let title = document.querySelector("#title");
// fetching the meal api
async function getAllPosts() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const json = await response.json();
   console.log(json); 

title.innerText = json.meals.map((p) => p.strMeal)

//jsx
let div = `<div>

<h2><span>Meal Category:</span>${json.meals.map((p) => p.strCategory)}</h2>
<h3><span>Country:</span>${json.meals.map((p) => p.strArea)}</h3>
<img src = ${json.meals.map((p) => p.strMealThumb)}></img>

<p><span>Instructions:</span>${json.meals.map((p) => p.strInstructions)}</p>
<iframe  src = ${`https://www.youtube.com/embed/${(json.meals.map(p => p.strYoutube))[0].slice(-11)}`}

>   </iframe>
</div>`
container.innerHTML += div;
}
getAllPosts(); 

/* let container = document.querySelector("#container");
async function randomMeal() {
  let fetching = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  let json = await fetching.json();
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    if (json.meals[0][`strIngredient${i}`]) {
      let element = `<li>${json.meals[0][`strIngredient${i}`]}</li>`;
      arr.push(element);
    } 
  }

  // JSX
  let div = `<div>
    <h1><span>Meal: </span> ${json.meals.map((p) => p.strMeal)}</h1>
    <h2><span>Category: </span>${json.meals.map((p) => p.strCategory)}</h2>
    <h3><span>Country: </span>${json.meals.map((p) => p.strArea)}</h3>
    <img src=${json.meals.map((p) => p.strMealThumb)}>
    <ul><span>Ingredient: </span>${arr.join(" ")}</ul>
    <p><span>Instructions: </span>${json.meals.map(
      (p) => p.strInstructions
    )} </p>
    </div>`;

  container.innerHTML += div;
    }
randomMeal();

 <h1><span>Meal :</span> ${json.meals.map((p) => p.strMeal)}</h1> 
 
 <ul><span></span>${(json.meals.map((p) => handleIngredient(p)))}</ul>*/