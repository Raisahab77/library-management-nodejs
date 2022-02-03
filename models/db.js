const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',
{
    useNewUrlParser: true},
    (err)=>{
        if(!err){
            console.log("Connection Successful")
        }
        else{
            console.log("Connection not successful")
        }
});

console.log("Pahle kya execute hoga");

/*const mongoose = require('mongoose');

//  Connecting to database
mongoose.connect('mongodb://localhost:27017/library',{useNewUrlParser:true},(err)=>{
    if(!err){console.log('connection successful')}
    else{console.log(err)}
});


// Creating schema



const bookSchema = new mongoose.Schema({
bookName : String,
bookId : {
    type:String,
    required:true,
    unique:true},
bookAuthor : String
})


// creating collection using Model

const Book = new mongoose.model("Book",bookSchema);

// Insert a Document

const harryPotter = new Book(
    console.log("Pahle ee execute hona chahiye"),
    {
        bookName : 'Harry Potter',
        bookId : 'AB2',
        bookAuthor : 'Harry ke papa'
    }
)
harryPotter.save()
// try{
//     harryPotter.save();
// }
// catch (e){
//     console.log(e)
// } */
    