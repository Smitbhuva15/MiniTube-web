import React, { useState } from 'react'
// import {collectSearchData} from '../pages/singelVideo/SingelVideos';

const Search = ({data,collectSearchData }) => {
   const [newValue, setNewValue] = useState('');
  
  const handelSubmit=(e)=>{
    // e.preventDefault() ;
    // SerachFilterItem=data.filter((singleData)=>{
    //     return singleData.category===newValue;
    // })

    // e.preventDefault();
    collectSearchData(newValue);  
  }

  return (
   <form onSubmit={handelSubmit()}>
    <input type="search" name="search" placeholder='Search' className='outline-none border mr-2 pl-2 py-1 rounded-sm' id="" value={newValue} onChange={(e)=>{setNewValue(e.target.value)}} />
   </form>
  )
}

export default Search