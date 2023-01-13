const express = require("express")
const cors = require("cors")
const routes = require("./src/routes")
/*
* 
*
*
*/
const app = express()
/*
* 
*   middlewares
* 
*/
app.use(express.json())
app.use(cors()) // https://www.npmjs.com/package/cors

/*
* 
*  Navigation routes
* 
*/
app.use(routes)
/*
* 
*  Connection instance
* 
*/
require("./src/database")
/*
* 
* 
* 
*/
app.listen(4444, () => {
    console.log("Server running...")
})