import Banner from "./banner";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/singlePost.css"

const SinglePost = () => {
    const { id } = useParams('')
    let titles = "single post information"

    let [posts, setPosts] = useState([])

    //fetching id from Route parameter
    useEffect(() => {

console.log(id)

        let fecthing = async () => {
            let response = await axios.get(`http://localhost:4000/food/${id}`)
            let data = await response.data
            console.log(data);
            setPosts(data)
        }
        fecthing()
    }, [])

    return (
        <div className="singlepost">
            <Banner data={titles} />
            <div className="cc m-5 border bg-light">
                <div className="content d-flex">
                    <div className="img p-3">
                        <img height={650} width={550} src={posts.image} alt="" />
                    </div>
                    <div className="details p-3">
                        <h1>Title : {posts.title}</h1>
                        <h1>Author : {posts.author}</h1>
                        <h1 className="sum mb-5">Summary :{posts.summary}</h1>
                        <h2 className="loc">Location</h2>
                        <iframe className="border m-5" width="650" height="400" frameborder="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src={posts.location}></iframe>
                    </div>
                </div>
                <div className="bb text-center mb-3">
                <Link className="btn btn-primary" to={`/home/food`} >Back</Link>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;