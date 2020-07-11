const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const utils = require("../utils")


router.get("/:id", async (request, response) => {
    try {
      const reservation =  await knex.from('reservation').select('*')
        .where('id',request.params.id);

      if (reservation.length == 0){ 
        response.send(404);
      }else{
        response.json(reservation);
      }
      
    } catch (error) {
      throw error;
    }
  });

  router.get("/", async (request, response) => {
    try {
      const reservations= await knex("reservation").select("*");

      if( reservations.length == 0 ){ 
        response.send("There are no reservations to show ")
      } 

      response.json(reservations); 
    }catch (error) {  
      throw error; 
    }
  });

  router.post("/", async (request, response) => {
    try {
      
      let reservation = await knex('reservation').insert({
        name:request.body.name, 
        email:request.body.email, 
        meal_id:Number(request.body.meal_id) 
        })  
        response.send(reservation)  
    } catch (error) {
      throw error;     
    }
  }); 
  
  router.put("/:id", async (request, response) => {
    try {
      const reservation =  await knex('reservation').where('id',request.params.id)
        .update({
        name:request.body.name, 
        email:request.body.email, 
        meal_id:Number(request.body.meal_id) , 
        });
      response.send(request.body); 
      
    } catch (error) { 
      throw error; 
    }
  }); 

  router.delete("/:id", async (request, response) => {
    try {
       const reservation =  await knex('reservation').where('id',request.params.id).del()
       response.send(`The reservation with id ${request.params.id} deleted`); 
    } catch (error) { 
      throw error; 
    }
  });

  module.exports = router;    