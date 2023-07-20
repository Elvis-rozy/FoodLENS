const allergiesContainer = document.querySelector(".allergy-container1");
const intoleranceContainer = document.querySelector("#intolerance-container1");

function t() {
  document
    .querySelector("#intolerance-container1")
    .addEventListener("click", (e) => {
      if (e.target.matches(/*"#bx-x1"*/ "[data-index]")) {
        //  let itemPressed = e.target.parentElement.parentElement.innerText;
        //  let lowercaseItem = itemPressed.toLowerCase();
        let newId = parseInt(e.target.dataset.index, 10);
        const lowercaseItem = intolerance[newId].toLowerCase();
        let new_intolerance = intolerance.filter((item) => {
          return item !== lowercaseItem;
        });

        // Display new intolerance items after filter
        let newest_intolerance = new_intolerance.map((item, newIndex) => {
          return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x1" data-index=${newIndex}></i></span></p>`;
        });
        document.querySelector("#intolerance-container1").innerHTML =
          newest_intolerance.join("");
        window.location.reload();
        user.intolerance = new_intolerance;
        sessionStorage.setItem("updatedUser", JSON.stringify(user));
        console.log(user);
      }
    });
}






function removeAllergies_intolerance(container, array, e) {
  if (e.target.matches(/*"#bx-x"*/ "[data-index]")) {
    console.log("clicked");
    let newId = parseInt(e.target.dataset.index, 10);
    //console.log(newId);
    const lowercaseItem = array[newId].toLowerCase();
    // let itemPressed = e.target.parentElement.parentElement.innerText;
    //let lowercaseItem = itemPressed.toLowerCase();
    console.log(lowercaseItem);

    let new_allergies = array.filter((item) => {
      console.log(item);
      return item !== lowercaseItem;
    });

    // Display new allergies after filter
    let newest_allergies = new_allergies.map((item, newIndex) => {
      return `<p class="allergy1 capitalised">${item} <span><i class='bx bx-x' id="bx-x" data-index=${newIndex}></i></span></p>`;
    });
    container.innerHTML = newest_allergies.join("");
    //  window.location.reload();
    user.array = new_allergies;
    sessionStorage.setItem("updatedUser", JSON.stringify(user));
    console.log(user);
  }
}

allergiesContainer.addEventListener("click", async (e) => {
  const user = await fecthData();
  const { allergies } = user;
  removeAllergies_intolerance(allergiesContainer, allergies, e);
});
intoleranceContainer.addEventListener("click", async (e) => {
  const user = await fecthData();
  const { intolerance } = user;
  removeAllergies_intolerance(intoleranceContainer, intolerance, e);
});
