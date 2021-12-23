import React from "react";
import BlogItem from "./blogItem";
import axios from "axios";
import { useEffect } from "react";
// import {setBlog} from "../../../redux/actions/blog"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchBlog } from "../../../redux/actions/blog";




const Blog = () => {
  const blogItems = useSelector((state) => state.blog.blogItems);
   const dispatch = useDispatch();

// const fetchblog = async () => {
//     const response = await axios
//       .get("http://localhost:3001/blogItems")
//       .catch((err) => {
//         console.log("Err: ", err);
        
//       });
//     dispatch( setBlog(response.data));
//     console.log(response)
//   };      

  useEffect(() => {
    dispatch(fetchBlog());
    
  }, []);


    return (
        <section className="section-blog">
      <div className="wrapper">
        <div className="photo-big-3"><img src="./img/pngCard/Burana-Tower.jpg" alt="" /></div>
       
        <div className="blog__cards"> 

          <BlogItem />

         

        </div>
      </div>
    </section> 
    )
}

export default Blog;