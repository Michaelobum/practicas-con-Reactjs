import { Button } from 'bootstrap'
import React, {useEffect, useState} from 'react'
const Cards = ({user}) => {
    const {name,login,picture} = user
    const [megusta, setColor] = useState(true)
    const [meencanta, setColor1] = useState(true)
    const [celebri, setcelebri] = useState([])
    const [error, seterror] = useState(false)
    const [celebr, setcelebr] = useState (null)
    return (
        <div className = "card" >
                <img src={picture.large} className="card-img-top" alt={login.username}/>
                    <div className="card-body">                        
                    <h5 className="card-title">{name.first}</h5>
                    <buttom
                         href="#" className={celebr ?.picture?.large }
                        onClick={()=>setcelebri (!celebr)}>Me gusta</buttom>
                    </div>
        </div>
    )
}

export default Cards


