const carNames = require('car-names')


module.exports = {

    countKeys: (obj) => {
      
      const result = Object.keys(obj).length
      return result
      
    },
    randomCars: (num) => {

        const carArr = []
            for( i=0; i < num; i++){
                carArr.push(carNames.random())
            }

            return carArr

    },
    newArray: (arr) => {
       const firstletterarr = [] 
        arr.map(x => {
            firstletterarr.push(x[0])
        })
        

        console.log(firstletterarr)

    }
}