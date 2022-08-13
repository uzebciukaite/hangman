import {React, useRef, useState} from 'react'
import Content from '../components/Content'




function HomePage({}) {
  const carmodel = useRef()
  const carcolor = useRef()
  const caryear = useRef()
  const colorfilter = useRef()
  const modelfilter = useRef()
    const [getData, setData] = useState([])
    const [getfiltData, setfiltData] = useState([])

function addcar() {


  fetch("http://localhost:4000/add-car/"+carmodel.current.value + "/" + carcolor.current.value + "/" + caryear.current.value)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

}

function showall(){
  fetch("http://localhost:4000/all-cars/" )
            .then(res => res.json())
            .then(data => {
              setData(data)
              
                console.log(data)
            })
}

function filterItems(){
  fetch("http://localhost:4000/filtered-cars/"  + colorfilter.current.value + "/" + modelfilter.current.value )
            .then(res => res.json())
            .then(data => {
              setfiltData(data)
              setData(null)
                console.log(data)
            })
}

  return (
    <div className="startquiz">
      <div>
<input ref={carmodel} type="text" placeholder="car model" />
     <input ref={carcolor} type="text" placeholder="car color" />
     <input ref={caryear} type="text" placeholder="car year" />
     <button onClick={addcar}>ADD CAR</button>
     <button onClick={showall}> Show all cars</button>

      </div>
      <div>
        <input ref={colorfilter} type="text" placeholder="color"/>
        <input ref={modelfilter} type="text" placeholder="model"/>
        <button onClick={filterItems}>Filter by color</button>
      </div>
     
     
     <Content getData={getData} getfiltData={getfiltData}/>

     
    
    </div>
  )
}

export default HomePage