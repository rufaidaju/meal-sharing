window.handleMealsRequest = async (params,query) => {
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  // If the query has no parameters (/meals)
  if( isEmpty(query)){
    document.querySelector('.content').insertAdjacentHTML('beforeend', `
    <h2>ALL Meals</h2>
    <div class="container">
      <div class="row justify-content-center text-center all-meals">
        
      </div>
      <div class="row ">
        <div class="col text-center">
          <button class="home-add-meal-btn"><a href="/add-meal">Add meal</a></button>
        </div>
      </div>
    </div>
    `);
       
  const mealsResponse = await fetch("/api/meals")
    .then((response) => response.json())
    .then((meals) => {
      meals.forEach( meal => 
      {
        document.querySelector('.all-meals').insertAdjacentHTML('beforeend',` 
          <div class="col-7 col-md-6  col-lg-4 ">
            <div class="meals-card" style="width: 18rem;">
              <img src="../pictures/food1.jpg" class="meals-card-img-top card-img-top" alt="../pictures/food2.jpg">
              <div class="meals-card-body">
                <h5 class="meals-card-title">${meal.title}</h5>
                <p class="meals-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="meals/${meal.id}" class="btn btn-primary meals-card-btn">Book</a>
              </div>
            </div>
          </div>`);
      });
    });
  }
};

