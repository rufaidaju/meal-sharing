window.handleMealRequest = async (params) => {
  const mealsResponse = 
  await fetch(`/api/meals/${params.id}`)
  .then((response) => response.json())
  .then((meal)=>{console.log(meal[0]);
    document.querySelector('.content').insertAdjacentHTML('beforeend',`
    <h2>${meal[0].title}</h2>
    <div class="card mb-3 justify-content-center text-center">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="../pictures/food5.jpg" class="meal-card-img" alt="${meal[0].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">${meal[0].description}</p>
            <p>Max number of guests :${meal[0].maxNumberOfGuests}</p>
            <p>Price:${meal[0].price}</p>
            <p class="card-text"><small class="text-muted">Created at: ${meal[0].createdAt}</small></p>
            <a href="/reservation/${meal[0].id}"  class="btn btn-primary meal-card-btn">Reservation</a>
            <a href="/reviews/${meal[0].id}" class="btn btn-primary meal-card-btn">Reviews</a>
            <a href="/review/${meal[0].id}" class="btn btn-primary meal-card-btn">Review</a>
          </div>
        </div>
      </div>
    </div>
    `)}).catch((error) => {
      console.error('Error: ', error);
     });
};