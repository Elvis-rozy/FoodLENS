const cat = document.querySelector('.groups');

/* fetch('https://backend-hzm1.onrender.com/api/v1/all-foods-item/all') */
fetch('app/JSON/fooddata.json')
.then(response => response.json())
.then(data => {
    const categories = [...new Set(data.map((item)=> {return item}))]

    document.getElementById('search-box').addEventListener('keyup', (e)=> {
        const searchData = e.target.value.toLowerCase();
        const filterData = categories.filter((item)=> {
            return (
                item.food_name.toLocaleLowerCase().includes(searchData)
            )
        })
        displayItem(filterData);
        //console.log(filterData);

        //categories to selection page flow
        const elements = document.querySelectorAll('.menu-item');

        // Add click event listeners to each element
        elements.forEach((element, Index)=>{
            element.addEventListener('click', ()=>{
                //hide categories page and show selection page
                cat.classList.add('Hide');
                searchform.classList.add('Hide');
                link.classList.remove('Hide');
                selection.classList.remove('Hide');
                // Get the unique ID of the clicked element
                const id = element.getAttribute('id');
                // Calculate the number based on index for dynamic text
                const number = Index;
                console.log(id);
                console.log(filterData[0].food_name);

                for (i = 0; i < filterData.length; i++) {
                    if (id === filterData[i].food_name) {
                        fetch("app/JSON/" + [i] + ".json")
                        .then(response => response.json())
                        .then(data => {
                            // Change the content based on the unique ID
                            myImage.setAttribute("src", data[`${number}`].img_url);
                            foodName.textContent = data[`${number}`].food_name.charAt(0).toUpperCase() + data[`${number}`].food_name.slice(1);
                            foodN.textContent = data[`${number}`].food_name.charAt(0).toUpperCase() + data[`${number}`].food_name.slice(1);;
                            cuisine.textContent = data[`${number}`].cuisine.charAt(0).toUpperCase() + data[`${number}`].cuisine.slice(1);;
                            category.textContent = data[`${number}`].category.charAt(0).toUpperCase() + data[`${number}`].category.slice(1);;
                            description.textContent = data[`${number}`].description.charAt(0).toUpperCase() + data[`${number}`].description.slice(1);;
                            servQty.textContent = data[`${number}`].serving_qty;
                            servUnit.textContent = data[`${number}`].serving_unit.charAt(0).toUpperCase() + data[`${number}`].serving_unit.slice(1);;
                            servWtgram.textContent = data[`${number}`].serving_weight_grams;
                            calories.textContent = data[`${number}`].nutrition_fact.nf_calories;
                            totFats.textContent = data[`${number}`].nutrition_fact.nf_total_fat;
                            satFat.textContent = data[`${number}`].nutrition_fact.nf_saturated_fat;
                            cholesterol.textContent = data[`${number}`].nutrition_fact.nf_cholesterol;
                            sodium.textContent = data[`${number}`].nutrition_fact.nf_sodium;
                            totCarb.textContent = data[`${number}`].nutrition_fact.nf_total_carbohydrate;
                            dietFiber.textContent = data[`${number}`].nutrition_fact.nf_dietary_fiber;
                            sugars.textContent = data[`${number}`].nutrition_fact.nf_sugars;
                            totProtein.textContent = data[`${number}`].nutrition_fact.nf_protein;
                            potassium.textContent = data[`${number}`].nutrition_fact.nf_potassium;
                            iron.textContent = data[`${number}`].nutrition_fact.nf_p;
                            totfatvalue7.textContent = data[`${number}`].nutrition_fact.nf_total_fat;
                            satfatvalue8.textContent = data[`${number}`].nutrition_fact.nf_saturated_fat;
                            cholesvalue10.textContent = data[`${number}`].nutrition_fact.nf_cholesterol;
                            sodiumvalue9.textContent = data[`${number}`].nutrition_fact.nf_sodium;
                            carbvalue1.textContent = data[`${number}`].nutrition_fact.nf_total_carbohydrate;
                            dietfibvalue2.textContent = data[`${number}`].nutrition_fact.nf_dietary_fiber;
                            sugarvalue3.textContent = data[`${number}`].nutrition_fact.nf_sugars;
                            totprotvalue4.textContent = data[`${number}`].nutrition_fact.nf_protein;
                            potassvalue6.textContent = data[`${number}`].nutrition_fact.nf_potassium;
                            ironvalue5.textContent = data[`${number}`].nutrition_fact.nf_p;
                            data[`${number}`].ingredients.forEach(elem=>ingredients.textContent+=(`Ingredient Name: ${elem.ingredient_name}. Serving Quantity: ${elem.serving_qty}. Description: ${elem.description}. Serving Weight grams: ${elem.serving_weight_grams}. Serving Unit: ${elem.serving_unit}. Note: ${elem.note}. Source: ${elem.source}.`));
                            videoEmbedSRC.setAttribute("src", data[`${number}`].video_url);
                            videoWatchSRC.textContent = data[`${number}`].video_url;
                        //catch statement to handle errors
                        }).catch(error => console.error(error));
                    }
                }
            })
        })
    });

    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=> {
            return(`<div id "${item.food_name}" class="menu-item">
                <img src=${item.img_url} class="photo" alt="">
                <div class="item-info">
                  <h4>${item.food_name}</h4>
                  <p class="item-text">${item.cuisine}
                  </p>
                </div>
              </div>`
            )
        }).join('')
    };
    displayItem(categories);

}).catch(error => console.error(error));