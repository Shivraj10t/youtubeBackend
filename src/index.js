import { app } from "./app.js";
import DBconnection from "./db/index.js";


DBconnection().then(()=>{
    app().listen(()=>{
   
        console.log(`express listen on port ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log(`connection fail `)
})



