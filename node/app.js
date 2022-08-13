const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://admin:admin123@cluster0.b3ygyni.mongodb.net/?retryWrites=true&w=majority")
.then(res => {
    console.log("connection succesful")

}).catch(e => {
    console.log(e)
})




// async function hashPassword(){
 

//     const plainPass = "Labas123"

//     const hashPass =  await bcrypt.hash(plainPass, 10)

//     console.log(hashPass)
// }


// hashPassword()


// async function comparePass(){
//     const plainPass = "Labas123"
//     const hashPas = '$2b$10$9KVre9I.NrvSxtN5lw5xzO.selCKCh9KWIWdbMZmC6Ukt5sh2wA7q'
  
//     const compare = await bcrypt.compare(plainPass, hashPas)

//   console.log(compare)

// }

// comparePass()


const mainRouter = require("./routes/mainRouter")
app.use(cors())

app.use(express.json())
app.use("/", mainRouter)

app.listen(4000);
