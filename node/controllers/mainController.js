
// const Car = require("../models/car")
const User = require("../models/userSchema")
const bcrypt = require("bcrypt")




let shownpart = {}

const newarr = []
const correctlettersarr = []

const words = ["ARBUZAS", 'KRIAUSE', 'OBUOLYS', "BANANAS", "SLYVA"]
let wordindex = 0

function createword(index){
 let splitword = words[index].split("")

    for(let i = 0; i < splitword.length; i++){
        
            newarr[i] = {
                letter: splitword[i],
                visisble: false
            }
    }
    
   return newarr

}
 

const positions = [
        "hmbottom", "hmbody", "hmtop", "hmheadtop", "hmhead", "hmhumanbody", "hmlefthand", "hmrighthand", "hmleftleg", "hmrightleg"
    ]

let currentIndex = -1
var hangmanarr = []



module.exports = {

addNewUser: (req, res) => {
    const {email, passOne} = req.body
    console.log(email, passOne)
    const user = new User({
        useremail: email,
        userpass: passOne,
        userimage: "https://www.royalunibrew.com/wp-content/uploads/2021/07/blank-profile-picture-973460_640.png"
        
    })
    user.save()
    .then((result) => {
        res.send({error: false, result})
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })

},
lognewUser: (req, res) => {
    const {email, passOne} = req.params

    User.findOne({useremail: email, userpass: passOne})
    .then((result) => {
        if(result === null) {
            res.send({error:true, message: "user not found"})
        } else {
            res.send({error: false, message: "user was found", result})
        }
        
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
        res.send({error:true, message: "user not found"})
    })
},
// with hashing password
//  addNewUser: async (req, res) => {
//     const {email, passOne} = req.body
//     console.log(email, passOne)

//     const hashPass =  await bcrypt.hash(passOne, 10)

//     const user = new User({
//         useremail: email,
//         userpass: hashPass,
//         userimage: "https://www.royalunibrew.com/wp-content/uploads/2021/07/blank-profile-picture-973460_640.png"
        
//     })
//     user.save()
//     .then((result) => {
//         res.send({error: false, result})
//         console.log(result)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// },
// lognewUser: async (req, res) => {
//     const {email, passOne} = req.params

    
//     const newUser = await User.findOne({useremail: email})
//     if(!newUser) return res.send({error:true, message: "user not found"})

//     const compare =  await bcrypt.compare(passOne, newUser.passOne)
    
//     if(!compare) return res.send({error:true, message: "incorrect password"})
//     console.log(newUser.passOne)
//     console.log(passOne)
        
        
//         if(newUser && compare){
//              res.send({error: false, message: "user was found", result})
        
//         }
           
        
        
//         console.log(result)
    
//     .catch((e) => {
//         console.log(e)
//         res.send({error:true, message: "user not found"})
//     })
// },

    setNewWord: (req, res) => {
        createword(wordindex)

        res.send({data: newarr})
    },
    makeGuess: (req, res) => {
        const {answer, user} = req.params
        const upper = answer.toUpperCase()
        const findLetter = newarr.filter(x => x.letter === upper)
        const updatedarr = [...newarr]
       if(findLetter.length <= 0) {
           if(currentIndex + 2 < positions.length){
               
                currentIndex ++
                hangmanarr.push(positions[currentIndex])
            
            User.findOneAndUpdate({useremail: user}, {$inc: {userpoints: -5}}, {new: true})
            .then((updateduser) => {
                res.send({error: true, message: "incorrect", hangmanarr, updateduser}) 
            })
            .catch((e) => {
                console.log(e)
            })
           } else {
               res.send({error: true, message: "gameover"})
           }
                    
       } 
       
       
       else {
                if(correctlettersarr.find(x => x === upper))  return res.send({error: true, message: "already guessed" })
                updatedarr.forEach(x => {
                if(x.letter === upper || x.visible === true){
                    console.log("correct answer")
                    correctlettersarr.push(upper)
                    x.visible = true
  
                } 
                
                else {
                    console.log("incorrect")
                    x.visible = false  
                    

                }
            }) 
            

            User.findOneAndUpdate({useremail: user}, {$inc: {userpoints: +5}}, {new: true})
            .then((updateduser) => {
                if(updatedarr.every(item => item.visible === true)) {
                    res.send({error: false, message: "win", updatedarr, updateduser})
                } 
                else {
                    res.send({error: false, message: "correct", updatedarr, updateduser})
                }
                
                
            })
            .catch((e) => {
                console.log(e)
            })
            console.log(updatedarr)
           }

    },
    changecurrentword: (req, res) => {
        wordindex++
        createword(wordindex)
        hangmanarr = []
        currentIndex = -1
        res.send({newarr, hangmanarr})
    },
    showAllUsers: (req, res) => {
        User.find()
         .then((result) => {
        res.send(result)
    })
    .catch((e) => {
        console.log(e)})
    },

}

