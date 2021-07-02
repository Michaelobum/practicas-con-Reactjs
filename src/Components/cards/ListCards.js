import Cards from "./Cards"
import React, {useEffect, useState} from 'react'
const ListCards = () => {
    const [celebr, setcelebr] = useState([])
    const [error, seterror] = useState(false)

    //console.log(celebr[0].name.title)
    useEffect(() => {
    const getUsuarios = async () => {
        try {  
            const res = await fetch ("https://randomuser.me/api/?results=4")
            const data = await res.json ()
            //console.log(data.results)
            setcelebr (data.results)  
            seterror (false)
        } catch (err) {
            console.log(err)
            seterror(true)
        }
    }
    getUsuarios()
    }, [])
    if (error){
        return (
        <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
          Error al cargar la api
        </div>
      </div>)
    }
    return (
        <div>        
            <div className="container">
                <div className="row" >
 
                {celebr.map(user => (
                    <div className="col-sm-6 col-md-3 col-lg-3" key = {user.login.uuid}>
                        {console.log(user)}
                        <Cards user={user}/>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default ListCards

