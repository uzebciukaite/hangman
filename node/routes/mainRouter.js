const express = require("express")
const router = express.Router()

const { addNewUser, lognewUser, setNewWord, makeGuess, changecurrentword, showAllUsers} = require("../controllers/mainController")

const {
    validateData
} = require("../modules/validator")

router.post("/addUser", validateData, addNewUser)
router.get("/logUser/:email/:passOne", lognewUser)
router.get("/setWord", setNewWord)
router.get("/singleGuess/:answer/:user", makeGuess)
router.get("/changeword", changecurrentword)
router.get("/showall", showAllUsers)

module.exports  = router