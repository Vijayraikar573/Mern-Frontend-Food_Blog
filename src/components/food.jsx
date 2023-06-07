import React from 'react'
import axios from "axios"
import {useState,useEffect} from "react"
import Banner from "./banner";
import { Link } from "react-router-dom";
import "../styles/food.css"

const Food = () => {
  let titles="Food Blogs"
  let [posts,setPosts]=useState([])
  
  let [search,setSearch]=useState([])
 


  useEffect(()=>{
    try{
      axios.get('http://localhost:4000/food').then((res)=>res.data)
          .then((data)=>{
            setPosts(data)
            setSearch(data)
        
      })
    }catch(err){
      console.error(err);
    }
  },[])

   const searchUser=(e)=>{
    setSearch(posts.filter(x=>x.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }
 
   
  return (
    <div className="foods">
        
        <Banner data={titles}/>
      
        <div className="searchbar">
          <div className='search'><p>search:</p></div>
          <div>
            <input onChange={searchUser} placeholder="search for title"  type="text" />
            </div>
        </div>
      
        
            <div className="post_list d-flex flex-wrap " style={{backgroundColor:"black" }}>
           
                { search.map((x)=>{
                  return(
                    <div className="pp m-2 p-2 border bg-light m-5"  >
                        <img height={200} width={250} src={x.image} alt="" />
                        <h3>Title : {x.title}</h3>
                        <h4>Author : {x.author}</h4>
                        
                        <Link className="btn btn-primary" to={`/home/food/${x._id}`}>Read_Post</Link>
                    </div>
                )}) }
            </div>
      </div>
        
  )
}

export default Food;