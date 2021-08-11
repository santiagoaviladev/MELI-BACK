import React , {useEffect, useState} from 'react'
import "./styles.css"
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import ProductPreview from './ProductPreview';
import Breadcrumb from './Breadcrumb';

const ProductList = (props:any) => {

    const [list, setList] =  useState([])
    const [categories, setCategories] =  useState([])
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false);
    const location = useLocation().pathname; 
   
   
    /*Bug -  si usuario pone un '=' en la búsqueda*/  
    const term = location.split("=")[1]

   

   
    useEffect(() => {
        axios.get(`http://localhost:3000/search?query=${term}`)
        .then((res)=> {
            setCategories(res.data.categories)
            setList(res.data.items)
            
        }
        )
        .catch((error)=>
        {
            console.log(error);
            setError(true)
            setMessage("Los sentimos. No podemos realizar la búsqueda en este momento. Por favor, intente más tarde")
        })
            return () => {
            setList([])
            setMessage("")
        }
    }, [term,setList])

    if(list.length===0 && !error && message!=="Buscando información...")
    {
        setMessage("Buscando información...")
        
    }
    else if(list.length>0 && !error && message==="Buscando información...")
    {
        setMessage("")
    }


   
    
    
    return (
        <div>
        <Breadcrumb data={categories} origin="search" search={term}></Breadcrumb>
        <div className="product-list-container">
            <span className="message"> {message} </span>
            {list.map((product:any)=>{
                const id=product? product.id : 0
              return  <ProductPreview product={product} key={id} ></ProductPreview>
            })}
        </div>
        </div>
    ) 
   
}



export default ProductList
