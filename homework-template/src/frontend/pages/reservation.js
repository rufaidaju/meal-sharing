window.handleReservationRequest = async(params,query) => {
    await fetch(`/api/meals/${params.meal_id}`)
    .then((response) => response.json())
    .then((meal)=>{
        document.querySelector('.content').insertAdjacentHTML('beforeend',`
            <h2>${meal[0].title}</h2>
            <div class="card mb-3 justify-content-center text-center">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../pictures/food5.jpg" class="meal-card-img" alt="${meal[0].title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p>Max number of guests :${meal[0].maxNumberOfGuests}</p>
                            <p>Price:${meal[0].price}</p>   
                            <form class="reservation-form">
                                <div class="row justify-content-center">
                                    <div class="col-7 col-md-4">
                                        <input type="text" class="form-control input-name" placeholder="Your name" required>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-7 col-md-4 ">
                                        <input type="text" class="form-control input-email" placeholder="Your email" required>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-7 col-md-4 ">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-center">
                                        <button class="home-all-meals-btn"><a href="/meals/${params.meal_id}">Back to the meal</a></button>
                                    </div>
                                </div>
                            </form>      
                        </div>
                    </div>
                </div>
            </div>
         `);}
    );

    // Create a reservation 
    document.querySelector('.reservation-form').addEventListener('submit',reservation);
    async function reservation(e){ 
        e.preventDefault();
        let newReservation = {
            'name' : document.querySelector('.input-name').value ,
            'email' :document.querySelector('.input-email').value,
            'meal_id' : params.meal_id
        }

        await fetch('/api/reservations', {
            method: "POST",
            headers: {  
                "Content-type":
                "application/x-www-form-urlencoded; charset=UTF-8"  
            },  
            body:`name=${newReservation.name}&email=${newReservation.email}&meal_id=${newReservation.meal_id}`
        })
        .then(response => response.json())
        .then(data => {
            alert('Sucsess');
            document.querySelector(".reservation-form").style.display ="none";
            document.querySelector('.card-body').insertAdjacentHTML('beforeend',`
            <div class="row ">
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
           console.log('Success:', data);
          }).catch((error) => {
           console.error('Error: ', error);
          });
    };
}