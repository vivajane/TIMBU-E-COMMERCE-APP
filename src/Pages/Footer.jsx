import React from 'react';
import logo from "../assets/Logos.png";
import logos from "../assets/frame.png";
import { NavLink } from 'react-router-dom';
const footers = [
    {
        id: 1,
        name:"About",
        link: "/link"
    },
    {
        id: 2,
        name:"Blog",
        link: "/blog"
    },
    {
        id: 3,
        name:"Careers",
        link: "/careers"
    },
    {
        id: 4,
        name:"We're hiring",
        link: "/hiring"
    },
    {
        id: 4,
        name:"Shipping & Returns",
        link: "/shipping"
    },
    {
        id: 5,
        name:"About",
        link: "/press"
    },
   
]

const Footer = () => {
  return (
    <div className='md:px-24 px-6 bg-grays bg-gray-200 mt-20 py-10'>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className='flex justify-between'>
            <div className='flex items-center gap-8'>
                {footers.map((footer) => (
                    <li key={footer.id} className='list-none hover:font-bold'>
                        <NavLink to={footer.link} className={(isActive) => 
                            isActive ? "text-black" : null
                        }>{footer.name}</NavLink>
                       

                    </li>
                ))}
            </div>
            <div>
                <h1>Downlaod the App</h1>
                <div>
                    <img src={logos} alt="logos" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
