const express = require('express')
const mongoose = require ('mongoose')
const app =express()
const PORT =9092
const bodyParser = require('body-parser') ;
app.use=(bodyParser.json());

const cardschema = new mongoose.Schema({

    country:String,
    title:String,
    text:String,
    ImageUrl:String
})

const AUTHORS=[
    {
        id:1,
        country:"United States",
        Title:	"Addiction When Gambling Becomes A Problem",
        text: "inappropriate behavior ipsum dolor sit amet, consectetur.",
        Image:'https://preview.colorlib.com/theme/immigration/img/s1.jpg'
    },
    {
        id:2,
        country:"Canada",
        Title:	"Addiction When Gambling Becomes A Problem",
        text: "inappropriate behavior ipsum dolor sit amet, consectetur.",
        Image:'https://preview.colorlib.com/theme/immigration/img/s2.jpg'
    },    {
        id:3,
        country:"Germany",
        Title:	"Addiction When Gambling Becomes A Problem",
        text: "inappropriate behavior ipsum dolor sit amet, consectetur.",
        Image:'https://preview.colorlib.com/theme/immigration/img/s3.jpg'
    },    {
        id:4,
        country:"Australia",
        Title:	"Addiction When Gambling Becomes A Problem",
        text: "inappropriate behavior ipsum dolor sit amet, consectetur.",
        Image:'https://preview.colorlib.com/theme/immigration/img/s4jpg'
    },
    
]
// BASE URL
app.get('/api',(req,res)=>{ 
    res.send('welcome our api')
})

// AUTHORS CRUD
// GET ALL AUTHOR
app.get("/api/authors",(req, res) => {
    const {name}= req.query;
    if(!name){
    res.status(200).send(AUTHORS)
}
else{
    res.status(200).send(AUTHORS.filter((x)=>x.name.toLocaleLowerCase().trim().includes(name.toLocaleLowerCase.trim)))
}
})
// GET AUTHOR BY ID
app.get('/api/authors/:id',(req,res)=>{
    const{id}=req.params;
    res.status(200).send(ARTISTS.find((x)=>x.id==id))
})
// DELETE AUTHOR
app.deleteAuthor('/api/authors:id',(req,res)=>{
    const {id}=req.params;
    
    // DELETE
    const deleteAuthor=AUTHORS.find((x)=>x.id==id);
    const idx = AUTHORS.indexOf(deleteAuthor)
    AUTHORS.splice(idx,1);
   res.status(203).send({
    message: `${deleteAuthor.name} deleted succesfuly!`
   })
})
// POST AUTHOR
app.post('/api/authors/',(req,res)=>{
    const{id,name,bornIn,genre,gender,IsDead}=req.body;
    const newAuthor={
        id:1,
        name:name,
        bornIn:bornIn,
        genre:genre,
        gender:gender,
        IsDead:IsDead
    }
    AUTHORS.push(newAuthor);
    res.status(201).send({
        message:`${newAuthor.name} posted succesfuly!`
    })
})


// EDIT AUTHOR
// app.put('/api/authors/:id',(req,res)=>{
//     const {id}=req.params;
//     const updatingAuthors=AUTHORS.find((x)=>x.id==id);
//     const {id,name,bornIn,genre,gender,IsDead}=req.body

// })

app.listen(PORT,()=>{ 
    console.log(`app running on ${PORT}`)
})
