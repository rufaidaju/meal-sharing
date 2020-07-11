const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const utils = require("../utils")

router.get("/:id", async (request, response) => {
  try {
    const meal =  await knex.from('meal').select('*')
    .where('id',request.params.id);
   
    if (meal.length == 0){
      response.send(404);
    }else{
      response.json(meal);
    }
    
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  const maxPrice = Number(request.query.maxPrice);
  const availableReservations = request.query.availableReservations;
  const title = request.query.title;
  const createdAfter = new Date(request.query.createdAfter);
  const limit =Number(request.query.limit);
  
  try {
    let correspondingMeals= [];

    if (maxPrice){
      correspondingMeals =await knex("meal").select("*").where(function () {
        this
          .orWhere('price', '<',maxPrice)
      })
    }

    if (availableReservations) {
      correspondingMeals =await knex("meal").select("*").where({'availability':1})
    }

    if (title){
      correspondingMeals =await knex("meal").select("*").where('title','like',`%${title}%`)
    }

    if (createdAfter){
      correspondingMeals = await knex("meal").select("*").where('createdAt','>',createdAfter)
    }

    if (limit){
      let test = await knex("meal").select("*").limit(limit);
        response.send(test) 
    }
  
    if (limit == 0){  
      correspondingMeals = [];
    }

    if ( utils.isEmpty(request.query)  ){
      correspondingMeals= await knex("meal").select("title");
    }
    if( correspondingMeals.length == 0 ){
      response.send("There are no meals to show ")
    }

    response.json(correspondingMeals); 
  } catch (error) { 
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    
    let meal = await knex('meal').insert({title:request.body.title,
      maxNumberOfGuests:request.body.maxNumberOfGuests, 
      description:request.body.description, 
      createdAt:new Date(request.body.createdAt) , 
      price:request.body.price})  
      response.send(meal)  
  } catch (error) {
    throw error;     
  }
});    

router.put("/:id", async (request, response) => {
  try {
    const meal =  await knex('meal').where('id',request.params.id)
      .update({title:request.body.title,
        maxNumberOfGuests:request.body.maxNumberOfGuests,
        description:request.body.description,
        createdAt:new Date(request.body.createdAt),
        price:request.body.price
      });
    response.send(request.body); 
    
  } catch (error) { 
    throw error; 
  }
});

router.delete("/:id", async (request, response) => {
  try {
     const meal =  await knex('meal').where('id',request.params.id).del()
     response.send(`The meal wit id ${request.params.id} deleted`); 
  } catch (error) { 
    throw error; 
  }
});
 
module.exports = router;    