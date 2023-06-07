import axios from  'axios';
import { useState } from "react";
import Banner from "./banner";

const Addpost = () => {
    let titles="Food Blogs"
    let [author,setAuther]=useState('')
    let[title,setTitle]=useState('')
    let[summary,setSummary]=useState('')
    let[image,setImage]=useState('')
    let[location,setLocation]=useState('')

    const Submit=(e)=>{
        e.preventDefault()
        let data={author,title,summary,image,location}

        if(author && title && summary && image && location)
        axios.post('http://localhost:4000/addpost',data)
        .then((res)=>{
                alert(res.data.message)
        })
    }
    return (
        <div className="addpost">
               <Banner data={titles}/>
            <div className="row justify-content-center">
                <div className="images col-6 mt-4">
                    <img src="/images/i6.jpeg" height="580px" alt="" />
                </div>
                <div className="frome col-5 ms-5 mt-3">
                    <h1>Add Blog</h1>
                    <hr />
                    <form action="" onSubmit={Submit}>
                        <div className="author mb-3">
                            <label className="form-label" htmlFor="">Author</label>
                            <input type="text" placeholder="Author" name="author" 
                            // value={author}
                            onChange={(e)=>setAuther(e.target.value)} className="form-control" />
                        </div>
                        <div className="titlen mb-2">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text"   name="title" placeholder='Title'
                            // value={title} 
                            onChange={(e)=>setTitle(e.target.value)} className="form-control" />
                        </div>
                        <div className="summary mb-2">
                            <label htmlFor="" className="form-label">Summary</label>

                            <textarea rows="4" cols="50" type="text-area" name="summary" 
                            // value={summary}
                            onChange={(e)=>setSummary(e.target.value)} className="form-control"  placeholder="Summary"/>
                            
                        </div>
                        <div className="image mb-2">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="text" className="form-control"
                            // value={image} 
                            onChange={(e)=>setImage(e.target.value)} name="image" placeholder="images of the project" />

                        </div>
                        <div className="location mb-3">
                            <label htmlFor="" className="form-label">Location</label>
                            <input type="text" className="form-control"
                            // value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                             name="location" placeholder="Location of the post" />
                        </div>
                        
                        <button  className="btn btn-danger">SUBMIT</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Addpost;

