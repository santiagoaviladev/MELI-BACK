import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import Breadcrumb from './Breadcrumb';



const ProductDetails = () => {


  const defP = {

    id:"",
    title:"",
    price:{currency:"",amount:"",decimals:""},
    picture:"",
    condition:"",
    shipping:"",
    sold_quantity:"",
    description:"",

  }  
  const location = useLocation().pathname; 
  const id = location.split("/")[2]
  const [selectedProduct, setSelectedProduct] =  useState(defP)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
      
    axios.get(`http://localhost:3000/items/?query=${id}`)
    .then((res)=> {

     

        setSelectedProduct(res.data.item)
        
    }
    )
    .catch((error)=>
    {
        console.log("ERRRO", error);
        setError(true)
        setMessage("Los sentimos. No podemos realizar la búsqueda en este momento. Por favor, intente más tarde")
    })


      return () => {
          setSelectedProduct(defP)
          setMessage("")
      }
  }, [id])


  if(selectedProduct===defP && !error && message!=="Buscando información...")
  {
      setMessage("Buscando información...")
      
  }
  else if(selectedProduct!==defP && !error && message==="Buscando información...")
  {
      setMessage("")
  }


  

  const details =  selectedProduct!==defP ? (
        <div>
        <div className="row">
          <div className="image-col">
              <img src={selectedProduct.picture}></img>

          </div>
          <div className="details-col">
              <div className="features">
                   {selectedProduct.condition === 'new' ? 'Nuevo' : 'Usado'} - {selectedProduct.sold_quantity} vendidos
              </div>
              <div className="details-title">
                    <h1 className="h1-details">{selectedProduct.title}</h1>
              </div>
              <div className="details-price">
              ${Intl.NumberFormat('en-Us').format(parseInt(selectedProduct.price.amount))}<span className="details-decimals">{parseInt(selectedProduct.price.decimals)!==0?parseInt(selectedProduct.price.decimals):"00"}</span>
              </div>
              <div className="details-buy">
                    <button >Comprar</button>
              </div>

          </div>
        </div>
        <div className="description-row">
            <h2 className="desct">Descripción del Producto</h2>
            <div className="description-details">
                {selectedProduct.description}
            </div>

        </div>
        </div>
  ) : ""


    return (
        <div>
        <Breadcrumb data={selectedProduct.title} origin="proudct" search={selectedProduct.title}></Breadcrumb>
        <div className="product-list-container">
          <span className="message"> {message} </span>
         {details}
       </div>
       </div>
    )
}

export default ProductDetails
