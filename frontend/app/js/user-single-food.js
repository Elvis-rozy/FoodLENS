const token = localStorage.getItem("token");
const menuItems = document.querySelector(".search-result-section");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

window.addEventListener("DOMContentLoaded", () => {
  displayCategoryItem(id);
});

function displayCategoryItem(id) {
  fetch(`/api/v1/foods/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response
      .json()
      .then((data) => {
        console.log(data.food);
        const {
          _id,
          food_name,
          brand_name,
          calories,
          category,
          allergenInfo,
          cuisine,
          description,
          group,
          img_url,
          ingredients,
          intoleranceInfo,
          serving_qty,
          serving_unit,
          serving_weight_grams,
          video_url,
          nutrition_fact,
        } = data.food;

        const {
          nf_calories,
          nf_cholesterol,
          nf_dietary_fiber,
          nf_p,
          nf_potassium,
          nf_protein,
          nf_saturated_fat,
          nf_sodium,
          nf_sugars,
          nf_total_carbohydrate,
          nf_total_fat,
        } = data.food.nutrition_fact;

        //let nut_fact=JSON.stringify(data.food.nutrition_fact);
        //console.log(nut_fact)

        let nf_total = 0;
        for (const key in data.food.nutrition_fact) {
          if (typeof data.food.nutrition_fact[key] === "number") {
            nf_total += data.food.nutrition_fact[key];
            // console.log(nut_fact[key]);
          }
        }
        nf_total = nf_total - nf_calories;

        const ingredientDom = ingredients.map((item, index) => {
          const {
            ingredient_name,
            serving_qty,
            serving_unit,
            serving_weight_grams,
          } = item;

          return `<p id=${index + 1}>${
            index + 1
          }  <span>${ingredient_name}</span><span>${serving_qty} </span> <span>${serving_unit} </span>   </p>`;
        });

        const shownItem = `<div class="result" id=${_id}>
        <img id="img" src=${img_url} alt="food image" />
        <div class="food-details">
          <h3 id="foodName">${food_name}</h3>
          <span
            >Cuisine:
            <p id="cuisine">${cuisine}</p
          ></span>
          <span
            >Category:
            <p id="category">${category}</p
          ></span>
          Description
          <p id="descript">${description}</p>
          <div class="foodInfo">
            
                    ==================== Quantity table  ====================
                   
            <table>
              <tbody>
                <tr>
                  <td>Serving Quantity:</td>
                  <td id="servQty" class="last">${serving_qty}</td>
                </tr>
                <tr>
                  <td>Serving Unit:</td>
                  <td id="servUnit" class="last">${serving_unit}</td>
                </tr>
                <tr>
                  <td>Serving Weight Grams:</td>
                  <td id="servWtgrm" class="last">${serving_weight_grams}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        

<section class="nf-container">
 <h1 class="nut-f">Nutrition Facts</h1>
 <div class="border-sm"></div>
 <div class="serving-size">
    <p>Serving size</p><Span><p>
        Whole recipe <span>(705)g</span>
    </p></Span>
<div class="border-lg"></div>
<div class="for-cal">
    <h1>Calories</h1>
    <span><p>${calories}</p></span>
</div>
<div>

     <p class="daily-val" > % Daily Value</p>
</div>

 <div class="border-sm"></div>
  
<main class="daily-value">

   
<div class="for-fat">
   <div class="total-fat">
    <div class="t-flex"> <h1>total fat</h1><span><p>(${nf_total_fat}g)</p></span>  </div>
    <span><p>${parseInt((nf_total_fat / nf_total) * 100)}%</p></span>
</div> 
  <div class="total-fat">
    <div class="t-flex"> <h1>saturated fat</h1><span><p>(${nf_saturated_fat}g)</p></span>  </div>
    <span><p>${parseInt((nf_saturated_fat / nf_total_fat) * 100)}%</p></span>
</div> 
  <div class="total-fat">
     <div class="t-flex"> <h1>unsaturated</h1><span><p>(${
       nf_total_fat - nf_saturated_fat
     }g)</p></span>  </div>
    <span>${parseInt(
      ((nf_total_fat - nf_saturated_fat) / nf_total_fat) * 100
    )}%</p></span>
</div> 
</div>
 <div class="total-fat">
    <div class="t-flex"> <h1>sodium</h1><span><p>(${nf_sodium}g)</p></span>  </div>
   
    <span><p>${parseInt((nf_sodium / nf_total) * 100)}%</p></span>
</div> 
 <div class="total-fat">
   <div class="t-flex"> <h1>cholesrtrol</h1><span><p>(${nf_cholesterol}g)</p></span>  </div> 
    <span><p>${parseInt((nf_cholesterol / nf_total) * 100)}%</p></span>
</div> 
 <div class="total-fat">
   <div class="t-flex"> <h1>Dietary Fiber</h1><span><p>(${nf_dietary_fiber}g)</p></span>  </div>
    <span><p>${parseInt((nf_dietary_fiber / nf_total) * 100)}%</p></span>
</div> 
</main>
<div class="total-protein">
   <div class="t-flex"> <h1>Protein</h1><span><p>(${nf_protein}g)</p></span>  </div>
    <span><p>${parseInt((nf_protein / nf_total) * 100)}%</p></span>
 </div>
<div class="border-large"></div>
<div class="total-fat">
    <div class="t-flex"> <h1>sugar</h1><span><p>(${nf_sugars}g)</p></span>  </div>
    <span><p>${parseInt((nf_sugars / nf_total) * 100)}%</p></span>
</div> 
<div class="total-fat">
    <div class="t-flex"> <h1>Iron</h1><span><p>(nf_iron)</p></span>  </div>
    <span><p>50%</p></span>
</div> 
<div class="total-fat">
    <div class="t-flex"> <h1>phosporus</h1><span><p>(${nf_p}g)</p></span>  </div>
    <span><p>${parseInt((nf_p / nf_total) * 100)}%</p></span>
</div> 
<div class="t-p">
     <div class="t-flex"> <h1>potassium</h1><span><p>(${nf_potassium}g)</p></span>  </div>
    <span><p>${parseInt((nf_potassium / nf_total) * 100)}%</p></span>
</div> 

</section>



        <div class="ingredients">
         <h3>Ingredients</h3>
          <div class="ingredients-info">
           
            <section class="ingredient-container">
           
            <div>${ingredientDom} </div>
             </secion>
          
          </div>
            Ingredient Info source: <a id="ingsrc" href="#">source_name</a>
        </div>
        <div class="remove-from-dashboard">Remove Food</div>
      </div>
      
        ==================== Video Tutorial Section  ====================
        
      <div class="video-tutorial">
        <h3>Video Tutorial</h3>
        <div class="video">
          <iframe
            id="video"
            width="100%"
            height="100%"
            src=${video_url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
        <h4 id="foodN"></h4>
        <p>
          You can watch the video on youtube
          <a href=${video_url}>here</a>
        </p>
      </div>
      
        ==================== More Options Section  ====================
        
      <div class="more-section">
        <h3>View more delicious meals</h3>
        <a href="categories.html" class="more snaps-inline">
          <div class="more-card"></div>
          <div class="middle">
            <div id="middle" class="more-card"></div>
            <div id="middle" class="more-card"></div>
          </div>
          <div class="more-card"></div>
          <div class="middle">
            <div id="middle" class="more-card"></div>
            <div id="middle" class="more-card"></div>
          </div>
          <div class="more-card"></div>
        </a>
      </div>
`;

        menuItems.innerHTML = shownItem;

        const removeBtn = document.querySelector(".remove-from-dashboard");
        removeBtn.addEventListener("click", () => {
          removeFood(id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

function removeFood(id) {
  //localStorage.setItem("food", JSON.stringify(data));
  fetch(`/api/v1/foods/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(data),
  })
    .then(() => {
      console.log("add Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}
