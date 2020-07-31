window.handleAddMealRequest = async (params) => {
    document.querySelector('.content').insertAdjacentHTML('beforeend',`
     <h2>Add a new meal</h2>
     <form class="add-meal-form">
     <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <input type="text" class="form-control input-meal-title" placeholder="Meal title" required>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-6">
            <textarea class="input-meal-description" rows="2" cols="" placeholder="Insert  description to the meal..." required></textarea>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-3">
              <input type="number" class="form-control input-meal-maxNumberOfGuests" placeholder="Max number of guests" required>
          </div>
          <div class="col-3">
            <input type="number" class="form-control input-meal-price" placeholder="Price" required>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-6 text-center">
            <button type="submit" class="btn btn-primary add-meal-card-btn">Submit</button>
          </div>
        </div>
     </div>
     </form>
     
     `);


     // Add a new meal
    document.querySelector('.add-meal-form').addEventListener('submit',addMeal);
    async function addMeal(e){ 
        e.preventDefault();
        const createdAt = new Date();
        let newMeal = {
            'title' : document.querySelector('.input-meal-title').value ,
            'maxNumberOfGuests' : document.querySelector('.input-meal-maxNumberOfGuests').value ,
            'description' : document.querySelector('.input-meal-description').value ,
            'price' : document.querySelector('.input-meal-price').value ,
            'createdAt' : createdAt ,
        }

        await fetch('/api/meals', {
            method: "POST",
            headers: {  
                "Content-type":
                "application/x-www-form-urlencoded; charset=UTF-8"  
            },  
            body:`title=${newMeal.title}&maxNumberOfGuests=${newMeal.maxNumberOfGuests}
            &description=${newMeal.description}&price=${newMeal.price}&createdAt=${newMeal.createdAt}`
        })
        .then(response => response.json())
        .then(data => {
            alert('Sucsess');
            document.querySelector(".add-meal-form").style.display ="none";
            document.querySelector('.content').insertAdjacentHTML('beforeend',`
            <div class="row">
              <div class="col text-center">
                <p class="add-meal-submitted">You have added the meal successfully</p>
              </div>
           </div>

           <div class="row">
              <div class="col text-center">
                <button class="home-all-meals-btn"><a href="/meals">Show all meals</a></button>
              </div>
           </div>
           `);
           console.log('Success:', data);
          }).catch((error) => {
           console.error('Error: ', error);
          });
    };  
};