var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/Formdatabase')
var db=mongoose.connection
db.on('error',() => HTMLFormControlsCollection.log("Error in Connecting to Database"))
db.once('open',() => console.log("Connected to Database"))

app.post("/sign_up",(req,res) => {
    var name=req.body.name
    var age=req.body.age
    var email=req.body.email
    var phone=req.body.phone
    var birth=req.body.birth
    var gender=req.body.gender
    var address=req.body.address
    var address1=req.body.address1
    var address2=req.body.address2
    var region=req.body.region
    var postal=req.body.postal

    var data={
        "name":name,
        "age":age,
        "email":email,
        "phone":phone,
        "birth":birth,
        "gender":gender,
        "address":address,
        "address1":address1,
        "address2":address2,
        "region":region,
        "postal":postal

    }
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully")
    })
    return res.redirect("signup_succesful.html")
}) 

app.get("/",(req,res) => {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect("index.html")
}).listen(3000);

console.log("Listening on port 3000")