const emailValidation = require('nodejs-email-validation')

module.exports  = {
    validateData: (req, res, next) => {
    let validationError = null

    const {email, passOne, passTwo} = req.body
    console.log(email, passOne, passTwo)

    const correctemail = emailValidation.validate(email)


    if(!correctemail) return validationError = "incorrect email"   
   if(passOne !== passTwo) return validationError = "passwrods do not match"

    if(validationError) return res.send({error:true, message: validationError})

    next()

}
}