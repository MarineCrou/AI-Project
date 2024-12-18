const renderMarkdown = (markdown) => {
  console.log(markdown);
  let markedDownContainer = document.getElementById("form-answer");
  markedDownContainer.innerHTML = marked.parse(markdown);
  console.log(markedDownContainer.innerHTML);
};

let apiAnswer = (response) => {
  console.log(response.data.answer);
  let answer = response.data.answer;
  let answerPlaceholder = document.getElementById("form-answer");
  renderMarkdown((answerPlaceholder.innerHTML = answer));
};

// -> Get the search bar value
let getSearchValue = (e) => {
  e.preventDefault();
  let inputValueSearched = document.getElementById("search-form");
  let inputValue = inputValueSearched.value;
  console.log(inputValue);

  // -> Get the AI API link through Axios
  let API_KEY = `tf486ac3343a3de0640fb9054f9boe8b`;
  let prompt = inputValue;
  let context = `"Provide a gluten-free and lactose-free version of the recipe requested by the user. Ensure that all ingredients are free from gluten and lactose, and suggest appropriate substitutions where necessary. The recipe must remain delicious, easy to follow, and true to the original dish’s flavors and textures. For example:
If the user searches for 'tiramisu', replace gluten-containing ingredients like ladyfingers with gluten-free alternatives, and lactose-containing items like mascarpone with lactose-free substitutes.
Include clear instructions and measurements for the recipe.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${API_KEY}`;

  axios.get(apiUrl).then(apiAnswer);
  let answerPlaceholder = document.getElementById("form-answer");
  answerPlaceholder.innerHTML = "We're getting your recipe! 🍔 🥗 🍱 🍰 ... ";
};

let searchInput = document.getElementById("submit-btn");
searchInput.addEventListener("click", getSearchValue);
