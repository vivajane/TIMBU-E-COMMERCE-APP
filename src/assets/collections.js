import one from "../assets/imgone.png"
import two from "../assets/imgtwo.png"
import three from "../assets/imgthree.png"
import four from "../assets/imgfour.png"
import five from "../assets/imgfive.png"
import six from "../assets/imgsix.png"
import seven from "../assets/imgseven.png"
import eight from "../assets/imgeight.png"
const collections = [
    {
        id: 1,
        name: "Printed T-Shirt",
        price: 2000,
        image: one,
        category: "tshirts"
    },
    {
        id: 2,
        name: "Alberta Sunset Men's Shirt",
        price: 12000,
        image: two,
        category: "tshirts"
    },
    {
        id: 3,
        name: "Men Cartoon Face Print Tee",
        price: 12000,
        image: three,
        category: "tshirts"
    },
    {
        id: 4,
        name: "Unisex Hoodles Pullover SweatsShirt",
        price: 12000,
        image: four,
        category: "sweatshirts"
    },
    {
        id: 5,
        name: "Toji Fushiguro Noir Hoodie",
        price: 12000,
        image: five,
        category: "hoodies"
    },
    {
        id: 6,
        name: "TOPBRAND LIFE Men's Polyester",
        price: 20000,
        image: six,
        category: "sweatshirts"
    },
    {
        id: 7,
        name: "TOPBRAND LIFE Men's Polyester",
        price: 12000,
        image: seven,
        category: "sweatshirts"
    },
    {
        id: 8,
        name: "396 Hooded Casual Jacket",
        price: 12000,
        image: eight,
        category: "hoodies"
    },
]



export default collections;

// import axios from "axios";

// export const getCollections = async(page) =>{
//    try{
//     const response = await axios(`https://timbu-get-all-products.reavdev.workers.dev/?organization_id=1fc83c22f15b403486e21c41e0447ea5&reverse_sort=false&page=${page}&size=10&Appid=4GUPFVSXQNV4YGU&Apikey=11572620f54d416ea88ac68a5ee6052b20240712143453664117`,
//         {
            
//             headers: {
//               'Accept': 'application/json', 
//               'Content-Type': 'application/json',
//             }
//           }
//     )
//     console.log(response.data, "from response")
//     return response.data;
//    }catch (error){
//     console.log("error")}
// } 


// export const getSingleCollection = async(productId) =>{
//   try{
//    const response = await axios(`https://timbu-get-single-product.reavdev.workers.dev/${productId}?organization_id=1fc83c22f15b403486e21c41e0447ea5&Appid=4GUPFVSXQNV4YGU&Apikey=11572620f54d416ea88ac68a5ee6052b20240712143453664117
// `,
//        {
           
//            headers: {
//              'Accept': 'application/json', 
//              'Content-Type': 'application/json',
//            }
//          }
//    )
//   //  console.log(response.data, "from response")
//    return response;
//   }catch (error){
//    console.log("error")}
// } 