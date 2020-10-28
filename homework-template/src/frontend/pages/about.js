window.handleAboutRequest = () => {
    // document.body.innerHTML = `<h1>Home</h1>
    // <a href="meals" data-navigo>Meals</a>
    // asd
    // <a href="meal/1" data-navigo>meal/1</a>
    // `;
    document.querySelector(".content").insertAdjacentHTML("beforeend", `
    <h2 >About Us</h2>
    <p class="about-title"> Connect with local culture through food</p>
    <div class="about">
    <div class="about-text">
      <p>Meal shareing- allows you to meet the best home cooks around the world so you can immerse yourself in meaningful food experiences and cultural traditions passed down through generations.
         It also allows you share your cook experience with other visitors from all world countries.
      </p>
    </div>
    <div class="about-img">
      <img src="./pictures/food2.jpg" href="Flags interntional food">
    </div>
  </div>
    
    
    `);

    router.updatePageLinks();
  };