import React from 'react'
import { NavLink } from 'react-router-dom'



const Breadcrumb = (props:any) => {

    const {data, origin, search} = props
    
    const url1 = `/items/search=${search}`
    const url2 = origin==="search" ? `/items/search=${data[0]}` : "/"

    

    return (<div className="breadcrumb"> <NavLink to={url1} className="breadcrumb-link">{search}</NavLink> {">"} <NavLink to={url2} className="breadcrumb-link">{origin==="search"?data[0]:'Volver al Home'}</NavLink> </div>)
       
    
}



export default Breadcrumb
