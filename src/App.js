import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchBox from "./Components/SearchBox";
import ProductList from "./Components/Product/ProductList";
import ProductDetails from "./Components/Product/ProductDetails";







export default function App() {

  return (
    <Router>
      <div>
        <SearchBox></SearchBox>
        <Switch>
          <Route path="/items/search=*">
            <Search />
          </Route>
          <Route path="/items/">
            <ItemDetails />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}



function Search() {
  return <div> 
          
          <ProductList></ProductList>

        </div>
         ;
}

function ItemDetails() {
  return <div> 
          
  <ProductDetails></ProductDetails>

</div>
}