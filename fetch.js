const http = require('http')
const fs = require('fs')

//variable that creates the file to store the data
var writeResults = fs.createWriteStream(__dirname + "/result/posts.json");

//fetch the data and use pipe to send it to the file 
http.get('http://jsonplaceholder.typicode.com/posts',(res,err)=>{
    if(err) throw err;
    res.pipe(writeResults);
    console.log("POSTS.json FILE HAS BEEN CREATED");
})