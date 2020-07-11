window.handleMealsRequest = (params,query) => {
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  if( isEmpty(query)){
    document.body.innerHTML = `
    <h1>ALL Meals Titles</h1>
    <ul class = 'all-meals'></ul>`;
  
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