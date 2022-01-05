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

  useEffect(() => {
    dispatch(fetchBlog());
    
  }, []);


    return (
        <section className="section-blog">
      <div className="wrapper">
        <div className="photo-big-3"><img src="https://franks-travelbox.com/wp-content/uploads/2018/01/kirgistan-im-juli-und-august-werden-am-son-kul-see-in-kirgistan-eigene-gacc88ste-jurten-fucc88r-touristen-mit-erhocc88htem-komfort-errichtet-travel-experts-kyrgyzstan.jpg" alt="" /></div>
       
        <div className="blog__cards"> 

          <BlogItem />
        </div>
      </div>
    </section> 
    )
}

export default Blog;