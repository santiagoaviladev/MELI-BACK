import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

function formatPrice(amount:string,currency:string,decimals:string)
{
    let formatted = ""

 
     

    if(parseInt(decimals)!==parseInt("0") )
        formatted =  "$"+Intl.NumberFormat('en-Us').format(parseInt(amount))+"."+decimals
    else
        formatted = "$"+Intl.NumberFormat('en-Us').format(parseInt(amount))

    return formatted

}
const ProductPreview = (props:any) => {
   
    const {product} = props
    const {id,picture,price,title,condition,location} = product
    const {amount,currency,decimals} = price
    const finalPrice = formatPrice(amount,currency,decimals)

  

    const url = `/items/${id}`

    return (
       
        <div className="product-preview" >
            <div className="product-picture">
            <NavLink to={url} className="product-link">  
                <img src={picture} alt={title}/>
            </NavLink>
            </div>
            <div className="product-prw-details">
             <div className="product-prew-price">{finalPrice}</div>
             <div className="product-prew-title"><NavLink to={url} className="product-link">  
            {title}</NavLink></div>
             <div className="product-prew-cond">{condition}</div>
            </div>
            <div className="product-city">
                {location}
            </div>
        </div>
      
    )
}


export default ProductPreview
