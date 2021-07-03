import Cards from "./Cards"
import React, {children, useEffect, useState} from 'react'
//import celebridades from '../../helpers/usuarios'

const List = () => {
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
        <div>        
            <div className="container">
                <div className="row">
                {celebridades.map(user =>(    
                    <div className="position-sticky top-15 start-100 col-sm-25 col-md-5 col-lg-3" key={picture.large}>
                        <Cards user={user}/>
                    </div>
                ))}           
                </div>
            </div>
        </div>
    )
}

export default List;