
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedTours,removeSelectedTour } from '../../../redux/actions/tours';
import { fetchSelectedBlog, removeSelectedBlog} from "../../../redux/actions/blog";




const BlogItemDetail = () => {  

  const { blogId } = useParams();    

  let blog = useSelector((state) => state.selectedBlog);
  const { name, imageUrl, info } = blog; 
  console.log ("Blog", blog) 


  const dispatch = useDispatch();
  
  // const fetchSelectedBlog = async (id) => { 
  //   const response = await axios
  //     .get(`http://localhost:3001/blogItems/${id}`)  
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     }); 
  //   dispatch(fetchSelectedBlog(response.data)); 
  // }; 

  // useEffect(() => {
  //   if (blogId && blogId !== "") fetchSelectedBlog(blogId);
  //   return () => {
  //     dispatch(removeSelectedBlog());
  //   };
  // }, [blogId]); 

  useEffect(() => {
    if (blogId && blogId !== "") dispatch(fetchSelectedBlog(blogId));
    return () => {
      dispatch(removeSelectedBlog());
    };
  }, [blogId]);


    return (
        <div className="wrapper">
            
      <div className="containerrr">
        <div className="main__info"> 
          <h1> </h1>
          <div class="photo"><img   src={imageUrl} alt="nature" class="nature-photo" /></div>
          <h3>{name}</h3>
          <p>
          {info}
          </p>
          osdkldk
   
        </div>
      </div>

 
    

        </div>
    )
}

export default BlogItemDetail;


