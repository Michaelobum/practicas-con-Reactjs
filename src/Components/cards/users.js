import React, {useEffect, useState} from 'react'
import Cards from "./Cards"
import Contador from "../contador/contador"
const Calculadora = () => {
    const [celebridades, setcelebridades] = useState([])
    const [error, seterror] = useState(false)
    useEffect(() => {
        const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/")
                const data = await res.json()
                setcelebridades(data.results)
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
            
        }
        getUsuarios()
    }, [])
//console.log(celebridades[0].name.last)
    if (error){
        return <div class="alert alert-danger" role="alert">
                    Error a cargar el api Users! <a href='https://randomuser.me'>Revise el link</a>
               </div>
    }
    return (
      <div className="col-sm-10">
      <div className="row">
      <div className="col-sm-4 position-sticky col-sm-4 top-0">
          <Contador/>
      </div>      
            <div className="container">
                <div className="row">
                {celebridades.map(user =>(    
                    <div className="position-sticky start-100 col-sm-4 top-0" key={user.login.uuid}>
                        <Cards user={user}/>
                    </div>
                ))}           
                </div>
        </div>
        </div>
    </div>
    )
}
export default Calculadora