window.handleReviewsRequest = async(params,query) => {
  document.querySelector('.content').insertAdjacentHTML('beforeend', `
    <h2>Reviews </h2>
    <div class="container">
      <div class="row justify-content-center text-center reviews">
        
      </div>
    </div>
    `);
    await fetch(`/api/meals/${params.meal_id}`)
    .then((response) => response.json())
    .then((meal)=>{
        document.querySelector('.content').insertAdjacentHTML('beforeend',`
            <div class="card mb-3 justify-content-center text-center">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../pictures/food5.jpg" class="meal-card-img" alt="${meal[0].title}">
                    </div>
                    <div class="col-md-8 align-self-center">
                        <div class="card-body">  
                          <p class="review-meal-title">${meal[0].title}</p>  
                          <ul class="reviews-list"></ul> 
                        </div>
                    </div>
                </div>
            </div>
         `);}         
    );

    const mealsResponse = await fetch(`/api/reviews/${params.meal_id}`)
    .then((response) => response.json())
    .then((reviews) => {
      reviews.forEach( review => 
      {
        document.querySelector('.reviews-list').insertAdjacentHTML('beforeend',` 
          <li> ★ ${review.content}</li>
          `);
      });
      document.querySelector('.card-body').insertAdjacentHTML('beforeend',`
        <div class="row">
          <div class="col text-center">
            <button class="home-all-meals-btn"><a href="/meals">Show all meals</a></button>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <button class="home-all-meals-btn"><a href="/meals/${params.meal_id}">Back to the meal</a></button>
          </div>
        </div>
           `);
    }).catch((error) => {
      document.querySelector('.card-body').insertAdjacentHTML('beforeend',`
      <div class="row">
        <div class="col text-center">
          <p>There are no reviews to show</p>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <button class="home-all-meals-btn"><a href="/meals">Show all meals</a></button>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <button class="home-all-meals-btn"><a href="/meals/${params.meal_id}">Back to the meal</a></button>
        </div>
      </div>
         `);
      console.error('Error: ', error);
     });


}