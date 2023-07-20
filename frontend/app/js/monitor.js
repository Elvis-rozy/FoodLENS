let breakfastObj = {};
let allBreakfast = [];
let searchValue = "";
const searchMonitor = document.querySelector(".add-food-search");
const searchResult = document.querySelector("#searched1");
const input = document.querySelector(".inpt-num");
const dailyDom = document.querySelector(".brk-article");

function searchFood() {}

searchMonitor.addEventListener("input", () => {
  searchValue = searchMonitor.value;
  // console.log(searchValue);
  // fetchItems();
  getItems();
});

function getItems() {
  fetch(`http://localhost:3000/api/v1/all-foods-item/all?search=${searchValue}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { foods, totalCount, numOfPages } = data;
      let searchedFood = foods.map((item, index) => {
        //console.log(item)
        if (index > 7) {
          searchResult.classList.add("show-scroll");
        }
        if (index < 7) {
          searchResult.classList.remove("show-scroll");
        }
        const { food_name, _id } = item;
        console.log(food_name, _id);
        return ` <p class="search-rst" id=${_id} data-set=${_id}>${food_name}</p>`;
      });

      searchResult.innerHTML = searchedFood.join("");
      if (searchValue == "") {
        searchResult.innerHTML = "";
        searchResult.classList.remove("show-scroll");
      }
      const foodResults = document.querySelectorAll(".search-rst");
      foodResults.forEach((result) => {
        // result.addEventListener("click", (e) => {
        //  console.log(e.target);
        // });
      });
    });
}

searchResult.addEventListener("mouseover", (e) => {
  if (e.target.matches(/*"#bx-x"*/ "[data-set]")) {
    let newId = e.target.dataset.set;
    let dom = e.target;
    dom.classList.add("active");
    console.log(dom);
  }
});
searchResult.addEventListener("mouseout", (e) => {
  if (e.target.matches(/*"#bx-x"*/ "[data-set]")) {
    let newId = e.target.dataset.set;
    let dom = e.target;
    dom.classList.remove("active");
    console.log(dom);
  }
});
searchResult.addEventListener("click", (e) => {
  if (e.target.matches(/*"#bx-x"*/ "[data-set]")) {
    let newId = e.target.dataset.set;

    console.log(newId);

    fetch(`http://localhost:3000/api/v1/all-foods-item/${newId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       //  console.log(data.food);
        //  breakfastArray = [...breakfastArray, data.food];
        //  console.log(breakfastArray);
        breakfastObj.food = data.food
console.log(breakfastObj.food)
breakfastObj.food={...breakfastObj.food}
        breakfastObj.serving_unit = parseInt(input.value);
        allBreakfast = [...allBreakfast, breakfastObj];
        sessionStorage.setItem("dailyFood", JSON.stringify(allBreakfast));
      })
      .then(() => {
        let allfood = allBreakfast.map((item) => {
          const { food, serving_unit } = item;
          
          console.log(food.food_name, serving_unit);
          return ` <article class="each-article">
            <span class="p-x">X</span>

            <div class="added">
              <h3 class="added-heading">${food.food_name}</h3>
              <span>${serving_unit}unit</span>  X  <span>${food.food_name}</span>
            </div>
          </article> `;
        });

        dailyDom.innerHTML = allfood.join("");
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
