fetch("/data/recipes.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let bodyElm = document.querySelector("body");
    let listElm = document.createElement("ul");
    listElm.classList.add("bread-recipe");
    
    // Tilføj en grundlæggende tekst og data til listen
    listElm.innerHTML = `
            <p>Halli hallo!</p>
            ${data.recipes
              .map(
                (recipe) => `
                <li> ${recipe.name}
                    <ul>
                        ${recipe.ingredients
                          .map(
                            (ingredient) =>
                              `<li>${ingredient.name}: ${ingredient.amount}</li>`
                          )
                          .join("")}
                    </ul>
                </li>
            `
              )
              .join("")}
        `;

    // Tilføj listen til body elementet
    bodyElm.append(listElm);
  });
