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
        category: "tshirts",
        subcategory: "men",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 2,
        name: "Alberta Sunset Men's Shirt",
        price: 12000,
        image: two,
        category: "tshirts",
        subcategory: "men",
        bestSeller: false,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 3,
        name: "Men Cartoon Face Print Tee",
        price: 12000,
        image: three,
        subcategory: "men",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"],
        category: "tshirts"
    },
    {
        id: 4,
        name: "Unisex Hoodles Pullover SweatsShirt",
        price: 12000,
        image: four,
        category: "sweatshirts",
        subcategory: "men",
        bestSeller: false,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 5,
        name: "Toji Fushiguro Noir Hoodie",
        price: 12000,
        image: five,
        category: "hoodies",
        subcategory: "men",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 6,
        name: "TOPBRAND LIFE Men's Polyester",
        price: 20000,
        image: six,
        category: "sweatshirts",
        subcategory: "men",
        bestSeller: false,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 7,
        name: "TOPBRAND LIFE Men's Polyester",
        price: 12000,
        image: seven,
        category: "sweatshirts",
        subcategory: "men",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 8,
        name: "396 Hooded Casual Jacket",
        price: 12000,
        image: eight,
        category: "hoodies",
        subcategory: "men",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 9,
        name: "396 Hooded Casual Jacket",
        price: 18000,
        image: "https://images.pexels.com/photos/4620623/pexels-photo-4620623.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "hoodies",
        subcategory: "women",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 10,
        name: "396 Hooded Casual Jacket",
        price: 18000,
        image: "https://images.pexels.com/photos/6311235/pexels-photo-6311235.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "hoodies",
        subcategory: "women",
        bestSeller: false,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 11,
        name: "396 SweatShirt Casual Jacket",
        price: 18000,
        image: "https://images.pexels.com/photos/7001101/pexels-photo-7001101.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "sweatshirts",
        subcategory: "women",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 12,
        name: "296 Shirt Casual Jacket",
        price: 8000,
        image: "https://images.pexels.com/photos/3805766/pexels-photo-3805766.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "tshirts",
        subcategory: "women",
        bestSeller: false,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 13,
        name: "96 Shirt Casual Jacket",
        price: 7000,
        image: "https://images.pexels.com/photos/6214086/pexels-photo-6214086.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "tshirts",
        subcategory: "women",
        bestSeller: false,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 14,
        name: "296 Shirt kids Jacket",
        price: 8000,
        image: "https://images.pexels.com/photos/6299252/pexels-photo-6299252.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "tshirts",
        subcategory: "kids",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 15,
        name: "297 Shirt kids Jacket",
        price: 4000,
        image: "https://images.pexels.com/photos/7862322/pexels-photo-7862322.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "tshirts",
        subcategory: "kids",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 16,
        name: "296 Shirt girl Jacket",
        price: 8000,
        image: "https://images.pexels.com/photos/6437519/pexels-photo-6437519.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "hoodies",
        subcategory: "kids",
        bestSeller: false,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 17,
        name: "298 hoodies boy Jacket",
        price: 9000,
        image: "https://images.pexels.com/photos/6743183/pexels-photo-6743183.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "hoodies",
        subcategory: "kids",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 18,
        name: "298 hoodies boy Jacket",
        price: 9000,
        image: "https://images.pexels.com/photos/8435769/pexels-photo-8435769.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "hoodies",
        subcategory: "kids",
        bestSeller: false,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 19,
        name: "298 hoodies boy Jacket",
        price: 9000,
        image: "https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "hoodies",
        subcategory: "kids",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
    },
    {
        id: 20,
        name: "298 hoodies boy Jacket",
        price: 9000,
        image: "https://images.pexels.com/photos/7139817/pexels-photo-7139817.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "hoodies",
        subcategory: "kids",
        bestSeller: true,
        sizes: ["x", "xl", "xxl"]
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