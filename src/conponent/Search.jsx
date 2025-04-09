import React, { useContext } from 'react'
import { ContextProvider } from './Context'
import { FaTimes } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ContextProvider)
  return showSearch ?  (
    <div className=' bg-gray-50 py-4 text-center'>
      <div className='inline-flex border-gray-400 items-center justify-center px-3 my-5 mx-3 w-3/4'>
        <input onChange={(e) => setSearch(e.target.value)} value={search} className='bg-inherit rounded border-[1px] outline-none px-3 py-2 flex-1' type="text" placeholder='Search' />
    
      </div>
      <div onClick={() => setShowSearch(false)} className='inline-flex'><FaTimes/></div>
    </div>
  ): null
}

export default Search
