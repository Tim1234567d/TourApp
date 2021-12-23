import React from "react";
import { useSelector } from "react-redux";

const BlogItem = () => { 

    const blogItem = useSelector (({blog}) => blog.blogItems)

    const renderBlogItems = blogItem.map((blogItem) => {
        const { id, imageUrl, info} = blogItem;

        return(
            <div className="blog__card">
                <div className="blog__cardPic">
                  <img
                    src={imageUrl}
                    alt="123"
                    className="top__cardThumb"/> 
                </div>
                <p className="blog__cardDesc">
                  {info}
                </p>
                <a href="#" className="blog__cardMore">REED MORE</a>
              </div>
        )
    });
return <>{renderBlogItems}</>
    
}

export default BlogItem