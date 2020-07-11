window.handleMealRequest = async (params) => {
    document.body.innerHTML = `
    <h1>Meal with id ${params.id}</h1>`;
  const mealsResponse = 
  await fetch(`/api/meals/${params.id}`)
  .then((response) => response.json())
  .then((meal)=>console.log('meal by id',mealho));
  };