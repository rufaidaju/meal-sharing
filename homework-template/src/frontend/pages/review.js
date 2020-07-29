window.handleReviewRequest = async(params,query) => {
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
                    <div class="col-md-8 justify-content-center align-self-center">              
                        <div class="card-body">
                            <form class="review-form">
                                <div class="row justify-content-center">
                                    <div class="col-7 col-md-4">
                                        <textarea class="input-review" rows="2" cols="50" placeholder="Insert your review here please..."></textarea>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-7 col-md-4 ">
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-7 col-md-4 ">
                                        <button type="submit" class="btn btn-primary meal-card-btn">Submit</button>
                                    </div>
                                    <div class="col-7 col-md-4 text-center">
                                        <button class="btn btn-primary meal-card-btn"><a href="/meals/${params.meal_id}">Back to the meal</a></button>
                                    </div>
                                </div>
                            </form>  
                    </div>
                </div>
            </div>
         `);}
    );

    // Create a review 
    document.querySelector('.review-form').addEventListener('submit',review);
    async function review(e){ 
        e.preventDefault();
        const createdAt = new Date();
        let newReview = {
            'numberOfStars' : document.querySelector('.input-number-of-stars').value ,
            'content' : document.querySelector('.input-review').value ,
            'createdAt' : createdAt ,
            'meal_id' : params.meal_id
        }

        await fetch('/api/reviews', {
            method: "POST",
            headers: {  
                "Content-type":
                "application/x-www-form-urlencoded; charset=UTF-8"  
            },  
            body:`numberOfStars=${newReview.numberOfStars}&content=${newReview.content}&createdAt=${newReview.createdAt}&meal_id=${newReview.meal_id}`
        })
        .then(response => response.json())
        .then(data => {
            alert('Sucsess');
            document.querySelector(".review-form").style.display ="none";
            document.querySelector('.card-body').insertAdjacentHTML('beforeend',`
            <div class="row">
                <div class="col text-center">
                    <button class="home-all-meals-btn"><a href="/meals">Show all meals</a></button>
                </div>
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