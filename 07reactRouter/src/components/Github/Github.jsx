import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()

  //here loader concept used to replace this below thats why commented out this

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/anchal8219')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    
  return (
    <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>
    Github followers: {data.followers}
    <img src={data.avatar_url} alt=''/>
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/anchal8219')
    return response.json() //its like a promise
}
