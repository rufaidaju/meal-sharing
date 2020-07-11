var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/meals/:id", window.handleMealRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
// router.on("/reservation", window.handleReservationRequest).resolve();