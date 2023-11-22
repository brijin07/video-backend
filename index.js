// import json server (require mthd)
const jsonserver=require('json-server')

// create server (create mthd)
const server=jsonserver.create()

// set router
const router=jsonserver.router("db.json")

// create middle ware act as a parser (data passing frond end to back end and back to frond - json data to js)
const middleware=jsonserver.defaults()

// Create port (port is Capital)
const PORT=process.env.PORT ||4000

// middleware use in server
server.use(middleware)
server.use(router)

// run server
server.listen(PORT,()=>{
    console.log("media player server started at Port:"+PORT);
})

// json data is array object - and the key is string in in kry value pair

