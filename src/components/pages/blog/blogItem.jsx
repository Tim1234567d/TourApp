import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import BlogLoader from './Loader/blogLoader' 

const BlogItem = () => {  

    const blogItem = useSelector (({blog}) => blog.blogItems)
    const isLoaded = useSelector (({blog}) => blog.isLoaded)

    const renderBlogItems = isLoaded ? blogItem.map((blogItem) => {
        const { id, imageUrl, info, subtitle} = blogItem; 
 
        return( 
          <div key={id}>
            <Link to = {`/blogItemDetail/${id}`} >
            <div className="blog__card"> 
                <div className="blog__cardPic">
                  <img
                    src={imageUrl}
                    alt="123"
                    className="top__cardThumb"/> 
                </div>
                <p className="blog__cardDesc">
                  {subtitle}
                </p>
                <a href="#" className="blog__cardMore">REED MORE</a>
              </div>
              </Link>
              </div>
        )
    }) : Array (9).fill(<BlogLoader/>)
return <>{renderBlogItems}</>
    
}

export default BlogItem