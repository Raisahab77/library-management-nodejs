const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/views/index.html')
    // res.send("hello from index")
})
app.get('/addbook.html',(req,res)=>{
    res.sendFile(__dirname +'/views/addbook.html')
    // res.send('Add book section')
})
app.get('/deleteBook.html',(req,res)=>{
    res.sendFile(__dirname +'/views/deletebook.html')
});

app.listen(3000);
console.log("Server started at 3000")