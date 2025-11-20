import express from "express";

const app = express();
const PORT=4000;


app.get('/',(req,res) => {
    res.json({msg : "Hello world"});
});


//CRUD functionality of movies
//R-For Reading

app.get('/movies',() => {

});


//C - For Creating Movies

app.post('/movies',() =>{

});
//U-For updating movies 

app.put('/movies/:id',() =>{

});

//D-delete the movies

app.delete('/movies/:id',() => {

});



app.listen(PORT,() => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
