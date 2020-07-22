window.handleMealsRequest = (params,query) => {
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  if( isEmpty(query)){
    document.querySelector('.content').insertAdjacentHTML('beforeend', `
    <h2>ALL Meals</h2>
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="  col-md-6  col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="../pictures/food1.jpg" class="card-img-top" alt="../pictures/food2.jpg">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary card-btn">Book</a>
            </div>
          </div>
        </div>
        <div class="  col-md-6    col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="../pictures/food2.jpg" class="card-img-top" alt="../pictures/food2.jpg">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary card-btn">Book</a>
            </div>
          </div>
        </div>
        <div class="  col-md-6   col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="../pictures/food1.jpg" class="card-img-top" alt="../pictures/food2.jpg">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary card-btn">Book</a>
            </div>
          </div>
        </div>
        <div class="  col-md-6  col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="../pictures/food2.jpg" class="card-img-top" alt="../pictures/food2.jpg">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary card-btn">Book</a>
              </div>
          </div>
        </div>
        <div class="  col-md-6  col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="../pictures/food2.jpg" class="card-img-top" alt="../pictures/food2.jpg">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary card-btn">Book</a>
            </div>
          </div>
        </div>
        <div class=" col-md-6  col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="../pictures/food1.jpg" class="card-img-top" alt="../pictures/food2.jpg">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary card-btn">Book</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class = 'all-meals'></ul>`);
       
  const mealsResponse = fetch("/api/meals")
    .then((response) => response.json())
    .then((meals) => {
      meals.forEach( meal => 
      {
        document.querySelector('.all-meals').insertAdjacentHTML('beforeend',`<li>${meal.title}</li>`);
      });
    });
  }
};