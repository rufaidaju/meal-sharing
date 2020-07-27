var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/meals/:id", window.handleMealRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/reservation/:meal_id", window.handleReservationRequest).resolve();
router.on("/reviews/:meal_id", window.handleReviewsRequest).resolve();
router.on("/review/:meal_id", window.handleReviewRequest).resolve();
router.on("/add-meal", window.handleAddMealRequest).resolve();