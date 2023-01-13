const express = require("express")
const {
    addDocController,
    getAllDocController,
    getByIdDocController,
    editByIdDocController,
    delByIdDocController
} = require("../controllers/docController")
/**
* 
*
*
*/
const routes = express.Router()
/**
* 
*  
*
*/
routes.get("/doc", getAllDocController)
routes.get("/doc/:id", getByIdDocController)
/**
* 
*  
*
*/
routes.post("/doc", addDocController)
/**
* 
*  
*
*/
routes.put("/doc/:id", editByIdDocController)
/**
* 
*  
*
*/
routes.delete("/doc/:id", delByIdDocController)
/**
* 
*  
*
*/
module.exports = routes