import { useContext } from 'react'
import { useParams } from 'react-router-dom';
// import collections from '../assets/collections';
import { ContextProvider } from '../conponent/Context';
import Product from '../conponent/Product'
import ProductHead from '../conponent/ProductHead';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getSingleCollection } from "../assets/collections";


const AddToCart = () => {
  const [collections, setCollections] = useState({});
  const{addtocardId} = useParams();

   useEffect(() => {
    const fetchSingleCollection = async () => {
      
    
    try{
      const response = await getSingleCollection(addtocardId);
      setCollections(response.data);
      console.log(response.data, "response")

    }
    catch (error){
      console.log(error, "the error")
    }}
    fetchSingleCollection();


  },[addtocardId])
  
  // const {collections} = useContext(ContextProvider);
  // const product = collections.find((e) => e.id === addtocardId)
  // console.log(useParams())
  console.log(collections, "ggg")
  return (
    <div>
      
      <ProductHead product= {collections??{}}/>
      <Product product= {collections??{}}/>
     
   
    </div>
  )
}

export default AddToCart
