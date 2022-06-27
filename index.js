//selecting all the elements
let imageWrapper = document.querySelector("#imagewrapper");
let wrapper = document.querySelector("#wrapper");
let image = document.querySelector("#image");
let ingredients = document.querySelector("#ingredients");
let instructions = document.querySelector("#instructions");

// fetching the meal api
async function getAllPosts(){
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const items = await response.json();
    console.log(items)
    items.forEach(element => {
        
        
    });

}