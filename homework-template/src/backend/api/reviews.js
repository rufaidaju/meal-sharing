const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const utils = require("../utils")


router.get("/:id", async (request, response) => {
    try {
      const review =  await knex.from('review').select('*')
        .where('id',request.params.id);

      if (review.length == 0){ 
        response.send(404);
      }else{
        response.json(review);
      }
      
    } catch (error) {
      throw error;
    }
  });

  router.get("/", async (request, response) => {
    try {
      const reviews = await knex("review").select("*");

      if( reviews.length == 0 ){ 
        response.send("There are no reviews to show ")
      } 

      response.json(reviews); 
    }catch (error) {  
      throw error; 
    }
  });

  router.post("/", async (request, response) => {
    try {
      let review = await knex('review').insert({
        numberOfStars:request.body.numberOfStars, 
        content:request.body.content, 
        createdAt:new Date(request.body.createdAt) , 
        meal_id:Number(request.body.meal_id) 
        })  
        response.send(review);  
    } catch (error) {
      throw error;     
    }
  }); 
  
  router.put("/:id", async (request, response) => {
    try {
      const review =  await knex('review').where('id',request.params.id)
        .update({
            numberOfStars:request.body.numberOfStars, 
            content:request.body.content, 
            createdAt:new Date(request.body.createdAt) , 
            meal_id:Number(request.body.meal_id)  
            }); 

            response.send(request.body)  ; 
    } catch (error) { 
      throw error; 
    }
  }); 

  router.delete("/:id", async (request, response) => {
    try {
       const review =  await knex('review').where('id',request.params.id).del()
       response.send(`The review with id ${request.params.id} deleted`); 
    } catch (error) { 
      throw error; 
    }
  });
  
  module.exports = router;    