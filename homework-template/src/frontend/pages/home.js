window.handleHomeRequest = () => {
    // document.body.innerHTML = `<h1>Home</h1>
    // <a href="meals" data-navigo>Meals</a>
    // asd
    // <a href="meal/1" data-navigo>meal/1</a>
    // `;
    document.querySelector(".content").insertAdjacentHTML("beforeend", `
    <h2 class="home-header">International Food</h2>
    <div class="message">  
     <div class="message-overlay">
      <div class="container">
       <div class="row text-center">
        <div class="col">
         <h3 class="message-header">Planning your next travel?</h3>
         <p class="message-text">Book a private meal with the best home cooksin their homes around the world</p>
        </div>
       </div>
      </div>
     </div>                                   
    </div>

    <div class="container meal-sharing-experience">
      <div class="row text-center">
        <div class="col experience-header">
          <h4>Meal sharing experience </h4>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-12 col-lg-6">
          <img class="experience-img" src="../pictures/food1.jpg" alt="eat with others"/>
        </div>
        <div class="col">
          <p class="experience-text">
           Experience the joy of a homemade meal (and eat it the way the locals do) over conversation about food and culture
          </p>
          <p class="experience-text">
           Learn about cultural and culinary traditions passed down through generations as you chop, grind and cook in a local kitchen
          </p>
          <p class="experience-text">
           Explore a nearby market with your host, discovering local and regional produce before returning home to cook and eat together
          </p>
          <p class="experience-text">
           helping people connect with authentic food experiences while traveling and  build a community of food and travel lovers seeking meaningful experiences around the world.
          </p>
        </div>
      </div>

      <div class="row ">
        <div class="col text-center">
          <button class="home-all-meals-btn"><a href="/meals">Show all meals</a></button>
        </div>
      </div>
      <div class="row ">
        <div class="col text-center">
          <button class="home-add-meal-btn"><a href="/add-meal">Add meal</a></button>
        </div>
      </div>
    </div>
    `);

    router.updatePageLinks();
  };