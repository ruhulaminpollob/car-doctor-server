const express= require('express');
const cors=require('cors');
const app =express();
const prot=process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("car doctor is running");
});





app.listen(prot, ()=>{
    console.log(`Car Doctor Server is running on Port: ${prot}`)
})