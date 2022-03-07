import React from 'react'

const Input = ({query,setQuery,search}) => {
  return (
    <div className='my-5 max-w-sm'>
     <form action="" onSubmit={search} className='border-b-white border-2 border-transparent flex justify-center p-2 text-white w-full'>
      <input type="text" name="" id="" onChange={(e)=>setQuery(e.target.value.trim())} value={query} className='bg-transparent outline-none w-full' placeholder='Enter location'/>
      <button type="submit" className='bg-white p-1 text-sky-900 rounded-md'>Search</button>
     </form>
    </div>
  )
}

export default Input